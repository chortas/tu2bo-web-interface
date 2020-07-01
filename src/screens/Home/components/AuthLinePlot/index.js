import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import { Select, Input } from '@material-ui/core';
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { getStats as getAuthStats } from 'services/AuthServerService';
import LineTemporalPlot from 'components/LineTemporalPlot';
import { DATE_FORMAT } from 'utils/date';

export default function AuthLinePlot() {
  const classes = useStyles();
  const [dateSelected, setDateSelected] = useState('01/01/20 00:00:00');
  const [info, setInfo] = useState({ labels: [], data: [] });
  const [unit, setUnit] = useState('second');
  const [unitSize, setUnitSize] = useState(10);

  useEffect(() => {
    async function fetchData() {
      const response = await getAuthStats(dateSelected);

      if (response.ok) {
        setInfo({
          labels: response.map((item) => item.timestamp),
          data: response.map((item) => item.num_users),
        });
      } else {
        alert('Hubo un error'); // TODO: Maybe use snackbar with error msg
      }
    }
    fetchData();
  }, [dateSelected]);

  return (
    <div className={classes.container}>
      <h2>Estadísticas del Auth Server</h2>
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
              <option value="second">Second</option>
              <option value="minute">Minute</option>
              <option value="hour">Hour</option>
              <option value="day">Day</option>
              <option value="week">Week</option>
              <option value="month">Month</option>
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
                setUnitSize(event.target.value);
              }}
            />
          </div>
        </div>

        <LineTemporalPlot
          info={info}
          unit={unit}
          unitSize={unitSize}
          title="Cantidad de usuarios en el tiempo"
          label="Usuarios"
        />
      </div>
    </div>
  );
}
