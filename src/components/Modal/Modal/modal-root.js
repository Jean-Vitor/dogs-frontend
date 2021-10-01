import React from 'react';
import { useSelector } from 'react-redux';
import SuccessModal from '../Success';
import DeleteDialog from '../DeleteDialog';

const MODAL_COMPONENTS = {
  SUCCESS_MODAL: SuccessModal,
  DELETE_DIALOG: DeleteDialog,
};

// eslint-disable-next-line react/prop-types
const ModalRoot = () => {
  const { modalType, modalProps } = useSelector((state) => state.modal);

  if (!modalType) {
    return null;
  }

  const SpecificModal = MODAL_COMPONENTS[modalType];

  return <SpecificModal {...modalProps} />;
};

export default ModalRoot;
