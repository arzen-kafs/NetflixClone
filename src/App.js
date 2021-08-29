
import './App.css';
import Row from './Row'
import request from './request'
import Banner from './Banner'
import NavBar from './Navbar'

function App() {
  return (
    <div className="app">
      <NavBar/>
      <Banner/>
      <Row title="Netflix Original"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow={true} />
      <Row title="Netflix Trending" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
