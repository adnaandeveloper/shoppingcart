import React from 'react';
import { Badge, Avatar } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const CartBadge = () => {
  return (
    <div style={{ marginTop: '5px' }}>
      <Link to="cartlist">
        <Badge count={5}>
          <ShoppingCartOutlined shape="square" size="sm" />
        </Badge>
      </Link>
    </div>
  );
};

export default CartBadge;
