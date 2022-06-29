import { useRouter } from 'next/router';
import { products } from '../../data';
import ErrorCustom from '../../components/ErrorCustom';

const ProductScreen = () => {
  const router = useRouter();
  const { slug } = router.query;
  const currentProduct = products.find((a) => a.slug === slug);
  if (!currentProduct) {
    return (
      <ErrorCustom
        message='The product you&#39;re looking for cannot be found.'
        title='Product ERROR'
      />
    );
  }
  return (
    <div>
      <h1>{currentProduct.name}</h1>
    </div>
  );
};

export default ProductScreen;
