import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import {Link} from "react-router-dom";
import Grid from '@mui/material/Grid';

export default function FakeRetailer() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Typography variant="h3" color="error">
              Fake Retailer Detected!!
            </Typography>
            <Typography variant="h6" className='my-3'>
              <span style={{color: "red", fontWeight: "bold"}}>Oops!</span>  This is awkward... You are looking for something
              that doesn't actually exist.'
            </Typography>
            
            <div className="row">
              <div className="col-md-6">
              <Link to="/" style={{textDecoration: 'none'}}>
            <Button className='my-3' variant="contained">Back Home</Button>
            </Link>
              </div>
              <div className="col-md-6">
              <Link to="/report" style={{textDecoration: 'none'}}>
            <Button className='my-3' variant="contained" color="error">Report</Button>
            </Link>
              </div>
            </div>
          </Grid>
          <Grid xs={6}>
            <img
              src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
              alt=""
              width={500} height={250}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}