import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/api/restaurants", async (req, res) => {
  try {
    const response = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?lat=28.7041&lng=77.1025",
      {
        headers: {
          "User-Agent": "Mozilla/5.0",
          "Accept": "application/json",
          "Referer": "https://www.swiggy.com/",
          "Origin": "https://www.swiggy.com",
          "Cookie": "your browser cookie on the header request of the API"
        }
      }
    );

    const data = await response.json();
    res.json(data);

  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({ error: "Failed to fetch restaurants" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));