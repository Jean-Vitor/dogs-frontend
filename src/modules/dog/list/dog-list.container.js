import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getAllDogsService, deleteDogService } from '../../../services/api';
import DogListComponent from './dog-list.component';

import ListContext from './context';
import { Creators as modalActions } from '../../../redux/modal/modal-actions-reducers';

const DogListContainer = () => {
  const [dogs, setDogs] = useState([]);
  const dispatch = useDispatch();
  const { openModal, closeModal } = modalActions;
  const { t } = useTranslation();

  const loadList = async () => {
    const { data } = await getAllDogsService();
    setDogs(data);
  };

  const deleteDog = async (id) => {
    await deleteDogService(id);
    await loadList();
    dispatch(closeModal());
  };

  const openDeleteDialog = (id) => {
    dispatch(openModal(
      {
        open: true,
        title: t('modal.delete.title'),
        message: t('modal.delete.text'),
        idToDelete: id,
        deleteDog,
      },
      'DELETE_DIALOG',
    ));
  };

  useEffect(() => {
    loadList();
  }, []);

  return (
    <ListContext.Provider value={{ dogs, openDeleteDialog }}>
      <DogListComponent />
    </ListContext.Provider>
  );
};

export default DogListContainer;
