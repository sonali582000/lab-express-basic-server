// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express");
const projects = require("./data/projects.json");
const articles = require("./data/articles.json");

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  response.send(`<h1>Home Page</h1>`);
});

app.get("/blog", (request, response) => {
  response.send(`<h1>Blog Page</h1>`);
});

app.get("/api/projects", (request, response) => {
  response.json(projects);
});

app.get("/api/articles", (request, response) => {
  response.json(articles);
});

app.get("/*", (request, response) => {
  response.json(`<h1>404 Page not found</h1>`);
});

app.listen(5005, () => console.log("App listening on port 5005!"));
// CREATE EXPRESS APP
// Here you should create your Express app:

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests

// ROUTES
// Start defining your routes here:

// START THE SERVER
// Make your Express server listen on port 5005:
