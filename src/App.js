import React, { useEffect, useState } from 'react';

import api from 'services/api';
import MovieRow from 'components/MovieRow';
import GlobalStyle from './globalStyles';

const App = () => {
  const [homeList, setHomeList] = useState([]);

  useEffect(() => {
    const loadHomeList = async () => {
      const homeList = await api.getHomeList();
      setHomeList(homeList);
    }

    loadHomeList();
  }, []);

  return (
    <div>
      <GlobalStyle />

      <section>
        {homeList.map((item) => (
          <MovieRow
            key={item.slug}
            title={item.title}
            items={item.items}
          />
        ))}
      </section>

    </div>
  );
}

export default App;
