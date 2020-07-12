import React from 'react';
import { getStats as getMediaStats } from 'services/MediaServerService';
import StatisticsLinePlot from 'components/StatisticsLinePlot';

export default function MediaLinePlot() {
  return (
    <div>
      <StatisticsLinePlot
        getStats={getMediaStats}
        statisticsTitle="Cantidad de videos - histórico"
        title="Cantidad de videos en el tiempo"
        label="Videos"
      />
    </div>
  );
}
