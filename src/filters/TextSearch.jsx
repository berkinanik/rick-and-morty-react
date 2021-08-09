import PropTypes from 'prop-types';
import { Box, TextField } from '@material-ui/core';

export default function TextSearch(props) {
  const { value, handleChange, placeHolder } = props;
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-basic"
        label="Search"
        variant="standard"
        placeholder={placeHolder}
        value={value}
        onChange={handleChange}
      />
    </Box>
  );
}

TextSearch.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.string,
  placeHolder: PropTypes.string,
};
