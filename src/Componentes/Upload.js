import { PhotoCamera } from '@mui/icons-material';
import { Box, Button, Container, IconButton, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import api from '../Api';
import Menu from './Menu';

export default function Upload() {

  const [file, setFile] = React.useState(null);

  function upload() {

    const formData = new FormData();
    formData.append("file", file);

    api.post("/upload", formData)
      .then((res) => {
        alert("success");
      })
      .catch((err) => alert(" Error"));
  };

  return (
    <>
      <Container maxWidth="sm">
        <Menu/>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Upload de Arquivos<br></br>
          </Typography>




          <Stack direction="row" alignItems="center" spacing={2}>
            <Button variant="contained" component="label">
              Upload
              <input hidden onChange={(e) => setFile(e.target.files[0])} type="file" />
            </Button>
            
          </Stack>
        </Box>

        <Button component="label" onClick={(e) => upload()} >
              Enviar
            </Button>

      </Container>
    </>
  )


}
