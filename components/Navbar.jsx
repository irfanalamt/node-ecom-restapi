import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  InputAdornment,
  TextField,
} from '@mui/material';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Appbar yo
          </Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
