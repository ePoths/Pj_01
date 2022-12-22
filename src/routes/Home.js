import Movie from "../components/Movie";
import React, { useEffect, useState } from "react";

function Home() {
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
  <div>
    {loding ? (
      <h1>loading...</h1>
    ) : (
      <div>
        {/*  */}
        {/* prop Movie.js파일 확인 */}
        {movies.map((movie) => (
          <Movie
            //movie이름 전하기
            title={movie.title}
            //props를 이용 해서 전하기
            mediumCoverImage={movie.medium_cover_image}
            //줄거리
            summary={movie.summary}
            // 카테고리
            genres={movie.genres}
          />
        ))}
      </div>
    )}
  </div>;
}

export default Home;
