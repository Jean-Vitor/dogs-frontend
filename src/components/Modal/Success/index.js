import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { SucessIcon } from './style';
import { Modal, Button } from '../Modal/style';
import { Creators as ModalActions } from '../../../redux/modal/modal-actions-reducers';

// eslint-disable-next-line react/prop-types
const SuccessModal = ({ title, message }) => {
  const { closeModal } = ModalActions;
  const dispatch = useDispatch();
  const { t } = useTranslation();
  return (
    <Modal>
      <SucessIcon>
        <svg viewBox="0 0 32 32">
          <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z" />
        </svg>
      </SucessIcon>
      <h1>{title}</h1>
      <p>{message}</p>
      <Button className="btn" onClick={() => dispatch(closeModal())}>{t('modal.success.close')}</Button>
    </Modal>
  );
};

export default SuccessModal;
