import { createReducer, createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  openModal: ['modalProps', 'modalType'],
  closeModal: [],
});

const INITIAL_STATE = {
  modalType: null,
  modalProps: {
    open: false,
  },
};

// eslint-disable-next-line no-unused-vars
const openModal = (state = INITIAL_STATE, action) => ({
  modalProps: action.modalProps,
  modalType: action.modalType,
});

const closeModal = () => INITIAL_STATE;

const HANDLERS = {
  [Types.OPEN_MODAL]: openModal,
  [Types.CLOSE_MODAL]: closeModal,
};

export default createReducer(INITIAL_STATE, HANDLERS);
