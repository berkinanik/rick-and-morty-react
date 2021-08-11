import PropTypes from 'prop-types';
import { gql } from '@apollo/client';

const getCharactersQuery = (filters) => {
  const { page, searchVal, gender, status } = filters;
  const filterBool = searchVal.length > 0 || gender.length > 0 || status.length > 0;
  let queryText = `page: ${page}`;
  const filterText = filterBool
    ? `, filter:{${searchVal.length > 0 ? `name: "${searchVal}",` : ''} ${
        gender.length > 0 ? `gender: "${gender}",` : ''
      }${status.length > 0 ? `status: "${status}"` : ''}}`
    : '';
  queryText = filterText.length > 0 ? queryText + filterText : queryText;
  return gql`
    query {
      characters(${queryText}) {
        info {
          count
          pages
          next
          prev
        }
        results {
          id
          name
          gender
          status
          image
        }
      }
    }
  `;
};

getCharactersQuery.propTypes = {
  filters: PropTypes.object.isRequired,
};

const getEpisodesQuery = (filters) => {
  const { page, searchVal, season } = filters;
  const seasEpisReg = new RegExp('(^s|^S)[0-9]($|[0-9]($|(e|E)($|[0-9]($|[0-9]$))))');
  let searchText = searchVal;
  let episodeText = season.length > 0 ? `s0${season.charAt(season.length - 1)}` : '';
  if (seasEpisReg.test(searchVal)) {
    searchText = '';
    episodeText = searchVal;
  }
  const filterBool = searchText.length > 0 || season.length > 0 || episodeText.length > 0;
  let queryText = `page: ${page}`;
  const filterText = filterBool
    ? `, filter:{${searchText.length > 0 ? `name: "${searchText}",` : ''}${
        episodeText.length > 0 ? `episode: "${episodeText}"` : ''
      }}`
    : '';
  queryText = filterText.length > 0 ? queryText + filterText : queryText;
  return gql`
    query {
      episodes(${queryText}) {
        info {
          count
          pages
          next
          prev
        }
        results {
          id
          name
          air_date
          episode
        }
      }
    }
  `;
};

getEpisodesQuery.propTypes = {
  filters: PropTypes.object.isRequired,
};

export { getCharactersQuery, getEpisodesQuery };
