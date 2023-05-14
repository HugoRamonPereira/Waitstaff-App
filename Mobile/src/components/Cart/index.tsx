import { FlatList, TouchableOpacity } from 'react-native';
import { CartItem } from '../../types/CartItem';
import * as Styled from './styles';
import { Text } from '../Text';
import formatCurrency from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import { MinusCircle } from '../Icons/MinusCircle';
import Button from '../Button';
import { Product } from '../../types/Product';

interface CartProps {
  cartItems: CartItem[];
  onAdd: (product: Product) => void;
  onSubtract: (product: Product) => void;
}

const Cart = ({ cartItems, onAdd, onSubtract }: CartProps) => {
  const total = cartItems.reduce((acc, cartItem) => {
    return acc + cartItem.quantity * cartItem.product.price;
  }, 0);

  return (
    <>
      {cartItems.length > 0 && (
        <FlatList
          data={cartItems}
          keyExtractor={cartItem => cartItem.product._id}
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 20, maxHeight: 150 }}
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
                <TouchableOpacity
                  style={{ marginRight: 24 }}
                  onPress={() => onAdd(cartItem.product)}
                >
                  <PlusCircle />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => onSubtract(cartItem.product)}
                >
                  <MinusCircle />
                </TouchableOpacity>
              </Styled.Actions>
            </Styled.Item>
          )}
        />
      )}
      <Styled.OrderSummary>
        <Styled.TotalContainer>
          {cartItems.length > 0 ? (
            <>
              <Text color='#666'>Total</Text>
              <Text size={20} weight='600'>{formatCurrency(total)}</Text>
            </>
          ) : (
            <Text color='#999'>Your cart is empty</Text>
          )}
        </Styled.TotalContainer>
        <Button
          onPress={() => alert('Order created and dispatched!')}
          disabled={cartItems.length === 0}
        >
          Confirm order
        </Button>
      </Styled.OrderSummary>
    </>
  );
};

export default Cart;