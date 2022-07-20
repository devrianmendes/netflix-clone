import React from 'react';
import './MovieRow.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const MovieRow = ({ title, items }) => {
  const [scrollX, setScrollX] = React.useState(0);
  const handleRightArrow = () => {
    let x = scrollX - window.innerWidth / 2;
    if (x < items.items.length * 150 * -1 + window.innerWidth - 60) {
      x = items.items.length * 150 * -1 + window.innerWidth - 60;
    }
    setScrollX(x);
  };

  const handleLeftArrow = () => {
    let x = scrollX + window.innerWidth / 2;
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };
  
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--left" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{ fontSize: '50px' }} />
      </div>
      <div className="movieRow--right" onClick={handleRightArrow}>
        <NavigateNextIcon style={{ fontSize: '50px' }} />
      </div>
      <div className="movieRow--listarea">
        <div
          className="movieRow--list"
          style={{
            width: 150 * items.items.length,
            marginLeft: scrollX,
            transition: 'all ease .5s',
          }}
        >
          {items.items.map((eachMovieOnList, key) => (
            <div key={key} className="movieRow--item">
              <img
                src={`https://image.tmdb.org/t/p/w300${eachMovieOnList.poster_path}`}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
