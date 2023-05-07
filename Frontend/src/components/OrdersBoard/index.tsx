import { Order } from '../../types/Order';
import * as Styled from './styles';

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

const OrdersBoard = ({ icon, title, orders }: OrdersBoardProps) => {
  return (
    <Styled.Board>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>( {orders.length} )</span>
      </header>

      {orders.length > 0 && (
        <Styled.OrdersContainer>
          {orders.map((order) => (
            <button type='button' key={order._id}>
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