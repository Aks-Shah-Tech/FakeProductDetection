import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {loginAdmin} from "../../Actions/Admin";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import ReportIcon from '@mui/icons-material/Report';

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const ReportForm = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [val, setVal] = useState({
    name: null,
      email: null,
      query: null,
      errors: {
        name: '',
        email: '',
        query: '',
      }
  })

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = val.errors;

    switch (name) {
      case 'name': 
        errors.name = 
          value.length < 4
            ? 'Name must be at least 4 characters long!'
            : '';
        break;
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'query': 
        errors.query = 
          value.length === 0
            ? 'Query is required'
            : '';
        break;
      default:
        break;
    }

    setVal({...val, errors, [name]: value});
  }

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch(loginAdmin(email, password, toast));
    console.log(val.name);
    console.log(val.email);
    console.log(val.query);
  }
  return (
    <Container component="main" maxWidth="sm">
      
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 3,
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src="https://cdn-icons-png.flaticon.com/512/9904/9904251.png" alt="" style={{width: "20%", height: "20%"}} />
        <Typography component="h1" variant="h5" color="error">
          <b>REPORT</b>
        </Typography>
        <Box component="form" onSubmit={submitHandler} noValidate sx={{ mt: 1 }}>
        <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Consumer Name"
            name="name"
            autoComplete="email"
            helperText={val.errors.name}
                  value={val.name}
                  onChange={handleChange}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            helperText={val.errors.email}
                  value={val.email}
                  onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Query"
            name="query"
            autoComplete="email"
            multiline
            maxRows={4}
            helperText={val.errors.query}
                  value={val.query}
                  onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="error"
            sx={{ mt: 3, mb: 2 }}
            endIcon={<ReportIcon />}
          >
            Report
          </Button>
        </Box>
      </Box>
      
    </Container>
  )
}

export default ReportForm

