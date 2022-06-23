import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Index() {
  return (
    <>
      <Navbar />
      <Container>
        <Box sx={{ my: 4 }}>
          <Typography variant='h4' component='h1' gutterBottom>
            RFN shop coming up!
          </Typography>
          <Link href='/about' color='secondary'>
            Go to the about page
          </Link>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
