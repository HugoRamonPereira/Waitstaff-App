import { Modal, TouchableOpacity, Platform } from 'react-native';
import { Text } from '../Text';
import * as Styled from './styles';
import { Close } from '../Icons/Close';
import Button from '../Button';
import { useState } from 'react';

type TableModalProps = {
  visible: boolean;
  onClose: () => void;
  onSave: (table: string) => void;
}

const TableModal = ({ visible, onClose, onSave }: TableModalProps) => {
  const [table, setTable] = useState('');

  const handleSave = () => {
    onSave(table);
    onClose();
    setTable('');
  };

  return (
    <Modal
      transparent
      visible={visible}
      animationType='fade'
    >
      <Styled.Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
        <Styled.ModalBody>
          <Styled.ModalHeader>
            <Text weight='700'>Inform your table</Text>
            <TouchableOpacity onPress={onClose}>
              <Close color='#666' />
            </TouchableOpacity>
          </Styled.ModalHeader>
          <Styled.ModalForm>
            <Styled.ModalInput
              placeholder='Number of the table'
              placeholderTextColor='#666'
              keyboardType='number-pad'
              // onChangeText={value => setTable(value)}
              // The code above gets the value of the input and adds to the state setTable.
              // We can use the shorthand below, since we are creating a value and passing this same value to the state updating function
              onChangeText={setTable}
            />
            <Button
              onPress={handleSave}
              disabled={table.length === 0}
            >
              Save
            </Button>
          </Styled.ModalForm>
        </Styled.ModalBody>
      </Styled.Overlay>
    </Modal>
  );
};

export default TableModal;