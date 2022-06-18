import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Trending.module.css";

const MovieCard = ({ title, img, points, movieID }) => {
  return (
    <div className={styles.trendingImg}>
      <Link href={"/movie/" + movieID}>
        <div>
          <img
            alt="#"
            src={"https://image.tmdb.org/t/p/w500" + img}
            className={styles.trendingImg}
          ></img>
          <h6 className={styles.movieTittle}>{title}</h6>
          <p className={styles.calification}>Calification: {points}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
