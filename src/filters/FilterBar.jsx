import PropTypes from 'prop-types';
import { Container, Box, Stack } from '@material-ui/core';

import DropdownSelect from './DropdownSelect';

const FilterBar = (props) => {
  const {
    tabValue,
    genderValue,
    statusValue,
    handleGenderChange,
    handleStatusChange,
    seasonValue,
    handleSeasonChange,
  } = props;

  const filterValues =
    tabValue === 0
      ? [
          {
            fieldName: 'Gender',
            value: genderValue,
            handleChange: handleGenderChange,
            options: ['Male', 'Female', 'Genderless', 'Unknown'],
          },
          {
            fieldName: 'Status',
            value: statusValue,
            handleChange: handleStatusChange,
            options: ['Alive', 'Dead', 'Unknown'],
          },
        ]
      : [
          {
            fieldName: 'Season',
            value: seasonValue,
            handleChange: handleSeasonChange,
            options: [1, 2, 3, 4].map((season) => `Season ${season}`),
          },
        ];

  const filters = filterValues.map((filter) => (
    <DropdownSelect
      key={filter.fieldName}
      fieldName={filter.fieldName}
      value={filter.value}
      handleChange={filter.handleChange}
      options={filter.options}
    />
  ));

  return (
    <Container>
      <Box sx={{ my: 2 }}>
        <Stack direction="row">{filters}</Stack>
      </Box>
    </Container>
  );
};

FilterBar.propTypes = {
  tabValue: PropTypes.number.isRequired,
  genderValue: PropTypes.string.isRequired,
  statusValue: PropTypes.string.isRequired,
  seasonValue: PropTypes.string.isRequired,
  handleGenderChange: PropTypes.func.isRequired,
  handleStatusChange: PropTypes.func.isRequired,
  handleSeasonChange: PropTypes.func.isRequired,
};

export default FilterBar;
