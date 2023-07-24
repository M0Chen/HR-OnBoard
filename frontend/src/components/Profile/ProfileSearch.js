import { useState } from 'react';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import API from '../../api';
import { Button } from '@mui/material';

export default function ProfileSearch({ setProfile }) {
  const [searchInput, setSearchInput] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
    API.get(`/employee_profile/search?name=${searchInput}`)
      .then((res) => {
        setProfile(res.data)
      });
  }

  const handleBack = event => {
    event.preventDefault();
    API.get(`/employee_profile`)
      .then((res) => {
        setProfile(res.data);
      });
  }

  const handleChange = (event) => {
    if (event.target.name === 'description') {
      setSearchInput(event.target.value);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          id="search-bar"
          className="text"
          variant="outlined"
          placeholder="Search..."
          size="small"
          name="description"
          onChange={handleChange}
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon />
        </IconButton>
        <Button onClick={handleBack}>Back</Button>
      </form>
    </>
  );
}