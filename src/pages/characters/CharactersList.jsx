import PropTypes from 'prop-types';
import { Grid, CircularProgress, Typography, Box } from '@material-ui/core';
import CharacterItem from './CharacterItem';

const CharactersList = (props) => {
  const { charactersData, error, loading } = props;
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

  let characters = [];

  if (charactersData.length > 0) {
    characters = charactersData.map((charData) => {
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
        {characters}
      </Grid>
    </>
  );
};

CharactersList.propTypes = {
  charactersData: PropTypes.array,
  error: PropTypes.object,
  loading: PropTypes.bool,
};

export default CharactersList;
