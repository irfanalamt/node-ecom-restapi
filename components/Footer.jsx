import PropTypes from 'prop-types';
import { Box, Container, Typography } from '@mui/material';
import Logo from './Logo';

function Copyright() {
  return (
    <Typography variant='body2' color='text.secondary' align='center'>
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer({ description, title }) {
  return (
    <Box
      component='footer'
      sx={{
        bgcolor: 'background.paper',
        py: 6,
        width: '100%',
        textAlign: 'center',
      }}
    >
      <Container maxWidth='lg'>
        <Logo />
        <Typography variant='subtitle2' align='center' gutterBottom>
          {title}
        </Typography>
        <Typography
          variant='subtitle1'
          align='center'
          color='text.secondary'
          component='p'
        >
          {description}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;
