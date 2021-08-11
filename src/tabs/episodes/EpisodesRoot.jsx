import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import { Container } from '@material-ui/core';

import { getEpisodesQuery } from '../../gql/queries';
import { ListGrid, ControlledPagination } from '../common';
import tabEnums from '../common/tabEnums';

function EpisodesRoot(props) {
  const { episodesFilters, handlePageChange } = props;
  const EPISODES = getEpisodesQuery(episodesFilters);
  const { data, loading, error } = useQuery(EPISODES);
  const [episodes, setEpisodes] = useState([]);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    if (loading === false && data) {
      setEpisodes(data.episodes.results);
      setPageCount(data.episodes.info.pages);
    }
  }, [loading, data, error]);

  return (
    <Container>
      <ListGrid tab={tabEnums.EPISODES} episodesData={episodes} error={error} loading={loading} />
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
