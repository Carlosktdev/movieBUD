import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Container, SSRProvider } from "react-bootstrap";
import NavBar from "../components/commons/NavBar";
import Hero from "../components/hero/Hero";
import axios from "axios";
import Animations from "../components/animates/Animations";
import MovieSlides from "../components/movieSlides/MovieSlides";

export default function Home({ trends, animations, sfis }) {
  return (
    <SSRProvider>
      <Container>
        <NavBar />
        <Hero />
        <MovieSlides slidetitle="Latest and trending" data={trends} />
        <MovieSlides slidetitle="Animated Movies" data={animations} />
        <MovieSlides slidetitle="Science Fiction Movies" data={sfis} />
      </Container>
    </SSRProvider>
  );
}

export async function getServerSideProps() {
  const trends = await axios.get(
    "https://api.themoviedb.org/3/trending/all/week?api_key=a003f0dfd5211d98466593cdb5bdc6dc"
  );
  const animations = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=a003f0dfd5211d98466593cdb5bdc6dc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16&with_watch_monetization_types=flatrate"
  );
  const sfis = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=a003f0dfd5211d98466593cdb5bdc6dc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=878&with_watch_monetization_types=flatrate"
  );

  const trend = await trends.data;
  const animation = await animations.data;
  const sfi = await sfis.data;

  return {
    props: {
      trends: trend,
      animations: animation,
      sfis: sfi,
    },
  };
}
