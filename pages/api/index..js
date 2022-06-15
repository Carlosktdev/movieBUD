export default function handleMovie(req, res) {
  // GET REQUEST
  if (req.method === "GET") {
    res.status(200).json({ message: "Get request" });
  } else {
    res
      .status(404)
      .json({ message: "This endpoint only accepts GET requests" });
  }
}
