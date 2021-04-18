import React from 'react';
import PropTypes from 'prop-types';

import {
  Image,
  List,
  ListContainer,
  ListItem,
  Row,
  Title
} from './styles';

const MovieRow = ({ title, items }) => (
  <Row>
    <Title>{title}</Title>
    <ListContainer>
      <List>
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

MovieRow.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.shape({
    results: PropTypes.array.isRequired
  }).isRequired,
};

export default MovieRow;
