import { useState } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

function DropdownSelect(props) {
  const { fieldName, value, handleChange, options } = props;

  const useStyles = makeStyles(() => ({
    formControl: {
      marginRight: '10px',
      display: 'flex',
      flexDirection: 'col',
      alignContent: 'start',
      minWidth: 160,
    },
  }));

  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const menuItems = options.map((option) => (
    <MenuItem key={option} value={option}>
      {option}
    </MenuItem>
  ));

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">{fieldName}</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={value}
          onChange={handleChange}
        >
          <MenuItem value="" />
          {menuItems}
        </Select>
      </FormControl>
    </div>
  );
}

DropdownSelect.propTypes = {
  fieldName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default DropdownSelect;
