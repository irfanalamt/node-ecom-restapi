import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import {
  alpha,
  Badge,
  Typography,
  AppBar,
  Toolbar,
  InputBase,
  Button,
  Link,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import NextLink from 'next/link';

const LogoLg = styled(Typography)(({ theme }) => ({
  display: 'none',
  fontWeight: 'bold',
  [theme.breakpoints.up('sm')]: { display: 'block' },
}));
const LogoSm = styled(Typography)(({ theme }) => ({
  display: 'block',
  fontWeight: 'bold',
  [theme.breakpoints.up('sm')]: { display: 'none' },
}));

const SearchDiv = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  borderRadius: theme.shape.borderRadius,
  width: '20%',
}));

const Navbar = () => {
  return (
    <AppBar position='static' sx={{ backgroundColor: '#009687' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <SearchDiv>
          <Search sx={{ marginLeft: '5px' }} />
          <InputBase sx={{ marginLeft: '5px' }} color='white' />
        </SearchDiv>
        <LogoLg variant='h6'>RFN shop</LogoLg>
        <LogoSm variant='h6'>RFN</LogoSm>
        <div style={{ alignItems: 'center' }}>
          <Button
            variant='contained'
            href='/login'
            sx={{
              color: 'white',
              borderRadius: '5px',
              backgroundColor: '#00897A',
            }}
          >
            Login
          </Button>
          <Button
            variant='contained'
            href='/signup'
            sx={{
              color: 'white',
              marginLeft: '10px',
              borderRadius: '5px',
              backgroundColor: '#00897A',
            }}
          >
            Signup
          </Button>
        </div>
        <NextLink href='/cart' passHref>
          <Link color='inherit'>
            <Badge
              sx={{ marginRight: '15px' }}
              badgeContent={4}
              color='secondary'
            >
              <ShoppingCartOutlined />
            </Badge>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;