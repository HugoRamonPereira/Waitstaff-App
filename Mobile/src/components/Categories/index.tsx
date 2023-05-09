import { FlatList } from 'react-native';
import { categories } from '../../mocks/categories';
import { Text } from '../Text';
import * as Styled from './styles';

const Categories = () => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 24 }}
      data={categories}
      keyExtractor={category => category._id}
      renderItem={({ item: category }) => (
        <Styled.Category>
          <Styled.Icon>
            <Text>{category.icon}</Text>
          </Styled.Icon>
          <Text size={14} weight='600'>{category.name}</Text>
        </Styled.Category>
      )}
    />
  );
};

export default Categories;