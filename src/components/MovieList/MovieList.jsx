import React from 'react';

function MovieList() {
  const [movies, setMovies] = React.useState([
    { id: 1, title: 'Movie 1' },
    { id: 2, title: 'Movie 2' },
    { id: 3, title: 'Movie 3' }
  ]);

  return (
    <ul>
      {movies.map((movie, index) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
}

export default MovieList;
