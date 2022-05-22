import React from 'react';
import { ProductList } from '../components';

const ProductScreen = ({ data }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ProductList data={data} />
    </div>
  );
};

export default ProductScreen;
