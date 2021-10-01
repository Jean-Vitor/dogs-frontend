import React, { useCallback, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { editDogService, getDogService } from '../../../../services/api';
import EditDogComponent from './dog-edit.component';

import { Creators as modalActions } from '../../../../redux/modal/modal-actions-reducers';
import EditContext from './dog-edit.context';

const EditDogContainer = () => {
  const [dog, setDog] = useState({});
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { openModal } = modalActions;
  const { t } = useTranslation();

  const openSuccessModal = () => {
    dispatch(openModal(
      {
        open: true,
        title: t('modal.success-edit.title'),
        message: t('modal.success-edit.text'),
      },
      'SUCCESS_MODAL',
    ));
  };

  // const openErrorModal = () => {
  //   dispatch(openModal(
  //     {
  //       open: true,
  //       title: t('modal.success-edit.title'),
  //       message: t('modal.success-edit.text'),
  //     },
  //     'ERROR_MODAL',
  //   ));
  // };

  const loadDog = useCallback(async () => {
    const { data } = await getDogService(id);
    setDog(data);
  }, [id]);

  useEffect(() => {
    loadDog();
  }, [loadDog]);

  const onSubmit = async (data) => {
    await editDogService(dog._id, data);
    openSuccessModal();
    history.push('/');
  };

  return (
    <EditContext.Provider value={{ dog, onSubmit }}>
      <EditDogComponent />
    </EditContext.Provider>
  );
};

export default EditDogContainer;
