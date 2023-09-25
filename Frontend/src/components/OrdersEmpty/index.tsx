import * as Styled from './styles';
import noOrder from '../../assets/images/no-order.svg';

const OrdersEmpty = () => {
  return (
    <Styled.Container>
      You don&apos;t have any orders here
      <img src={noOrder} alt="No order" width={35} height={35} />
    </Styled.Container>
  );
};

export default OrdersEmpty;