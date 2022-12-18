import React, { useEffect, useState } from "react";
function Move() {
  const [loding, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
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
      {/* 로딩중 일때는 h1의 로딩창을 띄우고 
        로딩이 완료 됬을때 div테그 안에 {movies.map((movie)}를 실행한다
        실행한 결과는 <div key={movie.id}> <h2>{movie.title}</h2> </div>이다
        movie.id와 movie.title은 api값을 .map(movie)을 통해
        movie라는 파라메터에 받아서 사용한다 [28 line ~ 38 line]참고
          강의 내용{https://nomadcoders.co/react-for-beginners/lectures/3289} 11분 50초
     */}
      {loding ? (
        <h1>loding...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <h2>{movie.title}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Move;
