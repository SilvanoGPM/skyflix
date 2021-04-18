import React, { useEffect, useState } from 'react';

import api from 'services/api';
import GlobalStyle from './globalStyles';
import Header from 'components/Header';
import MovieRow from 'components/MovieRow';
import FeaturedMovie from 'components/FeaturedMovie';
import { Lists } from './styles';

const App = () => {
  const [homeList, setHomeList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      const homeList = await api.getHomeList();

      const [originals] = homeList.filter(item => item.slug === 'originals');

      const randomIndex = Math.floor(Math.random() * (originals.items.results.length - 1));
      const randomItem = originals.items.results[randomIndex];
      const randomInfo = await api.getMovieInfo(randomItem.id, 'tv');

      setHomeList(homeList);
      setFeaturedData(randomInfo);
    }

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      setIsScrolled(window.scrollY > 10);
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <>
      <GlobalStyle />

      <Header black={isScrolled} />

      {Boolean(featuredData) && (
        <FeaturedMovie item={featuredData} />
      )}

      {Boolean(homeList.length) && (
        <Lists>
          {homeList.map((item) => (
            <MovieRow
              key={item.slug}
              {...item}
            />
          ))}
        </Lists>
      )}

    </>
  );
}

export default App;
