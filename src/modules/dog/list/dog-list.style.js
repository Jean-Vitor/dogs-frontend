import styled from 'styled-components';

export const Title = styled.h1`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const Container = styled.div`
  padding:  0 5%;
`;

export const StyleTable = styled.div`
  table {
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
  }

  table td,
  table th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  table tr:hover {
    background-color: #ddd;
  }

  table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #04AA6D;
    color: white;
  }
  
  table td:last-child {
    display: flex;
    justify-content: space-around;
  }
  
  .delete {
    border: none;
    background: none;
    cursor: pointer;
    color: darkred;
  }

  .edit {
    border: none;
    background: none;
    cursor: pointer;
    color: #9da314;
  }
`;
