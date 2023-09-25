import { useState } from 'react';
import { Order } from '../../types/Order';
import OrderModal from '../OrderModal';
import * as Styled from './styles';
import OrdersEmpty from '../OrdersEmpty';
import { api } from '../../utils/api';
import { toast } from 'react-toastify';

type OrdersBoardProps = {
  icon: string;
  title: string;
  orders: Order[];
  onCancelOrder: (orderId: string) => void;
  onChangeOrderStatus: (orderId: string, status: Order['status']) => void;
}

const OrdersBoard = ({ icon, title, orders, onCancelOrder, onChangeOrderStatus }: OrdersBoardProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleOpenModal = (order: Order) => {
    setIsModalVisible(true);
    setSelectedOrder(order);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedOrder(null);
  };

  async function handleCancelOrder() {
    setIsLoading(true);

    await api.delete(`/orders/${selectedOrder?._id}`);

    toast.success(`The order of the table ${selectedOrder?.table} has been cancelled!`);
    onCancelOrder(selectedOrder!._id);
    setIsLoading(false);
    setIsModalVisible(false);
  }

  async function handleChangeOrderStatus() {
    setIsLoading(true);

    const status = selectedOrder?.status === 'WAITING' ? 'IN_PRODUCTION' : 'DONE';

    await api.patch(`/orders/${selectedOrder?._id}`, { status });

    toast.success(`The order of the table ${selectedOrder?.table} had its status changed`);
    onChangeOrderStatus(selectedOrder!._id, status );
    setIsLoading(false);
    setIsModalVisible(false);
  }

  return (
    <Styled.Board>
      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}
        onClose={handleCloseModal}
        onCancelOrder={handleCancelOrder}
        isLoading={isLoading}
        onChangeOrderStatus={handleChangeOrderStatus}
      />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>( {orders.length} )</span>
      </header>

      {orders.length > 0 ? (
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
      ) : <OrdersEmpty />}
    </Styled.Board>
  );
};

export default OrdersBoard;