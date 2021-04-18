import React from 'react';
import PropTypes from 'prop-types';

import logo from 'assets/skyflix.png';
import {
  Container,
  Image,
  ImageUser,
  LogoContainer,
  User
} from './styles';

const Header = ({ black }) => (
  <Container className={black ? 'black' : ''}>
    <LogoContainer>
      <a href='/'>
        <Image src={logo} />
      </a>
    </LogoContainer>

    <User>
      <a href='/'>
        <ImageUser
          src='https://avatars.githubusercontent.com/u/59753526?v=4'
          alt='Usuário'
        />
      </a>
    </User>
  </Container>
);

Header.propTypes = {
  black: PropTypes.bool,
};

export default Header;
