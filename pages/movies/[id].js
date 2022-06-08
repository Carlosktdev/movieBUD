import { useRouter } from "next/router";
import axios from "axios";
import MovieCard from "../../components/movieSlides/MovieCard";

const MovieGenres = ({ genres }) => {
  const {
    query: { id },
  } = useRouter();

  const movieList = genres.results;
  return (
    <div>
      <h1>Genres {id}</h1>
      <div className="row">
        {movieList.map((movie, index) => {
          return (
            <div key={index} className="col">
              <MovieCard
                title={movie.name || movie.original_title}
                img={movie.poster_path}
                points={movie.vote_average}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const genres = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=a003f0dfd5211d98466593cdb5bdc6dc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" +
      params.id +
      "&with_watch_monetization_types=flatrate"
  );

  const genre = await genres.data;

  return {
    props: {
      genres: genre,
    },
  };
}

export default MovieGenres;
