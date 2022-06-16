import { useRouter } from "next/router";
import axios from "axios";
import MovieCard from "../../../components/movieSlides/MovieCard";

const MovieCategory = ({ category }) => {
  const {
    query: { name },
  } = useRouter();

  const movieList = category.results;
  return (
    <div>
      <div className="row mt-4">
        {movieList.map((movie, index) => {
          return (
            <div key={index} className="col">
              <MovieCard
                title={movie.name || movie.original_title}
                img={movie.poster_path}
                points={movie.vote_average}
                movieID={movie.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const response = await axios.get(
    "https://api.themoviedb.org/3/movie/" +
      params.name +
      "?api_key=a003f0dfd5211d98466593cdb5bdc6dc&language=en-US"
  );

  const categories = await response.data;

  return {
    props: {
      category: categories,
    },
  };
}

export default MovieCategory;
