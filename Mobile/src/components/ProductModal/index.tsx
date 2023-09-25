import { FlatList, Modal } from 'react-native';
import { Product } from '../../types/Product';
import * as Styled from './styles';
import { Close } from '../Icons/Close';
import { Text } from '../Text';
import formatCurrency from '../../utils/formatCurrency';
import Button from '../Button';

type ProductModalProps = {
  visible: boolean;
  onClose: () => void;
  product: null | Product;
  onAddToCart: (product: Product) => void;
}

const ProductModal = ({ visible, onClose, product, onAddToCart }: ProductModalProps) => {
  if (!product) {
    return null;
  }

  // Function to add items to cart and after close the modal
  const handleAddToCart = () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    onAddToCart(product!);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType='slide'
      presentationStyle='pageSheet'
      onRequestClose={onClose}
    >
      <Styled.Image
        source={{
          uri: `http://192.168.0.6:3001/uploads/${product.imagePath}`
        }}
      >
        <Styled.CloseButton onPress={onClose}>
          <Close />
        </Styled.CloseButton>
      </Styled.Image>

      <Styled.ModalBody>
        <Styled.Header>
          <Text size={24} weight='700'>{product.name}</Text>
          <Text color='#666' style={{ marginTop: 8 }}>{product.description}</Text>
        </Styled.Header>

        {product.ingredients.length > 0 && (
          <Styled.IngredientsContainer>
            <Text weight='700' color='#666'>Ingredients</Text>

            <FlatList
              style={{ marginTop: 16 }}
              data={product.ingredients}
              keyExtractor={ingredient => ingredient._id}
              showsVerticalScrollIndicator={false}
              renderItem={({ item: ingredient }) => (
                <Styled.Ingredient>
                  <Text>{ingredient.icon}</Text>
                  <Text
                    size={14}
                    color='#666'
                    style={{ marginLeft: 20 }}
                  >
                    {ingredient.name}
                  </Text>
                </Styled.Ingredient>
              )}
            >
            </FlatList>
          </Styled.IngredientsContainer>
        )}
      </Styled.ModalBody>

      <Styled.Footer>
        <Styled.FooterContainer>
          <Styled.PriceContainer>
            <Text color="#666">Price</Text>
            <Text size={20} weight='700'>{formatCurrency(product.price)}</Text>
          </Styled.PriceContainer>
          <Button onPress={handleAddToCart}>Add to order</Button>
        </Styled.FooterContainer>
      </Styled.Footer>

    </Modal>
  );
};

export default ProductModal;