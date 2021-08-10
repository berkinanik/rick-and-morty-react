import React from 'react';
import { render } from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

// TODO refactor code
// TODO add react-router and implement character pages.
// TODO character pages might include played episodes.
// TODO implement episode pages or redirect to google search e.g. Rick and Morty S01E01

// FIXME cannot use tabEnums in list grid: causes circular import.
// FIXME pagination should update after filtering.

render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
