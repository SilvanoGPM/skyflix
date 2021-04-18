import React, { useEffect, useState } from 'react';
import api from 'services/api';

const App = () => {
  const [homeList, setHomeList] = useState([]);

  useEffect(() => {
    const loadHomeList = async () => {
      const homeList = await api.getHomeList();
      setHomeList(homeList);
    }

    loadHomeList();
  }, []);

  homeList.forEach(items => {
    console.log(items);
  });

  return (
    <div>SkyFlix</div>
  );
}

export default App;
