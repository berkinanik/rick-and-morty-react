import PropTypes from 'prop-types';
import { Grid, CircularProgress, Typography, Box } from '@material-ui/core';

import EpisodeItem from '../episodes/EpisodeItem';
import CharacterItem from '../characters/CharacterItem';
import tabEnums from './tabEnums';

const ListGrid = (props) => {
  const { tab, charactersData, episodesData, error, loading } = props;
  if (loading) {
    return (
      <Box
        sx={{
          height: 120,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    return (
      <Box
        sx={{
          height: 120,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4">{error.message.slice(5)}</Typography>
      </Box>
    );
  }

  let items = [];

  if (tab === tabEnums.EPISODES && episodesData.length > 0) {
    items = episodesData.map((charData) => {
      const { id, name, episode } = charData;
      const airDate = charData.air_date;
      return (
        <Grid item key={id} xs={3}>
          <EpisodeItem id={parseInt(id)} name={name} airDate={airDate} episode={episode} />
        </Grid>
      );
    });
  } else if (tab === tabEnums.CHARACTERS && charactersData.length > 0) {
    items = charactersData.map((charData) => {
      const { id, name, gender, status, image } = charData;
      return (
        <Grid item key={id} xs={3}>
          <CharacterItem
            id={parseInt(id)}
            name={name}
            gender={gender}
            status={status}
            image={image}
          />
        </Grid>
      );
    });
  }

  return (
    <>
      <Grid container spacing={1}>
        {items}
      </Grid>
    </>
  );
};

ListGrid.propTypes = {
  tab: PropTypes.oneOf(tabEnums.CHARACTERS, tabEnums.EPISODES).isRequired,
  episodesData: PropTypes.array.isRequired,
  charactersData: PropTypes.array.isRequired,
  error: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default ListGrid;
