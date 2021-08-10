import PropTypes from 'prop-types';

import { Box, Container } from '@material-ui/core';

import CharactersRoot from './characters';
import EpisodesRoot from './episodes';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const TabsRoot = (props) => {
  const { tabValue, charactersFilters, episodesFilters, handlePageChange } = props;
  return (
    <Container>
      <Box sx={{ my: 2 }}>
        <TabPanel value={tabValue} index={0}>
          <CharactersRoot
            charactersFilters={charactersFilters}
            handlePageChange={handlePageChange}
          />
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <EpisodesRoot episodesFilters={episodesFilters} handlePageChange={handlePageChange} />
        </TabPanel>
      </Box>
    </Container>
  );
};

TabsRoot.propTypes = {
  tabValue: PropTypes.number.isRequired,
  charactersFilters: PropTypes.object.isRequired,
  episodesFilters: PropTypes.object.isRequired,
  handlePageChange: PropTypes.func.isRequired,
};

export default TabsRoot;
