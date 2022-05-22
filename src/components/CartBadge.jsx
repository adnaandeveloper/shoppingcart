import React from 'react';
import { Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const CartBadge = ({ count }) => {
    return (
        <div style={{ marginTop: '5px' }}>
            <Link to="cartlist">
                <Badge count={count}>
                    <ShoppingCartOutlined shape="square" size="sm" />
                </Badge>
            </Link>
        </div>
    );
};

export default CartBadge;
