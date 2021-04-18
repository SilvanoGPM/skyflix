import React, { useEffect, useState } from 'react';

import api from 'services/api';
import GlobalStyle from './globalStyles';
import MovieRow from 'components/MovieRow';
import FeaturedMovie from 'components/FeaturedMovie';
import { Lists } from './styles';

const App = () => {
  const [homeList, setHomeList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

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

  return (
    <div>
      <GlobalStyle />

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

    </div>
  );
}

export default App;
