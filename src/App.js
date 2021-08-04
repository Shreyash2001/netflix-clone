import './App.css';
import Banner from './Banner';
import Nav from './Nav';
import requests from './requests';
import Row from './Row';
import { BrowserRouter as Router, Switch,  Route } from 'react-router-dom'
import MovieInfo from './MovieInfo';
import Login from './Login';



function App() {
  return (
    <Router>
    <div className="app">
    <Switch>
    <Route path="/movies/:movieId">
      <MovieInfo fetchApi={requests.fetchMoviesOnSearch} />
    </Route>
    <Route path="/home">
    <Nav fetchMovies={requests.fetchMoviesOnSearch}/>
    <Banner />
      <Row title="Popular" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </Route>
      <Route path="/">
        <Login />
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
