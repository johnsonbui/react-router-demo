import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/journeys" component={Journeys} />
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Project({ match }) {
  return <h3>{match.params.id}</h3>;
}

function Projects({ match }) {
  return (
    <div>
      <h2>Projects</h2>
      <ul>
        <li>
          <Link to={`${match.url}/keyboard`}>Keyboard</Link>
        </li>
        <li>
          <Link to={`${match.url}/recipe-book`}>Recipe Book</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Project} />
      <Route
        exact
        path={"/projects/keyboard"}
        render={() => <h3>Select a keyboard to view.</h3>}
      />
      <Route
        exact
        path={"/projects/recipe-book"}
        render={() => <h3>Select a recipe to view.</h3>}
      />
    </div>
  );
}

function Journeys() {
  return <h2>Journeys</h2>;
}

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/journeys">Journeys</Link>
      </li>
    </ul>
  );
}

export default App;
