import { FlatList } from 'react-native';
import * as Styled from './styles';
import { Text } from '../Text';
import formatCurrency from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import ProductModal from '../ProductModal';
import { useState } from 'react';
import { Product } from '../../types/Product';

type MenuProps = {
  onAddToCart: (product: Product) => void;
  products: Product[];
}

const Menu = ({ onAddToCart, products }: MenuProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<null | Product>(null);

  const handleOpenModal = (product: Product) => {
    setIsModalVisible(true);
    setSelectedProduct(product);
  };

  return (
    <>
      <ProductModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        product={selectedProduct}
        onAddToCart={onAddToCart}
      />
      <FlatList
        data={products}
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        keyExtractor={product => product._id}
        ItemSeparatorComponent={Styled.Separator}
        renderItem={({ item: product }) => (
          <Styled.ProductContainer onPress={() => handleOpenModal(product)}>
            <Styled.ProductImage
              source={{
                uri: `http://192.168.0.6:3001/uploads/${product.imagePath}`
              }}
            />

            <Styled.ProductDetails>
              <Text weight='700'>{product.name}</Text>
              <Text size={14} color='#666' style={{ marginVertical: 8 }}>
                {product.description}
              </Text>
              <Text size={14} weight='700'>
                {formatCurrency(product.price)}
              </Text>
            </Styled.ProductDetails>

            <Styled.AddToCartButton onPress={() => onAddToCart(product)}>
              <PlusCircle />
            </Styled.AddToCartButton>
          </Styled.ProductContainer>
        )}
      />
    </>
  );
};

export default Menu;