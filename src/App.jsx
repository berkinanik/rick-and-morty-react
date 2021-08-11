import { useState } from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import TabsRoot from './tabs/TabsRoot';
import TopNavBar from './utils/TopNavBar';
import FilterBar from './filters/FilterBar';

export default function App() {
  const [tabValue, setTabValue] = useState(0);

  const [charactersFilters, setCharactersFilters] = useState({
    page: 1,
    searchVal: '',
    gender: '',
    status: '',
  });
  const [episodesFilters, setEpisodesFilters] = useState({
    page: 1,
    searchVal: '',
    season: '',
  });

  const handleCharacterSearch = (event) => {
    setCharactersFilters({
      ...charactersFilters,
      page: 1,
      searchVal: event.target.value,
    });
  };

  const handleEpisodeSearch = (event) => {
    setEpisodesFilters({
      ...episodesFilters,
      page: 1,
      searchVal: event.target.value,
    });
  };

  const handleGenderChange = (event) => {
    setCharactersFilters({
      ...charactersFilters,
      page: 1,
      gender: event.target.value,
    });
  };

  const handleStatusChange = (event) => {
    setCharactersFilters({
      ...charactersFilters,
      page: 1,
      status: event.target.value,
    });
  };

  const handleSeasonChange = (event) => {
    setEpisodesFilters({
      ...episodesFilters,
      page: 1,
      season: event.target.value,
    });
  };

  const handleTabChange = (event) => {
    const tabId = event.target.id;
    const tabIndex = parseInt(tabId.charAt(tabId.length - 1));
    setTabValue(tabIndex);
  };

  const handlePageChange = (event, value) => {
    switch (tabValue) {
      case 0:
        setCharactersFilters({
          ...charactersFilters,
          page: value,
        });
        break;
      case 1:
        setEpisodesFilters({
          ...episodesFilters,
          page: value,
        });
        break;
      default:
        break;
    }
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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TopNavBar
        handleSearch={tabValue === 0 ? handleCharacterSearch : handleEpisodeSearch}
        searchValue={tabValue === 0 ? charactersFilters.name : episodesFilters.name}
        placeHolder={tabValue === 0 ? 'Search by Name' : 'Name or Episode (e.g. s2e5)'}
        tabValue={tabValue}
        handleTabChange={handleTabChange}
      />
      <Container maxWidth="xl">
        <FilterBar
          tabValue={tabValue}
          genderValue={charactersFilters.gender}
          handleGenderChange={handleGenderChange}
          statusValue={charactersFilters.status}
          handleStatusChange={handleStatusChange}
          seasonValue={episodesFilters.season}
          handleSeasonChange={handleSeasonChange}
        />
        <TabsRoot
          tabValue={tabValue}
          charactersFilters={charactersFilters}
          episodesFilters={episodesFilters}
          handlePageChange={handlePageChange}
        />
      </Container>
    </ThemeProvider>
  );
}
