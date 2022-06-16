import {
  Button,
  Container,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import DropDown from "./DropDown";
import styles from "../../styles/Home.module.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";

const navPages = [
  {
    linkName: "Movies",
    links: [
      { linkText: "Now playing", linkDir: "/movies/category/now_playing" },
      { linkText: "Popular movies", linkDir: "/movies/category/popular" },
      { linkText: "Top rated", linkDir: "/movies/category/top_rated" },
      { linkText: "Upcoming movies", linkDir: "/movies/category/upcoming" },
    ],
  },
  {
    linkName: "Tv Show",
    links: [
      { linkText: "Airing today", linkDir: "/series/category/airing_today" },
      { linkText: "On the air", linkDir: "/series/category/on_the_air" },
      { linkText: "Popular shows", linkDir: "/series/category/popular" },
      { linkText: "Top rated shows", linkDir: "/series/category/top_rated" },
    ],
  },
  {
    linkName: "Genres",
    links: [
      { linkText: "Action", linkDir: "/movies/28" },
      { linkText: "Adventure", linkDir: "/movies/12" },
      { linkText: "Animation", linkDir: "/movies/16" },
      { linkText: "Comedy", linkDir: "/movies/35" },
      { linkText: "Crime", linkDir: "/movies/80" },
      { linkText: "Documentary", linkDir: "/movies/99" },
      { linkText: "Drama", linkDir: "/movies/18" },
      { linkText: "Family", linkDir: "/movies/10751" },
      { linkText: "Fantasy", linkDir: "/movies/14" },
      { linkText: "History", linkDir: "/movies/36" },
      { linkText: "Horror", linkDir: "/movies/27" },
      { linkText: "Music", linkDir: "/movies/10402" },
      { linkText: "Mystery", linkDir: "/movies/9648" },
      { linkText: "Romance", linkDir: "/movies/10749" },
      { linkText: "Science Fiction", linkDir: "/movies/878" },
      { linkText: "TV Movie", linkDir: "/movies/10770" },
      { linkText: "Thriller", linkDir: "/movies/53" },
      { linkText: "War", linkDir: "/movies/10752" },
      { linkText: "Western", linkDir: "/movies/37" },
    ],
  },
];

const NavBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (searchTerm.length > 0) {
        const movies = await axios.get(
          "https://api.themoviedb.org/3/search/movie?api_key=a003f0dfd5211d98466593cdb5bdc6dc&language=en-US&query=" +
            searchTerm +
            "&page=1&include_adult=false"
        );
        const series = await axios.get(
          "https://api.themoviedb.org/3/search/tv?api_key=a003f0dfd5211d98466593cdb5bdc6dc&language=en-US&query=" +
            searchTerm +
            "&page=1&include_adult=false"
        );
        setMovies(movies.data.results.slice(0, 10));
        setSeries(series.data.results.slice(0, 10));
        handleShow();
      } else setSearchTerm("");
    }, 3000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return (
    <div className="my-2">
      <Navbar expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">MovieBUD</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {navPages.map((page) => {
                return (
                  <DropDown
                    linkName={page.linkName}
                    links={page.links}
                    key={page.linkName}
                  />
                );
              })}
            </Nav>
            <div className="d-flex">
              <div>
                <Form>
                  <Form.Control
                    type="email"
                    placeholder="Search movie/tv show"
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </Form>
              </div>

              <Offcanvas show={show} onHide={handleClose} backdrop={false}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>
                    Movies containing {searchTerm}
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  {/* MOVIES */}
                  <div className="row">
                    <h3>Movies</h3>
                    {movies.map((movie, index) => {
                      return (
                        <div key={index} className="col-6">
                          <a href={`/movie/${movie.id}`}>
                            <img
                              className="img-fluid"
                              src={
                                "https://image.tmdb.org/t/p/w500" +
                                movie.poster_path
                              }
                              alt="moviePoster"
                            />
                            <h6>{movie.title}</h6>
                          </a>
                        </div>
                      );
                    })}
                  </div>
                  {/* SERIES */}
                  <div className="row">
                    <h3>Tv shows</h3>
                    {series.map((serie, index) => {
                      return (
                        <div key={index} className="col-6">
                          <a href={`/serie/${serie.id}`}>
                            <img
                              className="img-fluid"
                              src={
                                "https://image.tmdb.org/t/p/w500" +
                                serie.poster_path
                              }
                              alt="moviePoster"
                            />
                            <h6>{serie.title}</h6>
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </Offcanvas.Body>
              </Offcanvas>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
