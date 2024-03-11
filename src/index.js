import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Box from "./components/Box";

const routing = (
  <Router>
    <div>
      <h1>React</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Box">Box</Link>
        </li>
      </ul>
      <Route exact path="/" component={App} />
      <Route path="/Box" component={Box} />
    </div>
  </Router>
);

// Use ReactDOM.render() to render the application
ReactDOM.render(
  <React.StrictMode>
    {routing}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
