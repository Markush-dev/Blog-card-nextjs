'use client';
import React, { FC } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface IProps {
  data: ChartData;
  title: string;
}

type ChartData = {
  labels: string[];
  datasets: ChartDataset[];
};

type ChartDataset = {
  label?: string;
  data: number[];
  backgroundColor: string[];
  borderColor: string[];
  borderWidth: number;
};

const options = {
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        usePointStyle: true,
        pointStyle: 'rectRounded',
        boxWidth: 12,
        borderRadius: 10,
      },
    },
  },
};
const DoughnutBlogChart: FC<IProps> = ({ data, title }) => {
  return (
    <div className='hidden md:flex flex-col bg-[#E3F9FC] rounded-2xl p-4'>
      <span className='font-semibold'>{title}</span>
      <div className='mt-8'>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default DoughnutBlogChart;