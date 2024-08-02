import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Sector, ResponsiveContainer } from "recharts";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./BMI.css";
import axios from "axios";
import RecipePopup from "./RecipePopup";

const BMI = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmr, setBmr] = useState(null);
  const [adjustedCalories, setAdjustedCalories] = useState(null);
  const [bmiCategory, setBmiCategory] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    if (adjustedCalories !== null) {
      fetchRecipes();
    }
  }, [adjustedCalories]);

  const fetchRecipes = async () => {
    try {
      const apiKey = import.meta.env.VITE_REACT_APP_RECIPE_API_NUTRIENTS;
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/findByNutrients?minCalories=${
          adjustedCalories / 3 - 100
        }&maxCalories=${adjustedCalories / 3 + 100}&number=8&apiKey=${apiKey}`
      );
      setRecipes(response.data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const fetchRecipeInfo = async (id) => {
    try {
      const apiKey = import.meta.env.VITE_REACT_APP_RECIPE_API_NUTRIENTS;
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${apiKey}`
      );
      setSelectedRecipe(res.data);
    } catch (error) {
      console.error("Error fetching recipe information:", error);
      toast.error("Error fetching recipe information. Please try again.");
    }
  };

  const calculate = () => {
    if (!weight || !height || !age || !gender) {
      toast.error("Please fill in all fields.");
      return;
    }
    calculateBmi();
    calculateBmr();
  };

  const calculateBmi = () => {
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    setBmi(bmiValue);
    determineBmiCategory(bmiValue);
    setActiveIndex(determineActiveIndex(bmiValue));
  };

  const calculateBmr = () => {
    let bmrValue;
    if (gender === "male") {
      bmrValue = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else {
      bmrValue = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
    }
    setBmr(bmrValue.toFixed(2));

    // Adjust calories based on BMI category
    let adjustedCaloriesValue = bmrValue;
    if (bmiCategory === "Underweight") {
      adjustedCaloriesValue = bmrValue + 300;
    } else if (bmiCategory === "Overweight") {
      adjustedCaloriesValue = bmrValue - 300;
    } else if (bmiCategory === "Obesity") {
      adjustedCaloriesValue = bmrValue - 500;
    }
    setAdjustedCalories(adjustedCaloriesValue.toFixed(2));
  };

  const determineBmiCategory = (bmiValue) => {
    if (bmiValue < 18.5) {
      setBmiCategory("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      setBmiCategory("Normal weight");
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      setBmiCategory("Overweight");
    } else {
      setBmiCategory("Obesity");
    }
  };

  const determineActiveIndex = (bmiValue) => {
    if (bmiValue < 18.5) {
      return 0;
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      return 1;
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      return 2;
    } else {
      return 3;
    }
  };

  const data = [
    { name: "Underweight", value: 1 },
    { name: "Normal weight", value: 1 },
    { name: "Overweight", value: 1 },
    { name: "Obesity", value: 1 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        {bmi !== null && (
          <>
            <text
              x={ex + (cos >= 0 ? 1 : -1) * 12}
              y={ey}
              textAnchor={textAnchor}
              fill="#333"
            >
              {`BMI ${bmi}`}
            </text>
          </>
        )}
      </g>
    );
  };

  return (
    <div className="bmiRecipes">
      <div className="bmi-container">
        <div className="bmi-calculator">
          <h1>BMI Calculator</h1>
          <div className="input-group">
            <label>Weight (kg): </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Height (cm): </label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Age: </label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Gender: </label>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <button onClick={calculate}>Calculate BMI</button>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  activeIndex={activeIndex}
                  activeShape={bmi !== null ? renderActiveShape : undefined}
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={150}
                  startAngle={180}
                  endAngle={0}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <p className="cal-bmi">Calculated BMI</p>

          {bmi && (
            <div className="result">
              <h2>Your BMI: {bmi}</h2>
              <h2>Calories intake per day: {adjustedCalories} kcal/day</h2>
            </div>
          )}
        </div>

        {adjustedCalories && recipes.length > 0 && (
          <div className="recipes">
            <h2>Recommended Recipes</h2>
            <div className="recipe-list">
              {recipes.map((recipe) => (
                <div key={recipe.id} className="recipe-card">
                  <img src={recipe.image} alt={recipe.title} />
                  <h3>{recipe.title}</h3>
                  <p>Calories: {recipe.calories} kcal</p>
                  <p>Carbs: {recipe.carbs}</p>
                  <p>Protein: {recipe.protein}</p>
                  <p>Fat: {recipe.fat}</p>
                  <button onClick={() => fetchRecipeInfo(recipe.id)}>
                    Go to Recipe
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
        {selectedRecipe && (
          <RecipePopup
            recipe={selectedRecipe}
            onClose={() => setSelectedRecipe(null)}
          />
        )}
        <ToastContainer />
      </div>
    </div>
  );
};

export default BMI;
