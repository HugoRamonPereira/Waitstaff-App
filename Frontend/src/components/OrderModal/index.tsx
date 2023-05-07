import * as Styled from './styles';
import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';
import formatCurrency from '../../utils/formatCurrency';
import { useEffect } from 'react';

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
  onClose: () => void;
}

const OrderModal = ({ visible, order, onClose }: OrderModalProps) => {

  useEffect(() => {
    function handleEscapeKeyPress(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }
    document.addEventListener('keydown', handleEscapeKeyPress);

    return () => {
      document.removeEventListener('keydown', handleEscapeKeyPress);
    };
  }, [onClose]);

  if (!visible || !order) {
    return null;
  }

  const total = order.products.reduce((total, { product, quantity }) => {
    return total + (product.price * quantity);
  }, 0);

  return (
    <Styled.Overlay>
      <Styled.ModalBody>
        <header>
          <strong>Table {order.table}</strong>
          <button type="button" onClick={onClose}>
            <img
              src={closeIcon}
              alt="close X icon"
              width="30"
            />
          </button>
        </header>

        <div className="status-container">
          <small>Order Status</small>
          <div>
            <span>
              {order.status === 'WAITING' && '⏰'}
              {order.status === 'IN_PRODUCTION' && '🧑🏼‍🍳'}
              {order.status === 'DONE' && '✅'}
            </span>
            <strong>
              {order.status === 'WAITING' && 'Waiting'}
              {order.status === 'IN_PRODUCTION' && 'In production'}
              {order.status === 'DONE' && 'Done'}
            </strong>
          </div>
        </div>

        <Styled.OrderDetails>
          <strong>Items</strong>

          <div className="order-items">
            {order.products.map(({ _id, product, quantity }) => (
              <div className="item" key={_id}>
                <img
                  src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt={product.name}
                  width="56"
                  height="28.51"
                />
                <span className="quantity">
                  {quantity}x
                </span>
                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
        </Styled.OrderDetails>

        <Styled.Actions>
          <button type='button' className='primary'>
            Start Production
          </button>
          <button type='button' className='secondary'>
            Cancel Order
          </button>
        </Styled.Actions>
      </Styled.ModalBody>
    </Styled.Overlay>
  );
};

export default OrderModal;