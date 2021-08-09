import PropTypes from 'prop-types';
import { AppBar, Toolbar, Tabs, Tab } from '@material-ui/core';
import TextSearch from '../filters/TextSearch';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TopNavBar(props) {
  const { searchValue, handleSearch, tabValue, handleTabChange, placeHolder } = props;

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="Characters" {...a11yProps(0)} />
          <Tab label="Episodes" {...a11yProps(1)} />
        </Tabs>
        <TextSearch value={searchValue} handleChange={handleSearch} placeHolder={placeHolder} />
      </Toolbar>
    </AppBar>
  );
}

TopNavBar.propTypes = {
  handleSearch: PropTypes.func,
  searchValue: PropTypes.string,
  tabValue: PropTypes.number,
  handleTabChange: PropTypes.func,
  placeHolder: PropTypes.string,
};

export default TopNavBar;
