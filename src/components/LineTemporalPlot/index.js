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
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
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
                    second: 'HH:mm:ss',
                    minute: 'HH:mm:ss',
                    hour: 'HH:mm:ss',
                    day: 'DD MMM',
                    week: 'MM/DD/YY',
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
