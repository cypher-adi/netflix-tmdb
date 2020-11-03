import React from 'react';
import Row from './components/Row';
import './App.css';

import endpoints from './utils/endpoints';

const App = () => {
  return (
    <>
      <h1>Netflix Clone</h1>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={endpoints.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={endpoints.fetchTrending} />
      <Row title="Top Rated" fetchUrl={endpoints.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={endpoints.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={endpoints.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={endpoints.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={endpoints.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={endpoints.fetchDocumentaries} />
    </>
  );
};

export default App;
