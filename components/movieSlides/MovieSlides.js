import Link from "next/link";
import { Carousel } from "react-bootstrap";
import styles from "../../styles/Trending.module.css";
import MovieCard from "./MovieCard";

const MovieSlides = ({ slidetitle, data }) => {
  const firstCarousel = data.results.slice(0, 5);
  const secondCarousel = data.results.slice(5, 10);
  const thirdCarousel = data.results.slice(10, 15);
  const fourthCarousel = data.results.slice(15, 20);

  return (
    <>
      <div className="d-flex text-light mt-5 align-items-center justify-content-between">
        <h2 className="pb-3">{slidetitle}</h2>
        <Link href="/">
          <h6 className={styles.viewAll}>View All</h6>
        </Link>
      </div>
      <div>
        <Carousel className="pt-1">
          <Carousel.Item interval={10000}>
            <div className="d-flex flex-row justify-content-center">
              {firstCarousel.map((card) => {
                return (
                  <div key={card.id} className="mx-3">
                    <MovieCard
                      title={card.name || card.original_title}
                      img={card.poster_path}
                      points={card.vote_average}
                      movieID={card.id}
                    />
                  </div>
                );
              })}
            </div>
          </Carousel.Item>
          ;
          <Carousel.Item interval={10000}>
            <div className="d-flex flex-row justify-content-center">
              {secondCarousel.map((card) => {
                return (
                  <div key={card.id} className="mx-3">
                    <MovieCard
                      title={card.name || card.original_title}
                      img={card.poster_path}
                      points={card.vote_average}
                      movieID={card.id}
                    />
                  </div>
                );
              })}
            </div>
          </Carousel.Item>
          <Carousel.Item interval={10000}>
            <div className="d-flex flex-row justify-content-center">
              {thirdCarousel.map((card) => {
                return (
                  <div key={card.id} className="mx-3">
                    <MovieCard
                      title={card.name || card.original_title}
                      img={card.poster_path}
                      points={card.vote_average}
                      movieID={card.id}
                    />
                  </div>
                );
              })}
            </div>
          </Carousel.Item>
          <Carousel.Item interval={10000}>
            <div className="d-flex flex-row justify-content-center">
              {fourthCarousel.map((card) => {
                return (
                  <div key={card.id} className="mx-3">
                    <MovieCard
                      title={card.name || card.original_title}
                      img={card.poster_path}
                      points={card.vote_average}
                      movieID={card.id}
                    />
                  </div>
                );
              })}
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default MovieSlides;
