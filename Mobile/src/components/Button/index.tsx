import { ActivityIndicator } from 'react-native';
import { Text } from '../Text';
import * as Styled from './styles';
import { PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren<{
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
}>


const Button = ({ children, onPress, disabled, loading }: ButtonProps) => {
  return (
    <Styled.Container onPress={onPress} disabled={disabled || loading}>
      {!loading && (
        <Text weight='700' color='#fff'>{children}</Text>
      )}
      {loading && (
        <ActivityIndicator
          color="#FFFFFF"
        />
      )}
    </Styled.Container>
  );
};

export default Button;