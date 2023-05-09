import Button from '../components/Button';
import Categories from '../components/Categories';
import Header from '../components/Header';
import Menu from '../components/Menu';
import * as Styled from './styles';

const Main = () => {
  return (
    <>
      <Styled.Container>
        <Header />

        <Styled.CategoriesContainer>
          <Categories />
        </Styled.CategoriesContainer>

        <Styled.MenuContainer>
          <Menu />
        </Styled.MenuContainer>

      </Styled.Container>

      <Styled.Footer>
        <Styled.FooterContainer>
          <Button onPress={() => alert('New order confirmed!')}>
            New Order
          </Button>
        </Styled.FooterContainer>
      </Styled.Footer>
    </>
  );
};

export default Main;