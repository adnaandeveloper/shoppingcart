import { Row, Col } from 'antd';
import React from 'react';

import Product from './Product';

const ProductList = ({ data }) => {
  return (
    <>
      <Row gutter={16}>
        {data.map((item, index) => (
          <Col key={index} style={{ width: '250px' }}>
            <Product name={item.name} url={item.url} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ProductList;
