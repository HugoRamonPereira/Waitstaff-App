import { useState } from 'react';
import { Order } from '../../types/Order';
import OrderModal from '../OrderModal';
import * as Styled from './styles';

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

const OrdersBoard = ({ icon, title, orders }: OrdersBoardProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);

  const handleOpenModal = (order: Order) => {
    setIsModalVisible(true);
    setSelectedOrder(order);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedOrder(null);
  };

  return (
    <Styled.Board>
      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}
        onClose={handleCloseModal}
      />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>( {orders.length} )</span>
      </header>

      {orders.length > 0 && (
        <Styled.OrdersContainer>
          {orders.map((order) => (
            <button
              type='button'
              key={order._id}
              // Added a callback function to onClick with the handleOpenModal
              // instead of only making a reference so that I can send the
              // order and have access to its info
              onClick={() => handleOpenModal(order)}
            >
              <strong>Table {order.table}</strong>
              <span>{order.products.length} items</span>
            </button>
          ))}
        </Styled.OrdersContainer>
      )}
    </Styled.Board>
  );
};

export default OrdersBoard;