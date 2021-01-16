import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./scss/main.scss";

import Header from "./components/LandingPage/Header/Header"
import Carousel from "./components/LandingPage/Carousel/Carousel";
import CallToAction from "./components/LandingPage/CallToAction/CallToAction";
import About from "./components/LandingPage/About/About";
import Newsletter from "./components/LandingPage/Newsletter/Newsletter";
import Author from "./components/LandingPage/Author/Author";
import InfoNews from './components/LandingPage/InfoNews/InfoNews';
import Footer from "./components/LandingPage/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={Header} />
      <Route exact path="/" component={Carousel} />
      <Route exact path="/" component={CallToAction} />
      <Route exact path="/" component={About} />
      <Route exact path="/" component={Newsletter} />
      <Route exact path="/" component={Author} />
      <Route exact path="/" component={InfoNews} />
      <Route exact path="/" component={Footer} />
    </div>
    </BrowserRouter>
  );
}

export default App;
