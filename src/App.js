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
        <Route path="/topics" component={Topics} />
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

function Projects({ match }) {
  return (
    <div>
      <h2>Projects</h2>
      <ul>
        <li>
          <Link to={`${match.url}/Keyboard`}>Keyboard</Link>
        </li>
        <li>
          <Link to={`${match.url}/RecipeBook`}>Recipe Book</Link>
        </li>
      </ul>
      <h2>{match.path}</h2>
      <Route path={`${match.path}/:id`} component={match.path} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function ProjectsList({ match }) {
  return (
    <div>
      <ul>
        <li>
          <Link to={`${match.url}/Keyboard`}>Keyboard</Link>
        </li>
        <li>
          <Link to={`${match.url}/RecipeBook`}>Recipe Book</Link>
        </li>
      </ul>
      <h2>{match.path}</h2>
      <Route path={`${match.path}/:id`} component={match.path} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Keyboard({ match }) {
  return (
    <h2>Keyboard</h2>
  );
}

function Topic({ match }) {
  return <h3>Requested Param: {match.params.id}</h3>;
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
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
        <Link to="/topics">Topics</Link>
      </li>
    </ul>
  );
}

export default App;
