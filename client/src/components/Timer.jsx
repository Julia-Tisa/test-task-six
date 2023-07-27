import {
  useEffect, useState, memo,
} from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

function Timer({ finishTime }) {
  const timeDiff = finishTime - Date.now();
  const [remainingTime, setRemainingTime] = useState(timeDiff > 0 ? timeDiff : 0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => {
        const newTime = prevTime - 1000;
        return newTime >= 0 ? newTime : 0;
      });
    }, 1000);

    if (remainingTime === 0) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [remainingTime]);

  const formatTime = (milliseconds) => {
    const seconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <Typography variant="body2" color="text.secondary">
      Оставшееся время:
      {' '}
      {formatTime(remainingTime)}
    </Typography>
  );
}

Timer.propTypes = {
  finishTime: PropTypes.number.isRequired,
};

export default memo(Timer);
