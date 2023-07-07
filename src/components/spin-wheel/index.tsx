import React, { useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

import { Task } from "@/types";
import SubmitButton from "../submit-button";

const RADIAN = Math.PI / 180;

interface ISpinWheel {
  taskList: Task[];
}

function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const CustomLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.65;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      // className="font-bold"
    >
      {`T-${index + 1}`}
    </text>
  );
};

export default function SpinWheel({ taskList }: ISpinWheel) {
  const [spin, setSpin] = useState(false);
  const [degree, setDegree] = useState(0);

  const spinWheel = () => {
    setDegree(generateRandomNumber(1000, 15000));
    setSpin(true);
  };

  return (
    <>
      <div className="bg-primary-darkGunmetal border-[0.05rem] border-primary-stormyGray/[0.7] overflow-hidden rounded-full">
        <div className="mx-auto w-0 h-0 -mb-10 border-l-[20px] border-l-transparent border-t-[35px] border-t-primary-purple border-r-[20px] border-r-transparent"></div>
        <PieChart
          width={500}
          height={500}
          className={`${spin ? "transitions" : ""}`}
          style={
            spin
              ? {
                  animationDuration: "15s",
                  animationTimingFunction: "cubic-bezier(.71,-0.08,.4,.99)",
                  animationIterationCount: "both",
                  transform: `rotate(${degree}deg)`,
                }
              : {}
          }
        >
          <Pie
            data={taskList}
            labelLine={false}
            label={CustomLabel}
            fill="#6833E4"
            dataKey="value"
          >
            {taskList.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={index % 2 === 0 ? "#5C2BE7" : "#212121"}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className="mx-auto flex gap-4">
        <SubmitButton
          label="Spin"
          styles="mt-8 font-bold w-[5rem] bg-primary-purple hover:scale-[0.99]"
          onClick={() => spinWheel()}
        />
        <SubmitButton
          label="Stop"
          styles="mt-8 font-bold w-[5rem] bg-primary-coral hover:scale-[0.99]"
          onClick={() => setSpin(false)}
        />
      </div>
    </>
  );
}
