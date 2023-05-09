import { FlatList } from 'react-native';
import { categories } from '../../mocks/categories';
import { Text } from '../Text';
import * as Styled from './styles';
import { useState } from 'react';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSelectedCategory = (categoryId: string) => {
    const category = selectedCategory === categoryId ? '' : categoryId;

    setSelectedCategory(category);
  };

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 24 }}
      data={categories}
      keyExtractor={category => category._id}
      renderItem={({ item: category }) => {
        const isSelected = selectedCategory === category._id;

        return (
          <Styled.Category onPress={() => handleSelectedCategory(category._id)}>
            <Styled.Icon>
              <Text opacity={isSelected ? 1 : 0.5}>
                {category.icon}
              </Text>
            </Styled.Icon>
            <Text size={14} weight='600' opacity={isSelected ? 1 : 0.5}>
              {category.name}
            </Text>
          </Styled.Category>
        );
      }}
    />
  );
};

export default Categories;