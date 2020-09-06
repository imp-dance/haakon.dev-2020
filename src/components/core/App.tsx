import React from "react";
import styled from "styled-components";
import { HashRouter, Route, Switch } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import LandingPage from "../pages/landing-page/LandingPage";
import ArticleListPage from "../pages/article-list-page/ArticleListPage";
import ArticlePage from "../pages/article-page/ArticlePage";
import Page404 from "../pages/404/404";
import { Container } from "../core/layout";
import constants from "../../styles/constants";
import FancyButton from "./buttons/FancyButton";
const { whitespace, colors } = constants;

function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorBoundaryComponent}>
        <HashRouter>
          <Switch>
            <Route path="/" exact component={LandingPage}></Route>
            <Route path="/articles" exact component={ArticleListPage}></Route>
            <Route path="/article/:slug" component={ArticlePage}></Route>
            <Route component={Page404} />
          </Switch>
        </HashRouter>
      </ErrorBoundary>
    </div>
  );
}

const ErrorBoundaryComponent = () => {
  return (
    <ErrorBoundaryContainer>
      <Container>
        <h2>Well this is really embarrasing...</h2>
        <p>Looks like something broke.</p>
        <p>Maybe try reloading?</p>
        <FancyButton onClick={() => window.location.reload()} secondary>
          Reload
        </FancyButton>
      </Container>
    </ErrorBoundaryContainer>
  );
};

const ErrorBoundaryContainer = styled.div`
  color: ${colors.beige};
  padding: ${whitespace.l} 0;
`;

export default App;
