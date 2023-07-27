import { Box, CircularProgress } from '@mui/material';

function Loader() {
  return (
    <Box sx={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh',
    }}
    >
      <CircularProgress size={140} />
    </Box>
  );
}

export default Loader;
