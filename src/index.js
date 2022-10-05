import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./components/About";
import Projects from "./components/Projects";
import WIPContainer from "./components/WipAlert";
import Header from "./components/Header";
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div
      id="background-img"
      class="background-img"
      alt="outlines of gingko leaves rest in the lower right corner of the screen"
    ></div>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="projects" element={<Projects />} />
        <Route path="About/" element={<About />}></Route>
        <Route path="Shop" element={<WIPContainer />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
