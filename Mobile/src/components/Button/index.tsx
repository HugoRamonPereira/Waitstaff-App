import { Text } from '../Text';
import * as Styled from './styles';

interface ButtonProps {
  children: string;
  onPress: () => void;
  disabled?: boolean;
}

const Button = ({ children, onPress, disabled }: ButtonProps) => {
  return (
    <Styled.Container onPress={onPress} disabled={disabled}>
      <Text weight='600' color='#fff'>{children}</Text>
    </Styled.Container>
  );
};

export default Button;