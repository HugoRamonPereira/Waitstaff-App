import { FlatList } from 'react-native';
import { Text } from '../Text';
import * as Styled from './styles';
import { useState } from 'react';
import { Category } from '../../types/Category';

type CategoriesProps = {
  categories: Category[];
  onSelectCategory: (categoryId: string) => Promise<void>
}

const Categories = ({ categories, onSelectCategory}: CategoriesProps) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSelectedCategory = (categoryId: string) => {
    // Code to select and deselect the categories when pressing the button
    const category = selectedCategory === categoryId ? '' : categoryId;
    onSelectCategory(category);
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
          <Styled.CategoryContainer onPress={() => handleSelectedCategory(category._id)}>
            <Styled.Icon>
              <Text opacity={isSelected ? 1 : 0.5}>
                {category.icon}
              </Text>
            </Styled.Icon>
            <Text size={14} weight='500' opacity={isSelected ? 1 : 0.5}>
              {category.name}
            </Text>
          </Styled.CategoryContainer>
        );
      }}
    />
  );
};

export default Categories;