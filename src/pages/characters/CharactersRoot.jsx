import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';

import { getCharactersQuery } from '../../gql/queries';
import CharactersList from './CharactersList';

function CharactersRoot(props) {
  const { charactersFilters } = props;
  const CHARACTERS = getCharactersQuery(charactersFilters);
  const { data, loading, error } = useQuery(CHARACTERS);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    if (loading === false && data) {
      setCharacters(data.characters.results);
    }
  }, [loading, data, error]);

  return <CharactersList charactersData={characters} error={error} loading={loading} />;
}

CharactersRoot.propTypes = {
  charactersFilters: PropTypes.object,
};

export default CharactersRoot;
