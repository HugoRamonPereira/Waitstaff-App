import { FlatList, TouchableOpacity } from 'react-native';
import { CartItem } from '../../types/CartItem';
import * as Styled from './styles';
import { Text } from '../Text';
import formatCurrency from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import { MinusCircle } from '../Icons/MinusCircle';
import Button from '../Button';
import { Product } from '../../types/Product';
import ConfirmOrderModal from '../ConfirmOrderModal';
import { useState } from 'react';
import { api } from '../../utils/api';

type CartProps = {
  cartItems: CartItem[];
  onAdd: (product: Product) => void;
  onSubtract: (product: Product) => void;
  onOrderConfirmation: () => void;
  selectedTable: string;
}

const Cart = ({ cartItems, onAdd, onSubtract, onOrderConfirmation, selectedTable }: CartProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const total = cartItems.reduce((acc, cartItem) => {
    return acc + cartItem.quantity * cartItem.product.price;
  }, 0);

  async function handleConfirmOrder() {
    setIsLoading(true);
    // This is the payload we pass as 2nd argument in the api.post request
    // This payload is in the exact format that our backend needs to receive
    // The products we needed to map to return the 2 properties that the backend needs: product and quantity
    const payload = {
      table: selectedTable,
      products: cartItems.map((cartItem) => ({
        product: cartItem.product._id,
        quantity: cartItem.quantity
      }))
    };
    await api.post('/orders', payload);

    setIsLoading(false);
    setIsModalVisible(true);
  }

  const handleOk = () => {
    onOrderConfirmation();
    setIsModalVisible(false);
  };

  return (
    <>
      <ConfirmOrderModal
        visible={isModalVisible}
        onOk={handleOk}
      />
      {cartItems.length > 0 && (
        <FlatList
          data={cartItems}
          keyExtractor={cartItem => cartItem.product._id}
          showsVerticalScrollIndicator={false}
          // maxHeight was added to limit the cart component and avoid it covers the menu items, a scroll is the best solution
          style={{ marginBottom: 20, maxHeight: 150 }}
          renderItem={({ item: cartItem }) => (
            <Styled.Item>
              <Styled.ProductContainer>

                <Styled.Image
                  source={{
                    uri: `http://192.168.0.6:3001/uploads/${cartItem.product.imagePath}`
                  }}
                />

                <Styled.QuantityContainer>
                  <Text size={14} color="#666">
                    {cartItem.quantity}x
                  </Text>
                </Styled.QuantityContainer>

                <Styled.ProductDetails>
                  <Text size={14} weight='500'>
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
              <Text size={20} weight='700'>{formatCurrency(total)}</Text>
            </>
          ) : (
            <Text color='#999'>Your cart is empty</Text>
          )}
        </Styled.TotalContainer>
        <Button
          onPress={handleConfirmOrder}
          disabled={cartItems.length === 0}
          loading={isLoading}
        >
          Confirm order
        </Button>
      </Styled.OrderSummary>
    </>
  );
};

export default Cart;