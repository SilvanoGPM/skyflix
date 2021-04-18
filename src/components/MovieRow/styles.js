import styled from 'styled-components';

export const leftDislocation = 30;
export const listItemWidth = 150;

export const Title = styled.h2`
  margin: 0 0 0 ${leftDislocation}px;
`;

export const ButtonNavigate = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  display: flex;
  height: 225px;
  justify-content: center;
  opacity: 0;
  position: absolute;
  transition: .2s ease-in;
  width: 40px;
  z-index: 99;
`;

export const ButtonNext = styled(ButtonNavigate)`
  right: 0;
`;

export const ButtonBefore = styled(ButtonNavigate)`
  left: 0;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  transition: .25s ease-in-out;
`;

export const ListContainer = styled.div`
  overflow-x: hidden;
  padding-left: ${leftDislocation}px;
`;

export const ListItem = styled.li`
  cursor: pointer;
  display: inline-block;
  width: ${listItemWidth}px;
`;

export const Image = styled.img`
  transform: scale(0.9);
  transition: .35s ease;
  width: 100%;

  &:hover {
    transform: scale(1);
    transition: .25s ease-in-out;
  }
`;

export const Row = styled.div`
  margin-bottom: 30px;

  &:hover {
    ${ButtonNext},
    ${ButtonBefore} {
      opacity: 1;
    }
  }
`;
