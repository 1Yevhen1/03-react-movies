import type { Movie } from '../../types/movie';
import css from './MovieGrid.module.css';

interface MovieGridProps {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}

const MovieGrid = ({ movies, onSelect }: MovieGridProps) => {
  if (movies.length === 0) {
    return null;
  }

  const listItems = movies.map((movie: Movie) => {
    return (
      <li key={movie.id}>
        <div className={css.card} onClick={() => onSelect(movie)}>
          <img
            className={css.image}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            loading="lazy"
          />
          <h2 className={css.title}>{movie.title}</h2>
        </div>
      </li>
    );
  });

  return <ul className={css.grid}>{listItems}</ul>;
};

export default MovieGrid;