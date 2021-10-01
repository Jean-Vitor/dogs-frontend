import React from 'react';
import { func, object } from 'prop-types';

import * as yup from 'yup';
import {
  Formik, Form as FormikForm, Field, ErrorMessage,
} from 'formik';
import { useTranslation } from 'react-i18next';
import { FormStyle } from './styles';

const Form = ({ dog, onSubmit }) => {
  const { t } = useTranslation();

  const validations = yup.object().shape({
    name: yup.string().required(t('yup.required.name')),
    breed: yup.string().required(t('yup.required.breed')),
    color: yup.string().required(t('yup.required.color')),
    age: yup.number().required(t('yup.required.age')).integer(t('yup.number.integer')).positive(t('yup.number.positive')),
  });

  const initialValues = {
    name: (dog?.name || ''),
    breed: (dog?.breed || ''),
    color: (dog?.color || ''),
    age: (dog?.age || ''),
  };

  return (
    <FormStyle>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validations}
      >
        <FormikForm>
          <div className="form-group">
            <label>{t('fields.name')}</label>
            <Field type="text" name="name" id="name" />
            <ErrorMessage className="Form-error" component="span" name="name" />
          </div>
          <div className="form-group">
            <label>{t('fields.breed')}</label>
            <Field type="text" name="breed" id="breed" />
            <ErrorMessage className="Form-error" component="span" name="breed" />
          </div>
          <div className="form-group">
            <label>{t('fields.color')}</label>
            <Field type="text" name="color" id="color" />
            <ErrorMessage className="Form-error" component="span" name="color" />
          </div>
          <div className="form-group">
            <label>{t('fields.age')}</label>
            <Field type="text" name="age" id="age" />
            <ErrorMessage className="Form-error" component="span" name="age" />
          </div>

          <button type="submit">{t('fields.save')}</button>
        </FormikForm>
      </Formik>
    </FormStyle>
  );
};

Form.propTypes = {
  onSubmit: func.isRequired,
  dog: object,
};

Form.defaultProps = {
  dog: {},
};

export default Form;
