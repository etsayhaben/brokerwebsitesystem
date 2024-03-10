// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;
	
app.use(cors());
app.use(express.json());
// Sample route for trip planning
app.post('/planTrip', (req, res) => {
  const { startLocation, destination, preferences } = req.body;

  // Mock server-side logic (replace with your actual trip planning logic)
  const optimizedRoute = `Optimized route from ${startLocation} to ${destination} with preferences: ${preferences} is 730km from mekelle then to afar then to addisabab`;

  res.json({ optimizedRoute });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
