import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import { Pie } from 'react-chartjs-2';
import { getVisibilityStats as getMediaStats } from 'services/MediaServerService';

export default function PieStatistics() {
  const classes = useStyles();

  const [info, setInfo] = useState([1, 1]);
  useEffect(() => {
    async function fetchData() {
      const response = await getMediaStats();

      if (response.ok) {
        setInfo([response.data.public, response.data.private]);
      }
    }
    fetchData();
  }, []);

  const data = {
    labels: ['Publico', 'Privado'],
    datasets: [
      {
        data: info,
        backgroundColor: ['#D62728', '#FFCE56'],
        hoverBackgroundColor: ['#D62728', '#FFCE56'],
        labels: {
          fontSize: 20,
        },
      },
    ],
  };

  return (
    <div className={classes.chart}>
      <h2>Videos públicos vs videos privados</h2>
      <Pie data={data} />
    </div>
  );
}
