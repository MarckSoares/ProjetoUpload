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



const rows = [
  {
    "close": 56.06,
    "date": "03/18/2022",
    "high": 56.28,
    "low": 54.02,
    "open": 54.19,
    "status": "Bom",
    "volume": "179,189"
  },

  {
    "close": 54.13,
    "date": "03/17/2022",
    "high": 54.9,
    "low": 54.05,
    "open": 54.49,
    "status": "Bom",
    "volume": "100,218"
  },



  {
    "close": 54.65,
    "date": "03/16/2022",
    "high": 54.75,
    "low": 53.53,
    "open": 53.99,
    "status": "Bom",
    "volume": "123,044"
  },

  {
    "close": 53.36,
    "date": "03/15/2022",
    "high": 53.91,
    "low": 52.53,
    "open": 52.89,
    "status": "Bom",
    "volume": "137,360"
  },

  {
    "close": 52.61,
    "date": "03/14/2022",
    "high": 52.72,
    "low": 51.16,
    "open": 51.31,
    "status": "Bom",
    "volume": "175,280"
  },

  {
    "close": 51.16,
    "date": "03/11/2022",
    "high": 52.89,
    "low": 51.05,
    "open": 51.85,
    "status": "Bom",
    "volume": "104,707"
  },

  {
    "close": 51.64,
    "date": "03/10/2022",
    "high": 51.84,
    "low": 49.99,
    "open": 49.99,
    "status": "Bom",
    "volume": "107,160"
  },

  {
    "close": 50.49,
    "date": "03/09/2022",
    "high": 52.04,
    "low": 50.2,
    "open": 51.29,
    "status": "Bom",
    "volume": "191,276"
  },

  {
    "close": 50.68,
    "date": "03/08/2022",
    "high": 51.91,
    "low": 50.51,
    "open": 50.56,
    "status": "Bom",
    "volume": "154,105"
  },

  {
    "close": 50.66,
    "date": "03/07/2022",
    "high": 51.89,
    "low": 50.03,
    "open": 51.12,
    "status": "Bom",
    "volume": "141,536"
  },

  {
    "close": 51.21,
    "date": "03/04/2022",
    "high": 51.51,
    "low": 49.59,
    "open": 49.96,
    "status": "Bom",
    "volume": "117,388"
  },

  {
    "close": 50.57,
    "date": "03/03/2022",
    "high": 51.38,
    "low": 50,
    "open": 50.84,
    "status": "Bom",
    "volume": "89,894"
  },

  {
    "close": 50.81,
    "date": "03/02/2022",
    "high": 51.7,
    "low": 50.07,
    "open": 50.07,
    "status": "Bom",
    "volume": "117,669"
  },

  {
    "close": 49.89,
    "date": "03/01/2022",
    "high": 50.49,
    "low": 48.89,
    "open": 49.47,
    "status": "Bom",
    "volume": "166,212"
  },

  {
    "close": 49.21,
    "date": "02/28/2022",
    "high": 50.52,
    "low": 48.95,
    "open": 49.8,
    "status": "Bom",
    "volume": "122,839"
  },

  {
    "close": 50.34,
    "date": "02/25/2022",
    "high": 50.37,
    "low": 47.53,
    "open": 49.31,
    "status": "Bom",
    "volume": "136,936"
  },

  {
    "close": 48.98,
    "date": "02/24/2022",
    "high": 49.71,
    "low": 47.07,
    "open": 48.35,
    "status": "Bom",
    "volume": "189,781"
  },

  {
    "close": 49.48,
    "date": "02/23/2022",
    "high": 50.32,
    "low": 49.05,
    "open": 50.1,
    "status": "Bom",
    "volume": "125,329"
  },

  {
    "close": 49.49,
    "date": "02/22/2022",
    "high": 50.54,
    "low": 48.97,
    "open": 49.08,
    "status": "Bom",
    "volume": "107,175"
  },

  {
    "close": 49.5,
    "date": "02/18/2022",
    "high": 49.95,
    "low": 48.67,
    "open": 49.08,
    "status": "Bom",
    "volume": "130,474"
  },

  {
    "close": 49.32,
    "date": "02/17/2022",
    "high": 50.84,
    "low": 49.1,
    "open": 50.84,
    "status": "Bom",
    "volume": "110,669"
  },

  {
    "close": 51.09,
    "date": "02/16/2022",
    "high": 51.85,
    "low": 50.58,
    "open": 51.59,
    "status": "Bom",
    "volume": "104,908"
  }

];





export default function Relatorio() {
  return (
    <Container maxWidth="sm">
      <Menu />
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Relatorio<br></br>
        </Typography>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 800 }} size="small" aria-label="a dense table">''
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
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.date}
                  </TableCell>
                  <TableCell align="right">{row.open}</TableCell>
                  <TableCell align="right">{row.high}</TableCell>
                  <TableCell align="right">{row.low}</TableCell>
                  <TableCell align="right">{row.close}</TableCell>
                  <TableCell align="right">{row.volume}</TableCell>
                  <TableCell align="right">{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}
