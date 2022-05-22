import React from 'react';
import { Card, Col, Row } from 'antd';
import { PlusOutlined, PlusCircleOutlined } from '@ant-design/icons';

const { Meta } = Card;

const Product = ({ name, url }) => {
  return (
    <>
      <Meta title={name} />
      <Card
        hoverable
        style={{ width: 240, height: 300 }}
        cover={
          <img
            style={{ width: 240, height: 240 }}
            alt="you should see a cat"
            src={url}
          />
        }
      >
        <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Col>
            <PlusOutlined />
          </Col>
          <Col>
            <PlusCircleOutlined />
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default Product;
