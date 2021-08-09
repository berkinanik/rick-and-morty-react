import { useState, useEffect } from 'react';
import EpisodesList from './EpisodesList';

function EpisodesRoot() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/episode/?page=1`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          throw data.error;
        }
        const { results } = data;
        setEpisodes(results);
      })
      .catch((err) => {
        console.log(err);
        if (err.toLowerCase().includes('nothing')) {
          setEpisodes([]);
        }
      });
  }, []);

  return <EpisodesList episodesData={episodes} />;
}

export default EpisodesRoot;
