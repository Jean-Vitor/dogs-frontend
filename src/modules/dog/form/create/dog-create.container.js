import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { addDogService } from '../../../../services/api';
import DogCreateComponent from './dog-create.component';

import { Creators as ModalActions } from '../../../../redux/modal/modal-actions-reducers';
import CreateContext from './dog-create.context';

const CreateDogContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { openModal } = ModalActions;
  const { t } = useTranslation();

  const openSuccessModal = () => {
    dispatch(openModal(
      {
        open: true,
        title: t('modal.success.title'),
        message: t('modal.success.text'),
      },
      'SUCCESS_MODAL',
    ));
  };

  const onSubmit = async (data) => {
    await addDogService(data);
    openSuccessModal();
    history.push('/');
  };

  return (
    <CreateContext.Provider value={{ onSubmit, t }}>
      <DogCreateComponent />
    </CreateContext.Provider>
  );
};

export default CreateDogContainer;
