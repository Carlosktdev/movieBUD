import { useRouter } from "next/router";
import axios from "axios";
import MovieCard from "../../components/movieSlides/MovieCard";
import Image from "next/image";
import styles from "../../styles/Movie.module.css";
import MovieSlides from "../../components/movieSlides/MovieSlides";
import { BsFillStarFill } from "react-icons/bs";

const timeConvert = (n) => {
  const num = n;
  const hours = num / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  return rhours + ":" + rminutes;
};

const trunkDecimal = (num) => {
  var myTrunc = Math.trunc(num);
  return myTrunc;
};

const SerieInfo = ({ serie, similar }) => {
  const {
    query: { id },
  } = useRouter();
  return (
    <div className="my-5">
      {/* SERIE INFO SECTION */}
      <div className="row justify-content-between">
        <div className="col-sm-6 col-sx-12 text-lg-start text-center mb-3 mb-sm-0">
          <div>
            <h2 className="text-light">{serie.original_name}</h2>
            <h6 className={styles.mainNames}>
              {"Release date:  " +
                serie.first_air_date +
                "    -    " +
                " Episodes: " +
                serie.number_of_episodes}
            </h6>
          </div>
        </div>
        <div className="col-sm-6 col-sx-12 d-flex justify-content-center justify-content-sm-end text-light">
          <div className="text-center mx-3">
            <h5 className={styles.mainNames}>RATING</h5>
            <div className="d-flex">
              <BsFillStarFill className={styles.starIcon} />
              <h5>{serie.vote_average}/10</h5>
            </div>
          </div>
          <div className="text-center mx-3">
            <h5 className={styles.mainNames}>VOTE COUNT</h5>
            <h5>{serie.vote_count}</h5>
          </div>
          <div className="text-center mx-3">
            <h5 className={styles.mainNames}>POPULARITY</h5>
            <h5>{trunkDecimal(serie.popularity)}</h5>
          </div>
        </div>
      </div>
      {/* SERIE IMAGE SECTION */}
      <div className="row">
        <div className="col-lg-4 col-sm-6 mt-4 text-center">
          <img
            src={"https://image.tmdb.org/t/p/w500" + serie.poster_path}
            alt="Movie Poster"
            className={styles.moviePoster}
          />
        </div>
        <div className="col-lg-7 col-sm-6 mt-4">
          <div className="d-flex flex-column">
            <div className="mb-4">
              <h5 className={styles.mainNames}>OVERVIEW:</h5>
              <h6 className="text-light">{serie.overview}</h6>
            </div>
            <div className="mb-4">
              <h5 className={styles.mainNames}>GENRES:</h5>
              <h6 className="text-light">
                {serie.genres.map((genre) => {
                  return " - " + genre.name;
                })}
              </h6>
            </div>
            <div className="mb-4">
              <h5 className={styles.mainNames}>PRODUCTION COMPANIES:</h5>
              <h6 className="text-light">
                {serie.production_companies.map((company) => {
                  return " - " + company.name;
                })}
              </h6>
            </div>
            <div className="mb-4">
              <h5 className={styles.mainNames}>SPOKEN LENGUAGES:</h5>
              <h6 className="text-light">
                {serie.spoken_languages.map((lenguage) => {
                  return " - " + lenguage.name;
                })}
              </h6>
            </div>
            <div className="mb-4">
              <h5 className={styles.mainNames}>LINK TO SHOW/MOVIE:</h5>
              <a
                href={serie.homepage}
                target="_blank"
                rel="noreferrer"
                className={styles.links}
              >
                LINK
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* SIMILAR MOVIES SECTION */}
      <div className="mt-4">
        <MovieSlides slidetitle="Similar movies:" data={similar} />
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const serie = await axios.get(
    "https://api.themoviedb.org/3/tv/" +
      params.id +
      "?api_key=a003f0dfd5211d98466593cdb5bdc6dc&language=en-US"
  );

  const getSimilars = await axios.get(
    "https://api.themoviedb.org/3/tv/" +
      params.id +
      "/similar?api_key=a003f0dfd5211d98466593cdb5bdc6dc&language=en-US&page=1"
  );

  const series = await serie.data;
  const similars = await getSimilars.data;

  return {
    props: {
      serie: series,
      similar: similars,
    },
  };
}

export default SerieInfo;
