import { useState } from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import PagesRoot from './tabs/PagesRoot';
import TopNavBar from './utils/TopNavBar';
import FilterBar from './filters/FilterBar';

export default function App() {
  const [tabValue, setTabValue] = useState(0);
  const [characterSearchValue, setCharacterSearchValue] = useState('');
  const [episodeSearchValue, setEpisodeSearchValue] = useState('');
  const [genderValue, setGenderValue] = useState('');
  const [statusValue, setStatusValue] = useState('');
  const [seasonValue, setSeasonValue] = useState('');

  const handleCharacterSearch = (event) => {
    setCharacterSearchValue(event.target.value);
  };

  const handleEpisodeSearch = (event) => {
    setEpisodeSearchValue(event.target.value);
  };

  const handleTabChange = (event) => {
    const tabId = event.target.id;
    const tabIndex = parseInt(tabId.charAt(tabId.length - 1));
    setTabValue(tabIndex);
  };

  const handleGenderChange = (event) => {
    setGenderValue(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatusValue(event.target.value);
  };

  const handleSeasonChange = (event) => {
    setSeasonValue(event.target.value);
  };

  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  theme.typography.h3 = {
    fontSize: '1.5rem',
    '@media (min-width:600px)': {
      fontSize: '1.8rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.6rem',
    },
    textShadow:
      '2px 0 0 red, -2px 0 0 red, 0 2px 0 red, 0 -2px 0 red, 1px 1px red, -1px -1px 0 red, 1px -1px 0 red, -1px 1px 0 red',
  };

  theme.typography.h6 = {
    fontSize: '0.6rem',
    '@media (min-width:600px)': {
      fontSize: '1.0rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.4rem',
    },
  };

  // TODO Add regex for s01** or s01e03 syntax for episode search
  // TODO Add search functioanlity
  // TODO Add select filter functionality

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TopNavBar
        handleSearch={tabValue === 0 ? handleCharacterSearch : handleEpisodeSearch}
        searchValue={tabValue === 0 ? characterSearchValue : episodeSearchValue}
        placeHolder={tabValue === 0 ? 'Search by Name' : 'Name or Episode (e.g. s2e5)'}
        tabValue={tabValue}
        handleTabChange={handleTabChange}
      />
      <Container maxWidth="lg">
        <FilterBar
          tabValue={tabValue}
          genderValue={genderValue}
          handleGenderChange={handleGenderChange}
          statusValue={statusValue}
          handleStatusChange={handleStatusChange}
          seasonValue={seasonValue}
          handleSeasonChange={handleSeasonChange}
        />
        <PagesRoot tabValue={tabValue} />
      </Container>
    </ThemeProvider>
  );
}
