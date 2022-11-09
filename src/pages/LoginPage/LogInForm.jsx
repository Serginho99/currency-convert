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

export default function LogInForm() {
  const [error, setError] = useState(null);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const dispatch = useDispatch();

  const options = { email: setEmail, password: setPassword };

  function onChange({ target: { name, value } }) {
    options[name](value.toLowerCase());
    setEmailError(false);
    setPasswordError(false);
  }

  const handleSubmit = async event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (email === '') {
      setEmailError(true);
      return;
    }

    if (password === '') {
      setPasswordError(true);
      return;
    }

    const res = await dispatch(
      authOperations.logIn({
        email: data.get('email'),
        password: data.get('password'),
      })
    );

    if (res.payload.status === 400) {
      setError('User with this Email or Password not found');
    }
  };

  return (
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
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          {error && (
            <Alert variant="outlined" severity="error">
              {error}
            </Alert>
          )}

          <TextField
            error={emailError}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={onChange}
          />
          <TextField
            error={passwordError}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={onChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              Don't have an account?{' '}
              <Link
                to="/register"
                variant="body2"
                style={{ textDecoration: 'underline' }}
              >
                {'Sign Up'}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

// export default function LogInForm() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();

//   const options = { email: setEmail, password: setPassword };

//   function onChange({ target: { name, value } }) {
//     options[name](value);
//   }

//   function onSubmit(e) {
//     e.preventDefault();
//     dispatch(authOperations.logIn({ email, password }));
//   }
//   return (
//     <>
//       <form onSubmit={onSubmit}>
//         <label>
//           Email{' '}
//           <input type="email" name="email" value={email} onChange={onChange} />
//         </label>
//         <label>
//           Password{' '}
//           <input
//             type="password"
//             name="password"
//             value={password}
//             onChange={onChange}
//           />
//         </label>
//         <button type="submit">submit</button>
//       </form>
//     </>
//   );
// }
