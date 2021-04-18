import styled from 'styled-components';

export const headerHeight = '70px';

export const Container = styled.header`
  align-items: center;
  background: transparent;
  display: flex;
  justify-content: space-between;
  padding: 30px;
  position: fixed;
  height: ${headerHeight};
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
  transition: .5s ease-in;

  &.black {
    background-color: #141414;
    transition: .3s ease-in-out;
  }
`;

export const Image = styled.img`
  height: 100%;
`;

export const LogoContainer = styled.div`
  height: 35px;
`;

export const User = styled.div`
  height: 35px;
`;

export const ImageUser = styled(Image)`
  border-radius: 3px;
`;
