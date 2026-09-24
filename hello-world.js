const express = require('express'); // Import the Express module
const app = express(); // Create an Express application instance
const port = 8080; // Define the port number the server will listen on

// Define a route to handle GET requests to the root URL ('/')
app.get('/', (req, res) => {
  res.send('Hello World from Express!'); // Send a plain text response
});

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
