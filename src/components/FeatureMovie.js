import React from 'react';
import "./FeatureMovie.css";

const FeatureMovie = ({featureMovie}) => {
  if(featureMovie === null) return null;
  const genres = featureMovie.genres.map((eachGenre) => (eachGenre.name)).join(', ');
  const releaseDate = featureMovie.first_air_date.slice(0, 4);
  return (
    <section className="featured" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${featureMovie.backdrop_path})`}}>
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{featureMovie.name}</div>
          <div className="featured--info">
            <div className="featured--points">{featureMovie.vote_average} pontos</div>
            <div className="featured--year">{releaseDate}</div>
            <div className='featured--seasons'>{featureMovie.seasons.length} temporada{featureMovie.seasons.length > 1 ? 's' : null}</div>
          </div>
          <div className="featured--description">{featureMovie.overview.length > 150 ? featureMovie.overview.slice(0, 150) + '...' : featureMovie.overview}</div>
          <div className="featured--buttons">
            <a href={`/watch/${featureMovie.id}`} className="featured--watchButton">▻ Assistir</a>
            <a href={`/list/add/${featureMovie.id}`} className="featured--myListButton">+ Minha lista</a>
          </div>
          <div className="featured--genres"><strong>Gêneros: </strong>{genres}</div>
        </div>
      </div>
    </section>
  )
}

export default FeatureMovie