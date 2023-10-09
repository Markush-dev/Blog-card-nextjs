"use client";
import React, { FC } from "react";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  // Title,
  // Tooltip,
  Legend,
);

interface IProps {
  data: ChartData;
}

type ChartData = {
  labels: string[];
  datasets: ChartDataset[];
};

type ChartDataset = {
  label?: string;
  data: number[];
  backgroundColor: string[] | string;
  borderWidth: number;
};

const options = {
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Horizontal Bar Chart",
    },
    datalabels: {
      display: true,
      anchor: "end" as const,
      align: "start" as const,
      formatter: (value: string) => `${value}%`,
      color: "black",
      offset: -45,
    },
  },
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: "Percentage of small businesses concerned (%)",
        color: "black",
        font: {
          size: 16,
          weight: "bold",
          lineHeight: "28px",
        },
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};

const HorizontalBarChart: FC<IProps> = ({ data }) => {
  return (
    <div className="hidden md:flex flex-col w-[85%] self-start">
      <Bar data={data} options={options} plugins={[ChartDataLabels]} />
    </div>
  );
};

export default HorizontalBarChart;
