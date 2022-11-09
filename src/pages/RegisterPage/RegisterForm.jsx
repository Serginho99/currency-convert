// import { useState } from 'react';

import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/authOperations';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import { Link } from 'react-router-dom';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Lucida Sans',
      'Lucida Sans Regular',
      'Lucida Grande',
      'Lucida Sans Unicode',
      'Geneva',
      'Verdana',
      'sans - serif',
    ].join(','),
    fontSize: 15,
  },
});

export default function RegisterForm() {
  // const [error, setError] = useState(null);
  // const [name, setName] = useState(null);
  // const [isUser, setIsUser] = useState(null);
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [error, setError] = useState(null);
  // const [passwordError, setPasswordError] = useState(null);

  const options = { name: setName, email: setEmail, password: setPassword };

  function onChange({ target: { name, value } }) {
    options[name](value.toLowerCase());
    setNameError(false);
    setEmailError(false);
    if (password.length >= 7) {
      setPasswordError(false);
    }
  }
  // console.log(name);

  const dispatch = useDispatch();

  const handleSubmit = async event => {
    event.preventDefault();

    if (name.trim() === '') {
      setNameError(true);
      return;
    }
    // else {
    //   setNameError(false);
    // }

    if (email === '') {
      setEmailError(true);
      return;
    }
    // else {
    //   setEmailError(false);
    // }

    if (password.length < 7) {
      setPasswordError(true);
      return;
    }
    // else {
    //   setPasswordError(null);
    // }

    const data = new FormData(event.currentTarget);
    const res = await dispatch(
      authOperations.register({
        name: data.get('name'),
        email: data.get('email'),
        password: data.get('password'),
      })
    );
    console.log(res);
    if (res.payload.status === 400) {
      setError('Wrong password or email');
      return;
    } else {
      setError(false);
    }

    // const nameUser = event.target.elements.name.value;
    // const passwordLength = event.target.elements.password.value.length;
    // const emailLength = event.target.elements.email.value;

    // if (nameUser === '') {
    //   setName(true);
    // } else {
    //   setName(null);
    // }

    // if (passwordLength < 7) {
    //   setPasswordError(true);
    // } else {
    //   setPasswordError(null);
    // }

    // if (res.payload.message === undefined) {
    //   setIsUser('User with this email already exists');
    // } else {
    //   setIsUser(null);
    // }

    // if (
    //   res.payload.message === 'User validation failed: email: Invalid email.' ||
    //   emailLength === ''
    // ) {
    //   setError(true);
    // } else {
    //   setError(null);
    // }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  {error && (
                    <Alert
                      style={{ marginBottom: '15px' }}
                      variant="outlined"
                      severity="error"
                    >
                      {error}
                    </Alert>
                  )}
                  <TextField
                    onChange={onChange}
                    error={nameError}
                    autoComplete="given-name"
                    name="name"
                    // value={name}
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  {/* {isUser && (
                    <Alert
                      variant="outlined"
                      severity="error"
                      style={{ marginBottom: '15px' }}
                    >
                      {isUser}
                    </Alert>
                  )} */}
                  <TextField
                    onChange={onChange}
                    required
                    fullWidth
                    error={emailError}
                    id="email"
                    label="Email"
                    name="email"
                    // value={email}
                    autoComplete="email"
                    type="email"
                  />
                </Grid>

                <Grid item xs={12}>
                  {!passwordError ? (
                    <TextField
                      onChange={onChange}
                      required
                      fullWidth
                      // error={passwordError}
                      name="password"
                      // value={password}
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                  ) : (
                    <TextField
                      onChange={onChange}
                      required
                      fullWidth
                      error={passwordError}
                      name="password"
                      // value={password}
                      label="Password"
                      helperText="Password is shorter than the minimum allowed length (7)."
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                  )}
                </Grid>
                {/* <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox value="allowExtraEmails" color="primary" />
            }
            label="I want to receive inspiration, marketing promotions and updates via email."
          />
        </Grid> */}
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  Already have an account?{' '}
                  <Link
                    style={{ textDecoration: 'underline' }}
                    to="/login"
                    variant="body2"
                  >
                    Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}

// export default function RegisterForm() {
// const [name, setName] = useState('');
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
//   const dispatch = useDispatch();

// const options = { name: setName, email: setEmail, password: setPassword };

// function onChange({ target: { name, value } }) {
//   options[name](value);
// }

//   function onSubmit(e) {
//     e.preventDefault();
//     dispatch(authOperations.register({ name, email, password }));
//   }
//   return (
//     <>
//       <form onSubmit={onSubmit}>
//         <label>
//           Name{' '}
//           <input type="text" name="name" value={name} onChange={onChange} />
//         </label>
//         <label>
//           Email{' '}
//           <input type="email" name="email" value={email} onChange={onChange} />
//         </label>
//         <label>
//           Password{' '}
//           <input
//             type="text"
//             name="password"
//             value={password}
//             onChange={onChange}
//           />
//         </label>
//         <button type="submit">submit</button>
//       </form>
//     </>
//   );
