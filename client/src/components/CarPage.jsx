import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  CircularProgress,
  Typography,
} from '@mui/material';

function CarPage() {
  const { id } = useParams();

  const [carState, setCarState] = useState();

  useEffect(() => {
    const apiUrl = `${process.env.CONFIG.API_BASEPATH}/auction/${id}`;
    axios.get(apiUrl).then((resp) => {
      const carData = resp.data;
      setCarState(carData);
    });
  }, [id]);

  if (!carState) {
    return (
      <Box sx={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh',
      }}
      >
        <CircularProgress size={140} />
      </Box>
    );
  }

  const { title, imgUrl, mileage } = carState.auction;
  const fullImgUrl = process.env.CONFIG.IMAGES_BASEPATH + imgUrl;

  return (
    <Box sx={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh',
    }}
    >
      <Card sx={{ maxWidth: 345, padding: '1rem' }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontSize: '1.5rem', marginBottom: '1rem',
          }}
        >
          Подробная информация об автомобиле
          {' '}
          {title}
        </Typography>
        <CardMedia
          component="img"
          height="200"
          image={fullImgUrl}
          alt={title}
        />
        <CardContent>
          <Typography variant="h5">
            Пробег:
            {' '}
            {mileage}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default CarPage;
