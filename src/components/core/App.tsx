import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import LandingPage from "../pages/landing-page/LandingPage";
import ArticleListPage from "../pages/article-list-page/ArticleListPage";
import ArticlePage from "../pages/article-page/ArticlePage";
import Page404 from "../pages/404/404";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/" exact component={LandingPage}></Route>
          <Route path="/articles" exact component={ArticleListPage}></Route>
          <Route path="/article/:slug" component={ArticlePage}></Route>
          <Route component={Page404} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
