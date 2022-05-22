import { Row, Col } from 'antd';
import React from 'react';

import Product from './Product';

const ProductList = ({ data, incrementProduct, decrementProduct }) => {
    return (
        <>
            <Row gutter={16}>
                {data.map((item, index) => (
                    <Col key={index} style={{ width: '250px' }}>
                        <Product
                            name={item.name}
                            url={item.url}
                            onAdd={() => incrementProduct(item.id)}
                            onDecrease={() => decrementProduct(item.id)}
                        />
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default ProductList;
