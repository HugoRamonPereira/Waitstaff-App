import { useState } from 'react';
import Button from '../components/Button';
import Categories from '../components/Categories';
import Header from '../components/Header';
import Menu from '../components/Menu';
import TableModal from '../components/TableModal';
import * as Styled from './styles';

const Main = () => {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');

  const handleSaveTableNumber = (table: string) => {
    setSelectedTable(table);
  };

  const handleCancelOrder = () => {
    setSelectedTable('');
  };

  return (
    <>
      <Styled.Container>
        <Header
          selectedTable={selectedTable}
          onCancelOrder={handleCancelOrder}
        />

        <Styled.CategoriesContainer>
          <Categories />
        </Styled.CategoriesContainer>

        <Styled.MenuContainer>
          <Menu />
        </Styled.MenuContainer>

      </Styled.Container>

      <Styled.Footer>
        <Styled.FooterContainer>
          {!selectedTable && (
            <Button onPress={() => setIsTableModalVisible(true)}>
              New Order
            </Button>
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