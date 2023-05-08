import { Order } from '../../types/Order';
import OrdersBoard from '../OrdersBoard';
import * as Styled from './styles';

// const orders: Order[] = [
//   {
//     '_id': '64570e202f1e3b86577c2304',
//     'table': '3',
//     'status': 'WAITING',
//     'products': [
//       {
//         'product': {
//           'name': 'Coca cola',
//           'imagePath': '1683399063393-coca-cola.png',
//           'price': 6,
//         },
//         'quantity': 1,
//         '_id': '64570e202f1e3b86577c2305'
//       }
//     ]
//   }
// ];

// From Mateus Silva
const orders: Order[] = [
  {
    _id: '6372e48cbcd195b0d3d0f7f3',
    table: '123',
    status: 'WAITING',
    products: [
      {
        product: {
          name: 'Pizza quatro queijos',
          imagePath: '1668472896991-quatro-queijos.png',
          price: 40,
        },
        quantity: 3,
        _id: '6372e48cbcd195b0d3d0f7f4'
      },
      {
        product: {
          name: 'Coca cola',
          imagePath: '1668473462705-coca-cola.png',
          price: 7,
        },
        quantity: 2,
        _id: '6372e48cbcd195b0d3d0f7f5'
      }
    ],
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
        title="Order in preparation"
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