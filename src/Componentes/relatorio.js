import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import { Button } from '@mui/material';
import api from '../Api';


export default function Relatorio() {

  const [lista, setLista] = React.useState([]);

  function Consulta() {
    console.log("Teste de impressão");

    api.get("stock")
      .then((response) => {


        setLista(response.data);
        console.log(lista);

      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });

  }



  return (
    <Container maxWidth="sm">
      <Menu />
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Relatorio<br></br>
        </Typography>

        <Button onClick={Consulta}>
          Consultar dados 
        </Button>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 800 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Data</TableCell>
                <TableCell align="right">Open</TableCell>
                <TableCell align="right">HIgh</TableCell>
                <TableCell align="right">Low</TableCell>
                <TableCell align="right">Close</TableCell>
                <TableCell align="right">Volume</TableCell>
                <TableCell align="right">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {lista.map((item,index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="item">
                    {item.date}
                  </TableCell>
                  <TableCell align="right">{item.open}</TableCell>
                  <TableCell align="right">{item.high}</TableCell>
                  <TableCell align="right">{item.low}</TableCell>
                  <TableCell align="right">{item.close}</TableCell>
                  <TableCell align="right">{item.volume}</TableCell>
                  <TableCell align="right">{item.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}
