import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import PATH_BR_FLAG from '../../assets/br.svg';
import PATH_EUA_FLAG from '../../assets/eua.svg';

const BR_FLAG = css`
  background-image: url(${PATH_BR_FLAG});
`;

const EUA_FLAG = css`
  background-image: url(${PATH_EUA_FLAG});
`;

export const NavBar = styled.div`
  background-color: #04AA6D;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

export const DrawerBars = styled(Link)`
  margin-left: 3rem;
  font-size: 2rem;
  background: none;

  .icon {
    color: whitesmoke;
  }

`;

export const Drawer = styled.nav`
  background-color: #04AA6D;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: -100%;
  transition: 850ms 
`;

export const DrawerToggle = styled.li`
  background-color: #04AA6D;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const DrawerActive = styled(Drawer)`
  left: 0;
  transition: all 0.5s ease;
`;

export const DrawerItem = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 8px 0px 8px 16px;
  list-style: none;
  height: 60px;
  
  a {
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
  }

  span {
    margin-left: 16px;
  }
`;

export const DrawerMenuItems = styled.ul`
  width: 100%;
`;

export const LanguageMenu = styled.div`
  width: 32px;
  text-align: center;
  font-weight: bold;
  margin-right: 3rem;
  position: relative; 
  
  &:hover ul {
    display: block;
  }
`;

export const LanguageSelector = styled.ul`
  display: none;
  background-color: #fff;
  border: 1px solid #f8f8f8;
  position: absolute;
  width: 125px;
  border-radius: 5px;
  box-shadow: 0px 1px 10px rgba(0,0,0,0.2);
  right: 0;
  
  li {
    list-style: none;
    text-align: left;
    display: flex;
    justify-content: space-between;
  }
`;

export const LanguageSelected = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  
  &:before {
    content: '';
    display: inline-block;
    width: 32px;
    height: 32px;
    background-size: contain;
    background-repeat: no-repeat;
    ${({ flag }) => flag === 'br' && BR_FLAG}
    ${({ flag }) => flag === 'eua' && EUA_FLAG}
  }
  
  
`;

export const LanguageOption = styled.a`
  text-decoration: none;
  width: 300px;
  padding: 5px 10px;
  display: block;
  cursor: pointer;
    
  &:before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-right: 10px;
    background-repeat: space;
    ${({ flag }) => flag === 'br' && BR_FLAG}
    ${({ flag }) => flag === 'eua' && EUA_FLAG}
  }
  
`;
