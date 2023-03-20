// import React, { useState } from 'react';
// import "./Login.css";
// import TextField from '@mui/material/TextField';
// import { Button } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';
// import { loginCompany } from '../../Actions/Company';
// import {toast} from "react-toastify";
// import SendIcon from '@mui/icons-material/Send';

// const Login = () => {

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const dispatch = useDispatch();
//   const { loading } = useSelector((state) => state.loginCompany)

//   const submitHandler = (e) => {
//     e.preventDefault();
//     dispatch(loginCompany(email, password, toast));
//   }
//   return (
//     <>
//       <div className="row my-3">
        
//         <div className="col-md-6">
//           <h3 className='my-5 text-center'>Login</h3>
//           <form onSubmit={submitHandler}>
            
//             <div className="col-md-12 my-4">
//               <TextField
//                 fullWidth
//                 label="Company Email"
//                 id="fullWidth"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div className="col-md-12 my-3">
//               <TextField
//                 fullWidth
//                 label="Password"
//                 id="fullWidth"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//             <div className="col-md-12 my-3 register_company">
//             <Button type="submit" disabled={loading} className='my-3 register_company_button' variant="contained" endIcon={<SendIcon />}>Login</Button>
//             </div>
//           </form>
//         </div>
//         <div className="col-md-6">
//           <img src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="login_image" className="login_img" />
//         </div>
//       </div>
//     </>
//   )
// }

// export default Login

import React, { useState } from 'react';
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import {toast} from "react-toastify";
import { loginCompany } from '../../Actions/Company';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

const Login = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.loginCompany)

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginCompany(email, password, toast));
  }
  return (
    <Container component="main" maxWidth="lg">
    <Box
      sx={{
        marginTop: 4,
      }}
    >
      <Grid container>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://images.unsplash.com/photo-1529539795054-3c162aab037a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={submitHandler}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                disabled={loading}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                endIcon={<VpnKeyIcon />}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  </Container>
  )
}

export default Login