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
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Logo from '../components/Logo';
import Image from 'next/image';

export default function SignUp() {
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
      <Image
        style={{ opacity: '0.4', zIndex: -1 }}
        src='/images/back.jpg'
        alt=''
        layout='fill'
        objectFit='cover'
        objectPosition='center'
      />
      <Paper
        sx={{
          padding: '15px',
          paddingX: '15px',
          margin: '10px',
        }}
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Box
            component='form'
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete='given-name'
                  name='firstName'
                  required
                  fullWidth
                  id='firstName'
                  label='First Name'
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id='lastName'
                  label='Last Name'
                  name='lastName'
                  autoComplete='family-name'
                />
              </Grid>
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
              Sign Up
            </Button>
            <Grid container justifyContent='flex-end'>
              <Button variant='text' size='small' href='/login'>
                Already have an account? Login
              </Button>
            </Grid>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
