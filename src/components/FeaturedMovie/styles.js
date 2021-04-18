import styled from 'styled-components';

import { setbackMargin } from 'styles';

const infoMargin = '15px';

export const Container = styled.div`
  background-image: url(${props => props.imageUrl});
  background-position: center;
  background-size: cover;
  height: 100vh;
`;

export const Gradient = styled.div`
  height: inherit;
  width: inherit;
`;

export const VerticalGradient = styled(Gradient)`
  background: linear-gradient(to top, #111 10%, transparent 90%);
`;

export const HorizontalGradient = styled(Gradient)`
  background: linear-gradient(to right, #111 30%, transparent 70%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: ${setbackMargin};
  padding-left: 30px;
  padding-top: 70px;
`;

export const Name = styled.p`
  font-size: 60px;
  font-weight: bold;
  margin: 0;
`;

export const Info = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: ${infoMargin};
`;

export const Inline = styled.span`
  display: inline-block;
  margin-right: ${infoMargin};
`;

export const Points = styled(Inline)`
  color: #46d369;
`;

export const Description = styled.p`
  color: #999;
  font-size: 20px;
  font-weight: normal;
  margin-top: 15px;
  max-width: 40%;
`;

export const Buttons = styled.div`
  margin-top: ${infoMargin};
`;

export const Button = styled.a`
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  margin-right: 10px;
  opacity: 1;
  padding: 12px 25px;
  text-decoration: none;
  transition: .35s ease;

  &:hover {
    opacity: .7;
    transition: .25s ease-in-out;
  }
`;

export const ButtonWatch = styled(Button)`
  background-color: #fff;
  color: #000;
`;

export const ButtonMyList = styled(Button)`
  background-color: #333;
  color: #fff;
`;

export const Genres = styled.div`
  color: #999;
  font-size: 18px;
  font-weight: normal;
  margin-top: ${infoMargin};
`;
