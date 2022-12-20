/* eslint-disable jsx-a11y/alt-text */

// ./move.js에 prop받아서 사용 함
// https://nomadcoders.co/react-for-beginners/lectures/3290
function Movie({ mediumCoverImage, title, summary, genres }) {
  return (
    <div>
      <img src={mediumCoverImage} />
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}
export default Movie;
