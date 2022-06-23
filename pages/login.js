import {
  Avatar,
  Button,
  TextField,
  Link,
  Grid,
  Box,
  Container,
  Paper,
} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import Logo from '../components/Logo';

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Container component='main' maxWidth='xs'>
      <Paper
        sx={{ padding: '15px', paddingX: '15px', marginTop: '30px' }}
        elevation={3}
      >
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Link href='/'>
            <Logo />
          </Link>
          <Avatar
            sx={{
              m: 1,
              bgcolor: 'secondary.main',
              paddingRight: '5px',
            }}
          >
            <LoginIcon />
          </Avatar>
          <Box
            component='form'
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='new-password'
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2, backgroundColor: '#00897A' }}
            >
              Login
            </Button>
            <Grid container justifyContent='flex-end'>
              <Grid item>
                <Link href='/signup' variant='body2'>
                  New user? Sign up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
