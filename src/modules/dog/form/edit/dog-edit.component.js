import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Form from '../form';
import { Title, Container } from './dog-edit.style';
import EditContext from './dog-edit.context';

const EditDogComponent = () => {
  const { dog, onSubmit } = useContext(EditContext);
  const { t } = useTranslation();

  return (
    <Container>
      <Title>{t('edit-dog')}</Title>
      <Form onSubmit={onSubmit} dog={dog} />
    </Container>
  );
};

export default EditDogComponent;
