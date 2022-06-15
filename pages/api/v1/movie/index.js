export default function handleMovie(req, res) {
  // GET REQUEST
  if (req.method === "GET") {
    res.status(200).json({ name: "Get request" });
  } else {
    res
      .status(404)
      .json({ message: "This endpoint only accepts GET requests" });
  }
}

// create a calculator
function calculator(val, val2) {}
