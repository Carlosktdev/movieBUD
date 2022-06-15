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

export default function Home({
  trends,
  animations,
  sfis,
  thrillers,
  romances,
}) {
  return (
    <SSRProvider>
      <Hero />
      <MovieSlides slidetitle="Latest and trending" data={trends} />
      <MovieSlides slidetitle="Animated Movies" data={animations} />
      <MovieSlides slidetitle="Science Fiction Movies" data={sfis} />
      <MovieSlides slidetitle="Thrillers" data={thrillers} />
      <MovieSlides slidetitle="Romance Movies" data={romances} />
    </SSRProvider>
  );
}

export async function getServerSideProps() {
  const homeData = await axios.get("http://localhost:3000/api/v1/home");
  return {
    props: {
      trends: await homeData.data.data.trends,
      animations: await homeData.data.data.animations,
      sfis: await homeData.data.data.sfis,
      thrillers: await homeData.data.data.thrillers,
      romances: await homeData.data.data.romances,
    },
  };
}
