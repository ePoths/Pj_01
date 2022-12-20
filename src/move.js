/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import Movie from "./Movie";

function Move() {
  const [loding, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);
  return (
    <div>
      {loding ? (
        <h1>loding...</h1>
      ) : (
        <div>
          {/* prop Movie.js파일 확인 */}
          {movies.map((movie) => (
            <Movie
              //props를 이용 해서 전하기
              mediumCoverImage={movie.medium_cover_image}
              //movie이름 전하기
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Move;
