import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  Box, Container, Divider, Typography,
} from '@mui/material';
import CarPage from '../components/CarPage';
import Home from '../components/Home';

function App() {
  return (
    <Router>
      <Container>
        <Box mt={3} mb={2}>
          <Typography variant="h1" fontSize="h3.fontSize">
            Тестовое приложение Аукционы
          </Typography>
        </Box>
        <Box mb={3}>
          <Divider />
        </Box>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car/:id" element={<CarPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
