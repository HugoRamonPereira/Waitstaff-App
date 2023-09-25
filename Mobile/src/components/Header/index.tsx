import { TouchableOpacity } from 'react-native';
import { Text } from '../Text';
import * as Styled from './styles';

type HeaderProps = {
  selectedTable: string;
  onCancelOrder: () => void
}

const Header = ({ selectedTable, onCancelOrder }: HeaderProps) => {
  return (
    <Styled.Container>
      {!selectedTable && (
        <>
          <Text size={14} opacity={0.9}>Welcome to</Text>
          <Text size={24} weight='700'>
            WAITSTAFF
            <Text size={24}>App</Text>
          </Text>
        </>
      )
      }

      {selectedTable && (
        <Styled.OrderHeaderContainer>
          <Styled.OrderHeader>
            <Text size={24} weight='700'>Order 1</Text>
            <TouchableOpacity onPress={onCancelOrder}>
              <Text color='#D73035' size={14} weight='700'>cancel order</Text>
            </TouchableOpacity>
          </Styled.OrderHeader>
          <Styled.TableContainer>
            <Text color='#666'>Table {selectedTable}</Text>
          </Styled.TableContainer>
        </Styled.OrderHeaderContainer>
      )}
    </Styled.Container>
  );
};

export default Header;