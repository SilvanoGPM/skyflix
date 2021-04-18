import styled from 'styled-components';

import { setbackMargin } from 'styles';
import { headerHeight } from 'components/Header/styles';

const infoMargin = '15px';
const mqMedium = '(max-width: 760px)';

export const Container = styled.div`
  background-image: url(${props => props.imageUrl});
  background-position: center;
  background-size: cover;
  height: 100vh;

  @media ${mqMedium} {
    height: 90vh;
  }
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
  padding-top: ${headerHeight};
`;

export const Name = styled.p`
  font-size: 60px;
  font-weight: bold;
  margin: 0;

  @media ${mqMedium} {
    font-size: 40px;
  }
`;

export const Info = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: ${infoMargin};

  @media ${mqMedium} {
    font-size: 16px;
  }
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
  height: 50%;
  max-height: 200px;
  margin-top: 15px;
  max-width: 40%;

  &::-webkit-scrollbar {
    width: none;
  }

  @media ${mqMedium} {
    font-size: 14px;
    margin-right: 30px;
    max-width: 100%;
  }
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

  @media ${mqMedium} {
    font-size: 16px;
    padding: 10px 20px;
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

  @media ${mqMedium} {
    font-size: 14px;
  }
`;
