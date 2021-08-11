import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import { Container } from '@material-ui/core';

import { getCharactersQuery } from '../../gql/queries';
import { ListGrid, ControlledPagination } from '../common';
import tabEnums from '../common/tabEnums';

function CharactersRoot(props) {
  const { charactersFilters, handlePageChange } = props;
  const CHARACTERS = getCharactersQuery(charactersFilters);
  const { data, loading, error } = useQuery(CHARACTERS);
  const [characters, setCharacters] = useState([]);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    if (loading === false && data) {
      setCharacters(data.characters.results);
      setPageCount(data.characters.info.pages);
    }
  }, [loading, data, error]);

  return (
    <Container>
      <ListGrid
        tab={tabEnums.CHARACTERS}
        charactersData={characters}
        error={error}
        loading={loading}
      />
      <ControlledPagination
        pageChangeHandler={handlePageChange}
        page={charactersFilters.page}
        pageCount={pageCount}
      />
    </Container>
  );
}

CharactersRoot.propTypes = {
  charactersFilters: PropTypes.object.isRequired,
  handlePageChange: PropTypes.func.isRequired,
};

export default CharactersRoot;
