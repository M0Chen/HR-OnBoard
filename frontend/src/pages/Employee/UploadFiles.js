import React, { useState } from "react";
import API from '../../api';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const UploadFiles = () => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    API.post(`/visa_management`, formData)
      .then((response) => {
        setStatus("success");
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography component="h1" variant="h5" style={{marginTop: 20}}>
        Upload visa documents
      </Typography>
      <div style={{marginTop: 20}}>
        <input type="file" onChange={handleFileChange} />
        <Button type="submit">Upload</Button>
      </div>
      {status && alert("File uploaded successfully")}
    </form>   
  );
};

export default UploadFiles;