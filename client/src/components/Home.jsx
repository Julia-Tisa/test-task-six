import {
  Alert,
  AlertTitle,
  Box,
  CircularProgress,
  Grid,
  Typography,
} from '@mui/material';
import axios from 'axios';
import { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { uniqueId } from 'lodash';
import CarCard from './CarCard';
import SearchInput from './SearchInput';
import { setIsLoading, setData, setError } from '../actions';

const MemoizedCarCard = memo(CarCard);

const createUrl = (value) => {
  const baseUrl = process.env.CONFIG.API_BASEPATH;
  const path = 'api/filterAuctions';

  const url = new URL(path, baseUrl);
  url.searchParams.append('search', value);

  return url.toString();
};

function Home() {
  const { data, isLoading, error } = useSelector((state) => state.auctions);
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const fetchData = () => {
      const apiUrl = createUrl(searchValue);
      axios.get(apiUrl)
        .then((res) => {
          dispatch(setData(res.data));
          dispatch(setIsLoading(true));
        })
        .catch((err) => {
          dispatch(setError(err));
        });
    };

    fetchData();

    const intervalId = setInterval(fetchData, process.env.CONFIG.POLLING_INTERVAL);

    return () => clearInterval(intervalId);
  }, [dispatch, searchValue]);

  const handleSearch = (value) => {
    const apiUrl = createUrl(value);
    axios.get(apiUrl)
      .then((res) => {
        dispatch(setData(res.data));
        setSearchValue(() => value);
      })
      .catch((err) => {
        dispatch(setError(err));
      });
  };

  if (error) {
    return (
      <Alert severity="error">
        <AlertTitle>Ошибка</AlertTitle>
        Произошла ошибка при загрузке данных —
        {' '}
        <strong>повторите попытку позже!</strong>
      </Alert>
    );
  }

  if (!isLoading) {
    return (
      <Box sx={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh',
      }}
      >
        <CircularProgress size={140} />
      </Box>
    );
  }

  return (
    <>
      <SearchInput onSearch={handleSearch} />
      <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 3 }}>
        <Grid container spacing={1}>
          {data.auctions.length > 0
            ? data.auctions.map((car) => (
              <Grid item xs={12} sm={6} md={4} key={uniqueId()}>
                <Link style={{ textDecoration: 'none' }} to={`/car/${car.id}`}>
                  <MemoizedCarCard
                    title={car.title}
                    imgUrl={car.imgUrl}
                    finishTime={car.finishTime}
                    bid={car.bid}
                  />
                </Link>
              </Grid>
            ))
            : (
              <Typography variant="body1" color="text.secondary">
                По запросу &quot;
                {searchValue}
                &quot; совпадений не найдено. Попробуйте ввести другой запрос!
              </Typography>
            )}
        </Grid>
      </Box>
    </>
  );
}

export default Home;
