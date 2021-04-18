import styled from 'styled-components';

const leftDislocation = '30px';

export const Row = styled.div`
  margin-bottom: 30px;
`;

export const Title = styled.h2`
  margin: 0 0 0 ${leftDislocation};
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  width: 9999px;
`;

export const ListContainer = styled.div`
  overflow-x: hidden;
  padding-left: ${leftDislocation};
`;

export const ListItem = styled.li`
  cursor: pointer;
  display: inline-block;
  width: 150px;
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
