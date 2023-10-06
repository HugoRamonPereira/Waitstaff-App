import { useEffect, useState } from 'react';
import { Order } from '../../types/Order';
import OrdersBoard from '../OrdersBoard';
import * as Styled from './styles';
import { api } from '../../utils/api';
import socketIo from 'socket.io-client';

const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const socket = socketIo('http://localhost:3001', {
      transports: ['websocket'],
    });

    socket.on('new_order', (order) => {
      setOrders(prevState => prevState.concat(order));
    });
  }, []);

  useEffect(() => {
    api.get('/orders')
      .then(({ data }) => {
        setOrders(data);
      });
  }, []);

  const waitingOrder = orders.filter((order) => order.status === 'WAITING');
  const inProduction = orders.filter((order) => order.status === 'IN_PRODUCTION');
  const orderFinished = orders.filter((order) => order.status === 'DONE');

  // This is the function that will remove the deleted order from the board when the deletion is complete
  // Without this function we would have to refresh the page to see the order removed
  // The function will filter the orders and leave only the one that has the id different than the one cliked to delete
  function handleCancelOrder(orderId: string) {
    setOrders((prevState) => prevState.filter(order => order._id !== orderId));
  }

  // This function will change the status by passing all the order info using spread and passing the new status from the enum
  function handleOrderStatusChange(orderId: string, status: Order['status']) {
    setOrders((prevState) => prevState.map((order) => (
      order._id === orderId ? {...order, status} : order
    )));
  }

  return (
    <Styled.Container>
      <OrdersBoard
        icon="⏰"
        title="Waiting Line"
        orders={waitingOrder}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
      <OrdersBoard
        icon="🧑🏼‍🍳"
        title="In Preparation"
        orders={inProduction}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
      <OrdersBoard
        icon="✅"
        title="Finished"
        orders={orderFinished}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
    </Styled.Container>
  );
};

export default Orders;