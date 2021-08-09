import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import CharacterItem from './CharacterItem';

const CharactersList = (props) => {
  const { charactersData } = props;
  let characters = [];

  if (charactersData.length > 0) {
    characters = charactersData.map((charData) => {
      const { id, name, gender, status, image } = charData;
      return (
        <Grid item key={id} xs={3}>
          <CharacterItem id={id} name={name} gender={gender} status={status} image={image} />
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
};

export default CharactersList;
