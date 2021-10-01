import styled, { css } from 'styled-components';

export const Modal = styled.div`
  background-color: #ffffff;
  border: 1px solid #bebebe;
  border-radius: .5em;
  padding: 2em 3em;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  height: 300px;
  width: 400px;

  h1 {
    font-size: 1.5em;
    font-weight: bold;
  }

  p {
    color: #666;
  }
`;

export const ModalIcon = styled.div`
  width: 30px;
  height: 30px;
  margin: 0 auto;
  border-radius: 50%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 30px;
  padding: 8px 7px 6px 6px;
`;

const IS_DELETE_STYLE = css`background-color: #a3051b;
    border: none;
    box-shadow: none;
    &:hover {
      box-shadow: 0 0 0 2px #000 inset;
      color: #a3051b;
      background-color: transparent;
    }`;

export const Button = styled.button.attrs({ type: 'button' })`
  font-size: 1.25em;
  font-weight: bold;
  background-color: #000;
  border: none;
  padding: .5em 1em;
  color: #fff;
  box-shadow: 0 0 0 2px #000 inset;
  border-radius: .25em;
  cursor: pointer;
  transition: background .4s ease, color .4s ease;

  &:hover {
    box-shadow: 0 0 0 2px #000 inset;
    color: #000;
    background-color: transparent;
  }
  
  ${({ isDelete }) => isDelete && IS_DELETE_STYLE}
`;
