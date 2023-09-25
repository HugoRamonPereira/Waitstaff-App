import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  background: #FAFAFA;
  flex: 1;
`;

export const CategoriesContainer = styled.View`
  height: 73px;
  margin-top: 34px;
`;

export const MenuContainer = styled.View`
  flex: 1;
`;

export const Footer = styled.View`
  min-height: 110px;
  background: #FFF;
  padding: 16px 24px;
`;

export const FooterContainer = styled.SafeAreaView`

`;

export const CenteredContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;