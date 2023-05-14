import { FlatList, TouchableOpacity } from 'react-native';
import { CartItem } from '../../types/CartItem';
import * as Styled from './styles';
import { Text } from '../Text';
import formatCurrency from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import { MinusCircle } from '../Icons/MinusCircle';

interface CartProps {
  cartItems: CartItem[];
}

const Cart = ({ cartItems }: CartProps) => {
  return (
    <FlatList
      data={cartItems}
      keyExtractor={cartItem => cartItem.product._id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item: cartItem }) => (
        <Styled.Item>
          <Styled.ProductContainer>

            <Styled.Image
              source={{
                uri: `http://192.168.0.9:19000:3001/uploads/${cartItem.product.imagePath}`
              }}
            />

            <Styled.QuantityContainer>
              <Text size={14} color="#666">
                {cartItem.quantity}x
              </Text>
            </Styled.QuantityContainer>

            <Styled.ProductDetails>
              <Text size={14} weight='600'>
                {cartItem.product.name}
              </Text>
              <Text size={14} color='#666' style={{ marginTop: 4 }}>
                {formatCurrency(cartItem.product.price)}
              </Text>
            </Styled.ProductDetails>

          </Styled.ProductContainer>

          <Styled.Actions>
            <TouchableOpacity style={{ marginRight: 24 }}>
              <PlusCircle />
            </TouchableOpacity>

            <TouchableOpacity>
              <MinusCircle />
            </TouchableOpacity>
          </Styled.Actions>
        </Styled.Item>
      )}
    />
  );
};

export default Cart;