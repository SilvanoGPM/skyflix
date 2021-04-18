import styled from 'styled-components';

export const setbackMargin = '150px';

export const Lists = styled.section`
  margin-top: -${setbackMargin};
`;

export const Loading = styled.div`
  align-items: center;
  bottom: 0;
  background-color: #000;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;
`;

export const Loader = styled.img`
  width: 50%;
  height: 50%;
  object-fit: cover;
`;
