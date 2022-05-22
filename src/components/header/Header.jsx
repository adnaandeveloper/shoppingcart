import React from 'react';
import { Col, Menu, Row } from 'antd';
import CartBadge from '../CartBadge';
const Header = () => {
  return (
    <>
      <Menu
        mode="horizontal"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <Row>
          <Col>
            <Menu.Item key="mail" style={{ cursor: 'none' }}>
              Navigation One
            </Menu.Item>
          </Col>
          <Col>
            <Menu.Item key="mail">
              <CartBadge />
            </Menu.Item>
          </Col>
        </Row>
      </Menu>
    </>
  );
};

export default Header;
