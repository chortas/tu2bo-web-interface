import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import { Select, Input } from '@material-ui/core';
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import LineTemporalPlot from 'components/LineTemporalPlot';
import { DATE_FORMAT } from 'utils/date';

export default function StatisticsLinePlot({ getStats, statisticsTitle, title, label }) {
  const classes = useStyles();
  const [dateSelected, setDateSelected] = useState('01/01/20 00:00:00');
  const [unit, setUnit] = useState('second');
  const [unitSize, setUnitSize] = useState(10);

  const [info, setInfo] = useState({ labels: [], data: [] });
  useEffect(() => {
    async function fetchData() {
      const response = await getStats(dateSelected);

      if (response.ok) {
        setInfo({
          labels: response.data?.map((item) => item?.date),
          data: response.data?.map((item) => item?.count),
        });
      }
    }
    fetchData();
  }, [dateSelected, getStats]);

  return (
    <div className={classes.container}>
      <h2>{statisticsTitle}</h2>
      <div className={classes.plotContainer}>
        <div className={classes.params}>
          <span className={classes.titleParams}>Parámetros:</span>
          <div className={classes.param}>
            <span>Fecha de inicio</span>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <DateTimePicker
                disableFuture
                value={dateSelected}
                ampm={false}
                onChange={(date) => {
                  setDateSelected(date.format(DATE_FORMAT));
                }}
                format={DATE_FORMAT}
              />
            </MuiPickersUtilsProvider>
          </div>
          <div className={classes.param}>
            <span>Unidad</span>
            <Select
              native
              value={unit}
              onChange={(event) => {
                setUnit(event.target.value);
              }}
            >
              <option value="second">Segundo</option>
              <option value="minute">Minuto</option>
              <option value="hour">Hora</option>
              <option value="day">Día</option>
              <option value="week">Semana</option>
              <option value="month">Mes</option>
            </Select>
          </div>
          <div className={classes.param}>
            <span>Tamaño del paso</span>
            <Input
              native
              type="number"
              inputProps={{ min: 1 }}
              value={unitSize}
              onChange={(event) => {
                setUnitSize(event.target.value || 1);
              }}
            />
          </div>
        </div>

        <LineTemporalPlot info={info} unit={unit} unitSize={unitSize} title={title} label={label} />
      </div>
    </div>
  );
}
