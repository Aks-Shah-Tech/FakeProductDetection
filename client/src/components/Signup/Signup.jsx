// import React, { useState } from 'react';
// import "./Signup.css";
// import TextField from '@mui/material/TextField';
// import { Button } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';
// import { registerCompany } from '../../Actions/Company';
// import {toast} from "react-toastify";
// import SendIcon from '@mui/icons-material/Send';

// const Signup = () => {

//   const [CIN, setCIN] = useState("");
//   const [name, setName] = useState();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const dispatch = useDispatch();
//   const { loading } = useSelector((state) => state.registerCompany)

//   const submitHandler = (e) => {
//     e.preventDefault();
//     dispatch(registerCompany(CIN, name, email, password, toast));
//   }
//   return (
//     <>
//       <div className="row my-3">
//         <div className="col-md-6">
//           <img src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="signup_img" />
//         </div>
//         <div className="col-md-6">
//           <h3 className='mb-4'>Register your company</h3>
//           <form onSubmit={submitHandler}>
//             <div className="col-md-12 my-3">
//               <TextField
//                 fullWidth
//                 label="CIN"
//                 id="fullWidth"
//                 value={CIN}
//                 onChange={(e) => setCIN(e.target.value)}
//               />
//             </div>
//             <div className="col-md-12 my-3">
//               <TextField
//                 fullWidth
//                 label="Company Name"
//                 id="fullWidth"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>
//             <div className="col-md-12 my-3">
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
//             <Button type="submit" disabled={loading} className='my-3 register_company_button' variant="contained" endIcon={<SendIcon />}>Register</Button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Signup

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
import { toast } from "react-toastify";
import { loginCompany } from '../../Actions/Company';
import { registerCompany } from '../../Actions/Company';
import SendIcon from '@mui/icons-material/Send';

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const Signup = () => {
  // const [CIN, setCIN] = useState("");
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const [val, setVal] = useState({
    CIN: null,
    name: null,
      email: null,
      password: null,
      errors: {
        CIN: '',
        name: '',
        email: '',
        password: '',
      }
  })

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = val.errors;

    switch (name) {
      case 'CIN': 
        errors.CIN = 
          (value.length !== 21)
            ? 'Invalid CIN number!'
            : '';
        break;
      case 'name': 
        errors.name = 
          (value.length < 5 || value.length > 25)
            ? 'Name must be at between 5-25 characters!'
            : '';
        break;
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password': 
        errors.password = 
          value.length < 6
            ? 'Password must be at least 8 characters long!'
            : '';
        break;
      default:
        break;
    }

    setVal({...val, errors, [name]: value});
  }

  // const handleChange2 = (event) => {
  //   event.preventDefault();
  //   const { name, value } = event.target;
  //   let errors = val.errors;

  
    
  //       errors.CIN = 
  //         value.length < 5
  //           ? 'CIN must be at least 5 characters long!'
  //           : '';
      

  //   setVal({errors.CIN});
  //   setVal({val.CIN = event.target.value});
  // }

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.registerCompany)

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(registerCompany(val.CIN, val.name, val.email, val.password, toast));
  }
  return (
    <Container component="main" maxWidth="lg">
      <Box
        sx={{
          marginTop: 0,
        }}
      >
        <Grid container>
          <CssBaseline />

          <Grid
            item
            xs={12}
            sm={8}
            md={6}
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
                Register Your Company
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
                  name="CIN"
                  id="email"
                  label="CIN"
                  autoComplete="email"
                  helperText={val.errors.CIN}
                  value={val.CIN}
                  onChange={handleChange}
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="name"
                  id="email"
                  label="Company Name"
                  autoComplete="email"
                  helperText={val.errors.name}
                  value={val.name}
                  onChange={handleChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="email"
                  id="email"
                  label="Email Address"
                  autoComplete="email"
                  helperText={val.errors.email}
                  value={val.email}
                  onChange={handleChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={show ? "text" : "password"}
                  id="password"
                  autoComplete="current-password"
                  helperText={val.errors.password}
                  value={val.password}
                  onChange={handleChange}
                />
                {
                show ? <Button onClick={() => setShow(false)}>hide password</Button> : <Button onClick={() => setShow(true)}>show password</Button>
              }
                <Button
                  type="submit"
                  disabled={loading}
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  endIcon={<SendIcon />}
                >
                  Register
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={false}
            sm={4}
            md={6}
            sx={{
              backgroundImage: "url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Grid>
      </Box>
    </Container>
  )
}

export default Signup