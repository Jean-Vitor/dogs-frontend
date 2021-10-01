import React from 'react';
import { useDispatch } from 'react-redux';
import { string } from 'prop-types';
import { useTranslation } from 'react-i18next';
import { ModalFooter, DeleteIcon } from './style';
import { Modal, Button } from '../Modal/style';
import { Creators as ModalActions } from '../../../redux/modal/modal-actions-reducers';

const DeleteDialog = ({
  title, message,
}) => {
  const dispatch = useDispatch();
  const { closeModal } = ModalActions;
  const { t } = useTranslation();

  return (
    <Modal>
      <DeleteIcon>
        <svg viewBox="0 0 48 48">
          <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" />
        </svg>
      </DeleteIcon>
      <h1>{title}</h1>
      <p>{message}</p>
      <ModalFooter>
        <Button onClick={() => dispatch(closeModal())}>{t('modal.delete.cancel')}</Button>
      </ModalFooter>
    </Modal>
  );
};

DeleteDialog.propTypes = {
  title: string.isRequired,
  message: string.isRequired,
};

export default DeleteDialog;
