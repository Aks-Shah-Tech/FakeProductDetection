import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { toast } from 'react-toastify';
import axios from "axios";
import QRCode from 'react-qr-code';


function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const [rName, setRName] = React.useState();

  const getAllRetailers = async (retailerId) => {
    try {
      const {
        data
      } = await axios.post(
        "/api/v1/getretailerbyId", {
        retailerId
      }, {
        headers: {
          "Content-Type": "application/json",
        }
      }
      )
      console.log(data.retailer.name);
      setRName(data.retailer.name)
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  useEffect(() => {
    getAllRetailers(row.retailerId);
  }, [rName])



  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" align="center">
          {row.name}
        </TableCell>
        <TableCell align="center">{row.price}</TableCell>
        <TableCell align="center">{row.category}</TableCell>
        <TableCell align="center">{rName}</TableCell>
        <TableCell align="center">
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "20%", width: "20%" }}
            value={row._id}
            viewBox={`0 0 256 256`}
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                <b>Description</b>
              </Typography>
              <Typography variant="p" gutterBottom component="div">
                {row.description}
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function ProductTable({ products }) {

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="center"><b>Product Name</b></TableCell>
            <TableCell align="center"><b>Price</b></TableCell>
            <TableCell align="center"><b>Category</b></TableCell>
            <TableCell align="center"><b>Retailer Name</b></TableCell>
            <TableCell align="center"><b>QRCode</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products && products.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}