import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import LandingPage from "../pages/landing-page/LandingPage";
import ArticleListPage from "../pages/article-list-page/ArticleListPage";
import ArticlePage from "../pages/article-page/ArticlePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={LandingPage}></Route>
        <Route path="/articles" exact component={ArticleListPage}></Route>
        <Route path="/article/:slug" component={ArticlePage}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
