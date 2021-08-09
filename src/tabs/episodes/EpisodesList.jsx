import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import EpisodeItem from './EpisodeItem';

const EpisodesList = (props) => {
  const { episodesData } = props;
  let episodes = [];

  if (episodesData.length > 0) {
    episodes = episodesData.map((charData) => {
      const { id, name, episode } = charData;
      const airDate = charData.air_date;
      return (
        <Grid item key={id} xs={3}>
          <EpisodeItem id={id} name={name} airDate={airDate} episode={episode} />
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
};

export default EpisodesList;
