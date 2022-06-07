import Image from "next/image";
import styles from "../../styles/Trending.module.css";

const MovieCard = ({ title, img, points }) => {
  return (
    <div className={styles.trendingImg}>
      <img
        alt="#"
        src={"https://image.tmdb.org/t/p/w500" + img}
        className={styles.trendingImg}
      ></img>
      <h6 className={styles.movieTittle}>{title}</h6>
      <p>Calification: {points}</p>
    </div>
  );
};

export default MovieCard;
