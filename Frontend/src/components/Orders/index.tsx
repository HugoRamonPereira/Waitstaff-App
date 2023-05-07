import { Order } from '../../types/Order';
import OrdersBoard from '../OrdersBoard';
import * as Styled from './styles';

const orders: Order[] = [
  {
    '_id': '64570e202f1e3b86577c2304',
    'table': '3',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': '1683399063393-coca-cola.png',
          'price': 6,
        },
        'quantity': 1,
        '_id': '64570e202f1e3b86577c2305'
      }
    ]
  }
];

const Orders = () => {
  return (
    <Styled.Container>
      <OrdersBoard
        icon="⏰"
        title="Waiting Line"
        orders={orders}
      />
      <OrdersBoard
        icon="🧑🏼‍🍳"
        title="Food in preparation"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Order finished"
        orders={[]}
      />
    </Styled.Container>
  );
};

export default Orders;