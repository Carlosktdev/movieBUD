import { useRouter } from "next/router";
import axios from "axios";
import MovieCard from "../../components/movieSlides/MovieCard";
import Image from "next/image";
import styles from "../../styles/Movie.module.css";

const MovieInfo = ({ movie }) => {
  const {
    query: { id },
  } = useRouter();
  return (
    <div className="text-center">
      <div className={styles.imgContainer}>
        <img
          src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path}
          alt="Baners"
          className={styles.imgBanner}
        />
      </div>
      <h1>movie name:{movie.title}</h1>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const movie = await axios.get(
    "https://api.themoviedb.org/3/movie/" +
      params.id +
      "?api_key=a003f0dfd5211d98466593cdb5bdc6dc&language=en-US"
  );

  const movies = await movie.data;

  return {
    props: {
      movie: movies,
    },
  };
}

export default MovieInfo;
