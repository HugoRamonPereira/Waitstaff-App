import { FlatList, Modal } from 'react-native';
import { Product } from '../../types/Product';
import * as Styled from './styles';
import { Close } from '../Icons/Close';
import { Text } from '../Text';

interface ProductModalProps {
  visible: boolean;
  onClose: () => void;
  product: null | Product;
}

const ProductModal = ({ visible, onClose, product }: ProductModalProps) => {
  if (!product) {
    return null;
  }

  return (
    <Modal
      visible={visible}
      animationType='slide'
      presentationStyle='pageSheet'
      onRequestClose={onClose}
    >
      <Styled.Image
        source={{
          uri: `http://192.168.0.9:19000:3001/uploads/${product.imagePath}`
        }}
      >
        <Styled.CloseButton onPress={onClose}>
          <Close />
        </Styled.CloseButton>
      </Styled.Image>

      <Styled.ModalBody>
        <Styled.Header>
          <Text size={24} weight='600'>{product.name}</Text>
          <Text color='#666' style={{ marginTop: 8 }}>{product.description}</Text>
        </Styled.Header>

        <Styled.IngredientsContainer>
          <Text weight='600' color='#666'>Ingredients</Text>

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
      </Styled.ModalBody>
    </Modal>
  );
};

export default ProductModal;