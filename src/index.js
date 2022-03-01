import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//IMPORT BrowserRouter and rename it to Router
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Home from "./pages/Home";
import Header from "./components/Header";
//Wrap the App Component with the Router component to enable the router features

const URL = "https://harrisongerst.herokuapp.com/"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes >
        <Route path="/" element={<App />} >
          <Route index element={<Home />} />
          <Route path="projects/" element={<Projects URL={URL} />} />
          <Route path="about/" element={<About URL={URL} />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();