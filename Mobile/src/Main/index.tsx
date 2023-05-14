import { ActivityIndicator } from 'react-native';
import { useState } from 'react';
import Button from '../components/Button';
import Categories from '../components/Categories';
import Header from '../components/Header';
import Menu from '../components/Menu';
import TableModal from '../components/TableModal';
import * as Styled from './styles';
import Cart from '../components/Cart';
import { CartItem } from '../types/CartItem';
import { Product } from '../types/Product';
import { products as mockedProducts } from '../mocks/products';
import { Empty } from '../components/Icons/Empty';
import { Text } from '../components/Text';

const Main = () => {
  const [isLoading] = useState(false);
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  const handleSaveTableNumber = (table: string) => {
    setSelectedTable(table);
  };

  const handleResetOrder = () => {
    setSelectedTable('');
    setCartItems([]);
  };

  const handleAddToCart = (product: Product) => {
    if (!selectedTable) {
      setIsTableModalVisible(true);
    }

    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        cartItem => cartItem.product._id === product._id
      );

      if (itemIndex < 0) {
        return prevState.concat({
          quantity: 1,
          product
        });
      }

      const newCartItems = [...prevState];
      const item = newCartItems[itemIndex];

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity + 1,
      };

      return newCartItems;
    });
  };

  const handleSubtractCartItem = (product: Product) => {
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        cartItem => cartItem.product._id === product._id
      );

      const item = prevState[itemIndex];
      const newCartItems = [...prevState];

      if (item.quantity === 1) {
        newCartItems.splice(itemIndex, 1);

        return newCartItems;
      }

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity - 1,
      };

      return newCartItems;
    });
  };

  return (
    <>
      <Styled.Container>
        <Header
          selectedTable={selectedTable}
          onCancelOrder={handleResetOrder}
        />

        {isLoading && (
          <Styled.CenteredContainer>
            <ActivityIndicator
              color="#D73035"
              size="large"
            />
          </Styled.CenteredContainer>
        )}

        {!isLoading && (
          <>
            <Styled.CategoriesContainer>
              <Categories />
            </Styled.CategoriesContainer>

            {products.length > 0 ? (
              <Styled.MenuContainer>
                <Menu
                  onAddToCart={handleAddToCart}
                  products={products}
                />
              </Styled.MenuContainer>
            ) : (
              <Styled.CenteredContainer>
                <Empty />
                <Text
                  color='#666666'
                  style={{ marginTop: 24 }}
                >
                  No products were found!
                </Text>
              </Styled.CenteredContainer>
            )}
          </>
        )}


      </Styled.Container>

      <Styled.Footer>
        <Styled.FooterContainer>
          {!selectedTable && (
            <Button
              onPress={() => setIsTableModalVisible(true)}
              disabled={isLoading}
            >
              New Order
            </Button>
          )}

          {selectedTable && (
            <Cart
              cartItems={cartItems}
              onAdd={handleAddToCart}
              onSubtract={handleSubtractCartItem}
              onOrderConfirmation={handleResetOrder}
            />
          )}
        </Styled.FooterContainer>
      </Styled.Footer>

      <TableModal
        visible={isTableModalVisible}
        onClose={() => setIsTableModalVisible(false)}
        onSave={handleSaveTableNumber}
      />
    </>
  );
};

export default Main;