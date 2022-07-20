import React from 'react';
import Header from './components/Header';
import FeatureMovie from './components/FeatureMovie';
import MovieRow from './components/MovieRow';
import tmdbLists from './Tmdb';
import './App.css';

function App() {

  const [movieList, setMovieList] = React.useState([]);
  const [featureMovie, setFeatureMovie] = React.useState(null);
  
  React.useEffect(() => {
    const loadAll = async () => {
      //Pegando a lista
      let list = await tmdbLists.getHomeList();
      setMovieList(list);

      //Pegando o destaque
      let originals = list.filter((eachOriginal) => eachOriginal.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * originals[0].items.items.length - 1);
      let chosen = originals[0].items.items[randomChosen];
      let chosenInfo = await tmdbLists.getMovieInfo(chosen.id, chosen.media_type);
      setFeatureMovie(chosenInfo);
    };
    loadAll();
  }, []);

  // if (movieList.length === 0) return null;
  return (
    <main className="page">
      <Header />
      <FeatureMovie featureMovie={featureMovie} />
      <section className="list">
        {movieList.map((eachMovieList, key) => (
          <MovieRow
            key={key}
            title={eachMovieList.title}
            items={eachMovieList.items}
          ></MovieRow>
        ))}
      </section>
      <footer>
        <p>
          Feito pelo desenvolvedor Rian Mendes com apoio da Origamid e B7Web.
        </p>
        <p>Direitos de imagem para Netflix.</p>
        <p>Dados pegos do site themoviedb.org</p>
      </footer>

      {console.log(movieList)}
      {movieList.length === 0 &&
        <div className="loading">
          <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando"></img>
        </div>
      }
    </main>
  );
}

export default App;
