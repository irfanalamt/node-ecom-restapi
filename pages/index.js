import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';

export default function Index() {
  return (
    <>
      <Navbar />
      <Container>
        <ProductList />
      </Container>
      <Footer title='Where comfort and style meet.' description='@irfanalamt' />
    </>
  );
}
