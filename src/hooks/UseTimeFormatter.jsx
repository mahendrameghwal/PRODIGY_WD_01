import { useMemo } from 'react';

const UseTimeFormatter = () => {
  const formatTimeEpoch = (time_epoch) => {
    const date = new Date(time_epoch * 1000);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  return useMemo(() => formatTimeEpoch, []);
};

export default UseTimeFormatter;
