import logo from '../../assets/images/logo-eng.svg';
import * as Styled from './styles';

const Header = () => {
  return (
    <Styled.Container>
      <Styled.Content>
        <div className="page-details">
          <h1>Orders</h1>
          <h2>Manage your customer&apos;s orders</h2>
        </div>
        <Styled.Logo src={logo} alt="waitstaff logo" />
      </Styled.Content>
    </Styled.Container>
  );
};

export default Header;