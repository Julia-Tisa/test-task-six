import { useRef } from 'react';
import PropTypes from 'prop-types';
import {
  Box, Divider, IconButton, TextField,
} from '@mui/material';
import { SearchOutlined, DeleteOutline } from '@mui/icons-material';

function SearchInput({ onSearch }) {
  const inputRef = useRef();

  const handleSearch = () => {
    const searchValue = inputRef.current.value;
    onSearch(searchValue);
  };

  const handleDelete = () => {
    onSearch('');
    inputRef.current.value = '';
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
    if (event.key === 'Escape') {
      handleDelete();
    }
  };

  return (
    <>
      <Box sx={{ display: 'flex' }} mt={3} mb={2}>
        <TextField
          inputRef={inputRef}
          id="outlined-basic"
          label="Поиск по названию"
          variant="outlined"
          onKeyDown={handleKeyDown}
        />
        <IconButton aria-label="search" size="large" onClick={handleSearch}>
          <SearchOutlined fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="search" size="large" onClick={handleDelete}>
          <DeleteOutline fontSize="inherit" />
        </IconButton>
      </Box>
      <Box mb={3}>
        <Divider />
      </Box>
    </>
  );
}

SearchInput.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchInput;
