// ./move.js에 prop받아서 사용 함
import PropTypes from "prop-types";
function Movie({ coverImg, title, summary, genres }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <img src={coverImg} alt={title} />
    </div>
  );
}
Movie.prototype = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
