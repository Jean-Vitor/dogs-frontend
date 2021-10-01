import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars, faTimes, faHome, faDog,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { func } from 'prop-types';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

import {
  NavBar,
  DrawerBars,
  DrawerToggle,
  DrawerActive,
  Drawer,
  DrawerItem,
  DrawerMenuItems,
  LanguageMenu,
  LanguageSelector,
  LanguageOption, LanguageSelected,
} from './styles';

const DrawerComponent = () => {
  const [drawer, setDrawer] = useState(false);
  const getCurrentLng = () => i18next.language || window.localStorage.i18nextLng || 'br';
  const getCurrentFlag = () => {
    const lang = getCurrentLng();
    switch (lang) {
      case 'pt-BR':
        return 'br';
      case 'en-US':
        return 'eua';
      default:
        return 'br';
    }
  };
  const [flag, setFlag] = useState(getCurrentFlag());

  const showDrawer = () => setDrawer(!drawer);

  async function handleChange(language, selectedFlag) {
    await i18next.changeLanguage(language);
    setFlag(selectedFlag);
  }

  return (
    <>
      <NavBar>
        <DrawerBars to="#">
          <FontAwesomeIcon icon={faBars} onClick={showDrawer} className="icon" />
        </DrawerBars>
        <LanguageMenu>
          <LanguageSelected flag={flag} />
          {/* eslint-disable-next-line react/jsx-no-bind */}
          <LanguageSelector onChange={handleChange}>
            <li>
              <LanguageOption value="pt-BR" flag="br" onClick={() => handleChange('pt-BR', 'br')}>PT-BR</LanguageOption>
            </li>
            <li>
              <LanguageOption value="en-US" flag="eua" onClick={() => handleChange('en-US', 'eua')}>EN-US</LanguageOption>
            </li>
          </LanguageSelector>
        </LanguageMenu>
      </NavBar>

      {drawer
        ? (
          <DrawerActive>
            <DrawerBody showDrawer={showDrawer} />
          </DrawerActive>
        )
        : (
          <Drawer>
            <DrawerBody showDrawer={showDrawer} />
          </Drawer>
        )}
    </>
  );
};

const DrawerBody = ({ showDrawer }) => {
  const { t } = useTranslation();
  return (
    <DrawerMenuItems onClick={showDrawer}>
      <DrawerToggle>
        <DrawerBars to="#">
          <FontAwesomeIcon icon={faTimes} className="icon" />
        </DrawerBars>
      </DrawerToggle>
      <DrawerItem>
        <Link to="/">
          <FontAwesomeIcon icon={faHome} onClick={showDrawer} />
          <span>{t('dog-list')}</span>
        </Link>
      </DrawerItem>
      <DrawerItem>
        <Link to="/add">
          <FontAwesomeIcon icon={faDog} onClick={showDrawer} />
          <span>{t('add-dog')}</span>
        </Link>
      </DrawerItem>
    </DrawerMenuItems>
  );
};

DrawerBody.propTypes = {
  showDrawer: func.isRequired,
};

export default DrawerComponent;
