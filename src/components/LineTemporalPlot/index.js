import React from 'react';
import { Line } from 'react-chartjs-2';
import useStyles from './styles';

export default function LineTemporalPlot({ info, unit, unitSize, title, label }) {
  const classes = useStyles();
  const data = {
    labels: info.labels,
    datasets: [
      {
        label,
        fill: false,
        lineTension: 0,
        backgroundColor: 'rgba(211,47,47,0.8)',
        borderColor: 'rgba(211,47,47,0.8)',
        borderWidth: 2,
        data: info.data,
      },
    ],
  };

  return (
    <div className={classes.chart}>
      <Line
        data={data}
        options={{
          title: {
            display: true,
            text: title,
            fontSize: 20,
          },
          spanGaps: false,
          scales: {
            xAxes: [
              {
                type: 'time',
                distribution: 'linear',
                ticks: {
                  maxTicksLimit: 10,
                },
                time: {
                  unit,
                  unitStepSize: unitSize,
                  displayFormats: {
                    day: 'DD MMM',
                  },
                },
              },
            ],
          },
        }}
      />
    </div>
  );
}
