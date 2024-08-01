import React, { useState } from "react";
import { PieChart, Pie, Cell, Sector, ResponsiveContainer } from "recharts";
import "./BMI.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BMI = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);

  const calculateBmi = () => {
    if (!weight || !height) {
      toast.error("Please enter both weight and height."); // Show error toast
      return;
    }
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    setBmi(bmiValue);
    determineBmiCategory(bmiValue);
    setActiveIndex(determineActiveIndex(bmiValue));
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
      percent,
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
      <h1>BMI Calculator</h1>
      <div>
        <label>Weight (kg): </label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div>
        <label>Height (cm): </label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button onClick={calculateBmi}>Calculate BMI</button>
     
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
      {bmi && (
        <div className="bmi-result">
          <h2>Your BMI: {bmi}</h2>
          <h2>Category: {bmiCategory}</h2>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default BMI;
