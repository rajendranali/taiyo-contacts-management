import React from 'react';
import { Line } from 'react-chartjs-2';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const ChartsPage: React.FC = () => {
  const { data, error, isLoading } = useQuery('casesHistoricalData', async () => {
    const { data } = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
    return data;
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const chartData = {
    labels: Object.keys(data.cases),
    datasets: [
      {
        label: 'Cases',
        data: Object.values(data.cases),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">COVID-19 Cases Over Time</h2>
      <Line data={chartData} />
    </div>
  );
};

export default ChartsPage;
