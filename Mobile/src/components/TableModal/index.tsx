import { Modal, TouchableOpacity, Platform } from 'react-native';
import { Text } from '../Text';
import * as Styled from './styles';
import { Close } from '../Icons/Close';
import Button from '../Button';
import { useState } from 'react';

interface TableModalProps {
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
            <Text weight='600'>Inform your table</Text>
            <TouchableOpacity onPress={onClose}>
              <Close color='#666' />
            </TouchableOpacity>
          </Styled.ModalHeader>
          <Styled.ModalForm>
            <Styled.ModalInput
              placeholder='Number of the table'
              placeholderTextColor='#666'
              keyboardType='number-pad'
              onChangeText={value => setTable(value)}
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