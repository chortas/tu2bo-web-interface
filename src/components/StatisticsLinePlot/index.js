import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import { Select, Input, CircularProgress } from '@material-ui/core';
import LineTemporalPlot from 'components/LineTemporalPlot';
import DatePicker from 'components/DatePicker';
import { DATE_FORMAT } from 'utils/date';
import moment from 'moment';

export default function StatisticsLinePlot({ getStats, statisticsTitle, title, label }) {
  const classes = useStyles();
  const [initialDateSelected, setInitialDateSelected] = useState('01/01/20 00:00:00');
  const [finalDateSelected, setFinalDateSelected] = useState(moment().format(DATE_FORMAT));
  const [unit, setUnit] = useState('day');
  const [unitSize, setUnitSize] = useState(1);
  const [info, setInfo] = useState({ labels: [], data: [] });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await getStats(initialDateSelected, finalDateSelected);
      setLoading(false);

      if (response.ok) {
        setInfo({
          labels: response.data?.map((item) => item?.date),
          data: response.data?.map((item) => item?.count),
        });
      }
    }
    fetchData();
  }, [initialDateSelected, getStats, finalDateSelected]);

  return loading ? (
    <CircularProgress size={30} color="secondary" className={classes.circularProgress} />
  ) : (
    <div className={classes.container}>
      <h2>{statisticsTitle}</h2>
      <div className={classes.plotContainer}>
        <div className={classes.params}>
          <span className={classes.titleParams}>Parámetros:</span>
          <div className={classes.param}>
            <span>Fecha de inicio</span>
            <DatePicker setDate={setInitialDateSelected} dateSelected={initialDateSelected} />
          </div>
          <div className={classes.param}>
            <span>Fecha de fin</span>
            <DatePicker setDate={setFinalDateSelected} dateSelected={finalDateSelected} />
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
              <option value="day">Día</option>
            </Select>
          </div>
          <div className={classes.param}>
            <span>Tamaño del paso</span>
            <Input
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
