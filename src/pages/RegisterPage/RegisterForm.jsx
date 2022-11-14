import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/authOperations';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import { Link } from 'react-router-dom';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [error, setError] = useState(null);

  const options = { name: setName, email: setEmail, password: setPassword };

  function onChange({ target: { name, value } }) {
    options[name](value.toLowerCase());
    setNameError(false);
    setEmailError(false);
    if (password.length >= 6) {
      setPasswordError(false);
    }
  }

  const dispatch = useDispatch();

  const handleSubmit = async event => {
    event.preventDefault();

    if (name.trim() === '') {
      setNameError(true);
      return;
    }

    if (email === '') {
      setEmailError(true);
      return;
    }

    if (password.length < 7) {
      setPasswordError(true);
      return;
    }

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
  };

  return (
    <>
      <Container maxWidth="xs">
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
                    name="password"
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
                    label="Password"
                    helperText="Password is shorter than the minimum allowed length (7)."
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                )}
              </Grid>
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
    </>
  );
}
