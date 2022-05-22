import { Table } from 'antd';
import { useStore } from '../store/index';

const columns = [
    {
        dataIndex: 'name',
        title: 'Name',
    },
    {
        dataIndex: 'quantity',
        title: 'Quantity',
    },
];

const CartList = () => {
    const productsMap = useStore((store) => store.productsMap);
    const cart = useStore((store) => store.cart);

    const dataSource = Object.keys(cart).map((productId) => ({
        ...productsMap[productId],
        quantity: cart[productId],
    }));

    return <Table columns={columns} dataSource={dataSource} />;
};

export default CartList;
