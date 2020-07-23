import React from 'react';
import useStyles from './styles';
import { Pie } from 'react-chartjs-2';

export default function PieStatistics({ labelsGraph, dataGraph }) {
  const classes = useStyles();

  const data = {
    labels: labelsGraph,
    datasets: [
      {
        data: dataGraph,
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
      <h2>{`${labelsGraph[0]} vs ${labelsGraph[1].toLowerCase()}`}</h2>
      <Pie data={data} />
    </div>
  );
}
