import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

import {
  leftDislocation,
  listItemWidth,
  ButtonBefore,
  ButtonNext,
  Image,
  List,
  ListContainer,
  ListItem,
  Row,
  Title
} from './styles';

const MovieRow = ({ title, items }) => {
  const [scrollLength, setScrollLength] = useState(-400);

  const width = items.results.length * listItemWidth;

  const handleButtonNext = useCallback(() => {
    const nextLength = scrollLength - Math.round(window.innerWidth / 2);
    const difference = window.innerWidth - width;

    const length = difference > nextLength
      ? (difference - leftDislocation * 2)
      : nextLength;

    setScrollLength(length);
  }, [scrollLength, width]);

  const handleButtonBefore = useCallback(() => {
    const nextLength = scrollLength + Math.round(window.innerWidth / 2);
    const length = Math.min(nextLength, 0);
    setScrollLength(length);
  }, [scrollLength]);

  return (
    <Row>
      <Title>{title}</Title>

      <ButtonNext onClick={handleButtonNext}>
        <MdNavigateNext color='#fff' size={50} />
      </ButtonNext>

      <ButtonBefore onClick={handleButtonBefore}>
        <MdNavigateBefore color='#fff' size={50} />
      </ButtonBefore>

      <ListContainer>
        <List style={{
          marginLeft: scrollLength,
          width: width
        }}>
          {items.results.map((item) => (
            <ListItem key={item.id}>
              <Image
                src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                alt={item.original_title}
              />
            </ListItem>
          ))}
        </List>
      </ListContainer>
    </Row>
  );
}

MovieRow.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.shape({
    results: PropTypes.array.isRequired
  }).isRequired,
};

export default MovieRow;
