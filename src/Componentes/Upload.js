import { PhotoCamera } from '@mui/icons-material';
import { Box, Button, Container, IconButton, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';

export default function Upload() {

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
              <input hidden accept="image/*" multiple type="file" />
            </Button>
            <IconButton color="primary" aria-label="upload picture" component="label">
              <input hidden accept="image/*" type="file" />
              <PhotoCamera />
            </IconButton>
          </Stack>
        </Box>

      </Container>
    </>
  )


}
