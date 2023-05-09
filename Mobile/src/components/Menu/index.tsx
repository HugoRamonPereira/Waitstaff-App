import { FlatList, TouchableOpacity } from 'react-native';
import * as Styled from './styles';
import { products } from '../../mocks/products';
import { Text } from '../Text';
import formatCurrency from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';

const Menu = () => {
  return (
    <FlatList
      data={products}
      style={{ marginTop: 32 }}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      keyExtractor={product => product._id}
      ItemSeparatorComponent={Styled.Separator}
      renderItem={({ item: product }) => (
        <Styled.Product>
          <Styled.ProductImage
            source={{
              uri: `http://192.168.0.9:19000:3001/uploads/${product.imagePath}`
            }}
          />

          <Styled.ProductDetails>
            <Text weight='600'>{product.name}</Text>
            <Text size={14} color='#666' style={{ marginVertical: 8 }}>
              {product.description}
            </Text>
            <Text size={14} weight='600'>
              {formatCurrency(product.price)}
            </Text>
          </Styled.ProductDetails>

          <Styled.AddToCartButton>
            <PlusCircle />
          </Styled.AddToCartButton>
        </Styled.Product>
      )}
    />
  );
};

export default Menu;