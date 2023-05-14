import { ActivityIndicator } from 'react-native';
import { Text } from '../Text';
import * as Styled from './styles';

interface ButtonProps {
  children: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
}

const Button = ({ children, onPress, disabled, loading }: ButtonProps) => {
  return (
    <Styled.Container onPress={onPress} disabled={disabled || loading}>
      {!loading && (
        <Text weight='600' color='#fff'>{children}</Text>
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