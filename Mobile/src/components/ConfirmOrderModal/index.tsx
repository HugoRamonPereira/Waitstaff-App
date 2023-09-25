import { Modal } from 'react-native';
import * as Styled from './styles';
import { CheckCircle } from '../Icons/CheckCircle';
import { Text } from '../Text';

type ConfirmOderModalProps = {
  visible: boolean;
  onOk(): void;
}

const ConfirmOrderModal = ({ visible, onOk }: ConfirmOderModalProps) => {
  return (
    <Modal
      visible={visible}
      animationType='fade'
    >
      <Styled.Container>
        <CheckCircle />
        <Text
          size={20}
          weight='700'
          color='#FFFFFF'
        >
          Order confirmed
        </Text>
        <Text
          color='#FFFFFF'
          opacity={0.9}
        >
          The order has already been queued for production
        </Text>

        <Styled.OkButton
          onPress={onOk}
        >
          <Text
            color='#D73035'
            weight='700'
          >
            OK
          </Text>
        </Styled.OkButton>
      </Styled.Container>
    </Modal>
  );
};

export default ConfirmOrderModal;