import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { object } from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Container, StyleTable, Title } from './dog-list.style';

import ListContext from './context';
import Form from '../form/form';

const DogListComponent = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Title>{t('dog-list')}</Title>
      <Table />
    </Container>
  );
};

const Table = () => {
  const { dogs } = useContext(ListContext);
  return (
    <StyleTable>
      <table>
        <TableHead />
        <tbody>
          {dogs.map((dog) => <TableContent dog={dog} key={dog._id} />)}
        </tbody>
      </table>
    </StyleTable>
  );
};

const TableContent = ({ dog }) => {
  const { openDeleteDialog } = useContext(ListContext);
  return (
    <tr>
      <td>{dog._id}</td>
      <td>{dog.name}</td>
      <td>{dog.breed}</td>
      <td>{dog.color}</td>
      <td>{dog.age}</td>
      <td>
        <Link to={`/edit/${dog._id}`} className="edit">
          <FontAwesomeIcon icon={faEdit} />
        </Link>

        <button onClick={() => openDeleteDialog(dog._id)} type="button" className="delete">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
};

const TableHead = () => {
  const { t } = useTranslation();
  return (
    <thead>
      <tr>
        <th>ID</th>
        <th>{ t('fields.name') }</th>
        <th>{ t('fields.breed') }</th>
        <th>{ t('fields.color') }</th>
        <th>{ t('fields.age') }</th>
        <th colSpan="2">{ t('fields.select') }</th>
      </tr>
    </thead>
  );
};

TableContent.propTypes = {
  dog: object.isRequired,
};

Form.defaultProps = {
  dog: {},
};

export default DogListComponent;
