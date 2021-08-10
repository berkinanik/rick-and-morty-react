import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';

import { Container } from '@material-ui/core';
import { getEpisodesQuery } from '../../gql/queries';
import { ListGrid, ControlledPagination } from '../common';

function EpisodesRoot(props) {
  const { episodesFilters, handlePageChange } = props;
  const EPISODES = getEpisodesQuery(episodesFilters);
  const { data, loading, error } = useQuery(EPISODES);
  const [episodes, setEpisodes] = useState([]);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    if (loading === false && data) {
      console.log(data);
      setPageCount(data.episodes.info.pages);
      setEpisodes(data.episodes.results);
    }
  }, [loading, data, error]);

  return (
    <Container>
      <ListGrid tab="episodes" episodesData={episodes} error={error} loading={loading} />
      <ControlledPagination
        pageChangeHandler={handlePageChange}
        page={episodesFilters.page}
        pageCount={pageCount}
      />
    </Container>
  );
}

EpisodesRoot.propTypes = {
  episodesFilters: PropTypes.object.isRequired,
  handlePageChange: PropTypes.func.isRequired,
};

export default EpisodesRoot;
