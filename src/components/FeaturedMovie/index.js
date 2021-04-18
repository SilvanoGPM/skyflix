import React from 'react';
import PropTypes from 'prop-types';

import {
  Buttons,
  ButtonMyList,
  ButtonWatch,
  Container,
  Description,
  Genres,
  Info,
  Inline,
  Name,
  Points,
  HorizontalGradient,
  VerticalGradient,
} from './styles';

const FeaturedMovie = ({
  item: {
    backdrop_path,
    first_air_date,
    genres,
    id,
    number_of_seasons,
    original_name,
    overview,
    vote_average,
  }
}) => {
  const imageUrl = `https://image.tmdb.org/t/p/original${backdrop_path}`;
  const seasons = `${number_of_seasons} temporada${number_of_seasons !== 1 ? 's' : ''}`;
  const date = new Date(first_air_date);
  const genresName = genres.map(genre => genre.name);

  return (
    <Container imageUrl={imageUrl}>
      <VerticalGradient>
        <HorizontalGradient>
          <Name>{original_name}</Name>
          <Info>
            <Points>{vote_average} pontos</Points>
            <Inline>{date.getFullYear()}</Inline>
            <Inline>{seasons}</Inline>
            <Description>{overview}</Description>

            <Buttons>
              <ButtonWatch href={`/watch/${id}`}>
                ► Assistir
              </ButtonWatch>

              <ButtonMyList href={`/list/add/${id}`}>
                + Minha Lista
              </ButtonMyList>
            </Buttons>

            <Genres>
              <strong>Gêneros:</strong> {genresName.join(', ')}.
            </Genres>
          </Info>
        </HorizontalGradient>
      </VerticalGradient>
    </Container>
  );
};

FeaturedMovie.propTypes = {
  item: PropTypes.shape({
    backdrop_path: PropTypes.string,
    number_of_seasons: PropTypes.number,
    original_name: PropTypes.string,
    overview: PropTypes.string,
    vote_average: PropTypes.number,
  }).isRequired,
};

export default FeaturedMovie;
