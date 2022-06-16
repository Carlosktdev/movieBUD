import { useRouter } from "next/router";
import axios from "axios";
import SerieCard from "../../../components/movieSlides/ShowCard";

const SerieCategory = ({ category }) => {
  const {
    query: { name },
  } = useRouter();

  const serieList = category.results;
  return (
    <div>
      <div className="row mt-4">
        {serieList.map((serie, index) => {
          return (
            <div key={index} className="col">
              <SerieCard
                title={serie.name || serie.original_title}
                img={serie.poster_path}
                points={serie.vote_average}
                movieID={serie.id}
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
    "https://api.themoviedb.org/3/tv/" +
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

export default SerieCategory;
