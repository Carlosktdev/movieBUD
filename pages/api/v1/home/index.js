import axios from "axios";

export default async function handleMovie(req, res) {
  // GET REQUEST
  if (req.method === "GET") {
    try {
      const trends = await axios.get(
        "https://api.themoviedb.org/3/trending/all/week?api_key=a003f0dfd5211d98466593cdb5bdc6dc"
      );
      const animations = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=a003f0dfd5211d98466593cdb5bdc6dc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16&with_watch_monetization_types=flatrate"
      );
      const sfis = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=a003f0dfd5211d98466593cdb5bdc6dc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=878&with_watch_monetization_types=flatrate"
      );
      const thrillers = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=a003f0dfd5211d98466593cdb5bdc6dc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=53&with_watch_monetization_types=flatrate"
      );
      const romances = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=a003f0dfd5211d98466593cdb5bdc6dc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749&with_watch_monetization_types=flatrate"
      );
      res.status(200).json({
        data: {
          trends: trends.data,
          animations: animations.data,
          sfis: sfis.data,
          thrillers: thrillers.data,
          romances: romances.data,
        },
        message: "success",
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res
      .status(404)
      .json({ message: "This endpoint only accepts GET requests" });
  }
}
