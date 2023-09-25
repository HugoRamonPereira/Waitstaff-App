import { ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import Button from '../components/Button';
import Categories from '../components/Categories';
import Header from '../components/Header';
import Menu from '../components/Menu';
import TableModal from '../components/TableModal';
import * as Styled from './styles';
import Cart from '../components/Cart';
import { CartItem } from '../types/CartItem';
import { Product } from '../types/Product';
import { Empty } from '../components/Icons/Empty';
import { Text } from '../components/Text';
import { Category } from '../types/Category';
import { api } from '../utils/api';

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoadingPorductsFromCategoryClick, setIsLoadingProductsFromCategoryClick] = useState(false);

  useEffect(() => {
    Promise.all([
      api.get('/categories'),
      api.get('/products'),
    ]).then(([ categoriesResponse, productsResponse ]) => {
      setCategories(categoriesResponse.data);
      setProducts(productsResponse.data);
      setIsLoading(false);
    });
  }, []);

  const handleSelectCategory = async (categoryId: string) => {
    // This variable is a ternary that contains 2 scenarios
    // in case the user has no category selected, because we can desselect then all products will be listed
    // But if the user click in a category, categoryId will be activated and only the products from the category the user clicked will be listed
    const dynamicRoute = !categoryId
      ? '/products'
      : `/categories/${categoryId}/products`;

    // Loading to load products of the category clicked, the categories will still be there
    setIsLoadingProductsFromCategoryClick(true);

    const { data } = await api.get(dynamicRoute);

    setProducts(data);
    setIsLoadingProductsFromCategoryClick(false);
    // Loading will disappear once the products appear
  };

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
      // Function created to see if the item clicked to be added to the cart is already in the cart, we are checking it by getting the index, usig findIndex
      // If the item with the index is there it will be added otherwise it will return -1
      const itemIndex = prevState.findIndex(
        cartItem => cartItem.product._id === product._id
      );

      // If there are no items found by the function above and then we add the item clicked
      if (itemIndex < 0) {
        return prevState.concat({
          quantity: 1,
          product
        });
      }

      // This is the logic to incremente the quantity of an existing item already in the cart instead of adding a new item generating duplication
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

        {/* Loading that hides everything but the name of the app: Waitstaff */}
        {isLoading && (
          <Styled.CenteredContainer>
            <ActivityIndicator
              color="#D73035"
              size="large"
            />
          </Styled.CenteredContainer>
        )}

        {/* Loading that will appear when we click in a category */}
        {/* The list of categories will be on the page, this loading is for the products only */}
        {!isLoading && (
          <>
            <Styled.CategoriesContainer>
              <Categories
                categories={categories}
                onSelectCategory={handleSelectCategory}
              />
            </Styled.CategoriesContainer>

            {isLoadingPorductsFromCategoryClick ? (
              <Styled.CenteredContainer>
                <ActivityIndicator
                  color="#D73035"
                  size="large"
                />
              </Styled.CenteredContainer>
            ) : (
              <>
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
              selectedTable={selectedTable}
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