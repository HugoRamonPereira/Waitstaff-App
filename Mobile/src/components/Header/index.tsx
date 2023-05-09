import { Text } from '../Text';
import { Container } from './styles';

const Header = () => {
  return (
    <Container>
      <Text size={14} opacity={0.9}>Welcome to</Text>
      <Text size={24} weight='700'>
        WAITSTAFF
        <Text size={24}>App</Text>
      </Text>
    </Container>
  );
};

export default Header;