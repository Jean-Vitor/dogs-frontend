import React, { useContext } from 'react';
import Form from '../form';
import { Title, Container } from './dog-create.style';
import CreateContext from './dog-create.context';

const CreateDogComponent = () => {
  const { t, onSubmit } = useContext(CreateContext);
  return (
    <Container>
      <Title>{t('add-dog')}</Title>
      <Form onSubmit={onSubmit} />
    </Container>
  );
};

export default CreateDogComponent;
