import { Carousel } from "react-bootstrap";
import movie_1 from "../../public/movie_1.png";
import movie_2 from "../../public/movie_2.png";
import movie_3 from "../../public/movie_3.png";
import movie_4 from "../../public/movie_4.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={5000}>
          <Image alt="#" src={movie_1} className="d-block w-100"></Image>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <Image
            alt="Second slide"
            src={movie_2}
            className="d-block w-100"
          ></Image>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <Image
            alt="Third slide"
            src={movie_3}
            className="d-block w-100"
          ></Image>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            alt="Fourth slide"
            src={movie_4}
            className="d-block w-100"
          ></Image>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero;
