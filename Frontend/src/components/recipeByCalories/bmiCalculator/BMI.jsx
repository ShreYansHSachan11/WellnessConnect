import React, { useState } from "react";
import { PieChart, Pie, Cell, Sector, ResponsiveContainer } from "recharts";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./BMI.css";

const BMI = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmr, setBmr] = useState(null);
  const [bmiCategory, setBmiCategory] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);

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
      bmrValue = 447.593 + 9.247 * weight + 3.098 * height - 4.330 * age;
    }
    setBmr(bmrValue.toFixed(2));
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
    <div className="bmi-calculator">
      <h1>BMI & BMR Calculator</h1>
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
      <button onClick={calculate}>Calculate BMI & BMR</button>
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
      {bmi && (
        <div className="result">
          <h2>Your BMI: {bmi}</h2>
          <h2>Category: {bmiCategory}</h2>
          <h2>Your BMR: {bmr} kcal/day</h2>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default BMI;