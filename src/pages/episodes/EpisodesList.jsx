import PropTypes from 'prop-types';
import { Grid, CircularProgress, Typography, Box } from '@material-ui/core';
import EpisodeItem from './EpisodeItem';

const EpisodesList = (props) => {
  const { episodesData, error, loading } = props;
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

  let episodes = [];

  if (episodesData.length > 0) {
    episodes = episodesData.map((charData) => {
      const { id, name, episode } = charData;
      const airDate = charData.air_date;
      return (
        <Grid item key={id} xs={3}>
          <EpisodeItem id={parseInt(id)} name={name} airDate={airDate} episode={episode} />
        </Grid>
      );
    });
  }

  return (
    <>
      <Grid container spacing={1}>
        {episodes}
      </Grid>
    </>
  );
};

EpisodesList.propTypes = {
  episodesData: PropTypes.array,
  error: PropTypes.object,
  loading: PropTypes.bool,
};

export default EpisodesList;
