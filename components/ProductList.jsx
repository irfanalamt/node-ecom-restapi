import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { maxHeight } from '@mui/system';
import { products } from '../data';

const ProductList = () => {
  return (
    <div>
      <Typography
        sx={{ fontWeight: 500, marginTop: 2, marginBottom: 1 }}
        variant='h5'
        component='div'
      >
        Products
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid sx={{ marginX: 'auto' }} item md={4} key={product.name}>
            <Card>
              <CardActionArea>
                <CardMedia
                  sx={{
                    padding: 0.8,
                    objectFit: 'cover',
                    maxHeight: 495,
                  }}
                  component='img'
                  image={product.image}
                  title={product.name}
                ></CardMedia>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography sx={{ fontSize: '1rem' }} variant='caption'>
                    {product.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Typography
                  sx={{ fontWeight: 420 }}
                  variant='subtitle1'
                  gutterBottom
                >
                  ${product.price}
                </Typography>
                <Button
                  sx={{ marginLeft: 'auto' }}
                  size='small'
                  color='primary'
                >
                  Add to cart
                  <AddShoppingCartIcon sx={{ marginX: 1, fontSize: 20 }} />
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;
