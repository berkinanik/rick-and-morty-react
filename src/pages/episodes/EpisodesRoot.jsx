import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';

import { getEpisodesQuery } from '../../gql/queries';
import EpisodesList from './EpisodesList';

function EpisodesRoot(props) {
  const { episodesFilters } = props;
  const EPISODES = getEpisodesQuery(episodesFilters);
  const { data, loading, error } = useQuery(EPISODES);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    if (loading === false && data) {
      setEpisodes(data.episodes.results);
    }
  }, [loading, data, error]);

  return <EpisodesList episodesData={episodes} error={error} loading={loading} />;
}

EpisodesRoot.propTypes = {
  episodesFilters: PropTypes.object,
};

export default EpisodesRoot;
