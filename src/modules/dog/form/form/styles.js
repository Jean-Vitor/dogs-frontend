import styled from 'styled-components';

export const FormStyle = styled.div`
  form {
    height: 500px;
    width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  form .form-group {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  

  form label {
    font-size: 1.4rem;
    margin-bottom: .5rem;
  }

  form input[type=text],
  form input[type=number],
  textarea,
  button {
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  form button {
    background-color: #04AA6D;
    color: white;
    cursor: pointer;
  }

  .Form-error {
    color: red;
  }

  .Form-error::first-letter {
    text-transform: uppercase;
  }

`;
