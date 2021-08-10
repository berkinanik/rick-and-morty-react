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

// TODO characters and episodes use similar approach in list components
// TODO for DRY coding common components might be implemented

const PagesRoot = (props) => {
  const { tabValue, charactersFilters, episodesFilters } = props;
  return (
    <Container>
      <Box sx={{ my: 2 }}>
        <TabPanel value={tabValue} index={0}>
          <CharactersRoot charactersFilters={charactersFilters} />
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <EpisodesRoot episodesFilters={episodesFilters} />
        </TabPanel>
      </Box>
    </Container>
  );
};

PagesRoot.propTypes = {
  tabValue: PropTypes.number,
  charactersFilters: PropTypes.object,
  episodesFilters: PropTypes.object,
};

export default PagesRoot;
