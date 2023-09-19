'use client'
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Bar} from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    // Title,
    // Tooltip,
    Legend
);

const data = {
    labels: [
        'Increasing cost of supplies and materials',
        'Customer spending less',
        'Hiring skilled employees and retaining good staff',
        'Business finances',
        'Keeping up with technology',
        'Keeping up with regulations and reporting',
        'Cybersecurity',
        'Employees expecting higher wages',
        'Customer choosing to buy sustainably',
    ],
    datasets: [
        {
            label: '',
            backgroundColor: '#0071CE',
            borderWidth: 1,
            data: [41.5, 32, 7.6, 6.3, 3.5, 3, 2.6, 1.8, 1.6],
        },
    ],
};

const options = {
    indexAxis: 'y' as const,
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
            text: 'Chart.js Horizontal Bar Chart',
        },
        datalabels: {
            display: true,
            anchor: 'end' as const,
            align: 'start' as const,
            formatter: (value: string) => `${value}%`,
            color: 'black',
            offset: -45,
        },
    },
    scales: {
        x: {
            display: true,
            title: {
                display: true,
                text: 'Percentage of small businesses concerned (%)',
                color: 'black',
                font: {
                    size: 16,
                    weight: 'bold',
                    lineHeight: '28px',
                },
            },

        },
        y: {
            grid: {
                display: false,
            }
        }
    },
};


const HorizontalBarChart = () => {
    return (
        <div className='hidden md:flex flex-col max-w-5xl mx-auto items-center'>
            <h2 className='font-semibold text-[#0071CE] text-[40px] max-w-2xl text-center'>What are business owners most
                concerned about?</h2>
            <Bar data={data} options={options} plugins={[ChartDataLabels]}/>
        </div>
    );
};

export default HorizontalBarChart;
