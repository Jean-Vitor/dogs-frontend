import styled from 'styled-components';
import { ModalIcon } from '../Modal/style';

export const ModalFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
`;

export const ErrorIcon = styled(ModalIcon)`
  box-shadow: 0 0 0 2px #FF2400;
  svg {
    fill: #FF2400;
  }
`;
