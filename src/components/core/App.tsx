import React, { lazy, Suspense } from "react";
import styled from "styled-components";
import { HashRouter, Route, Switch } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Page404 from "../pages/404/404";
import ShowoffPage from "../pages/showoff-page/ShowoffPage";
import { Container } from "../core/layout";
import constants from "../../styles/constants";
import Button from "./buttons/Button";
import Header from "./header/Header";
import Footer from "./Footer";
import landingPageData from "../../data/landingPage";

const LandingPage = lazy(() => import("../pages/landing-page/LandingPage"));
const ArticleListPage = lazy(
  () => import("../pages/article-list-page/ArticleListPage")
);
const ArticlePage = lazy(() => import("../pages/article-page/ArticlePage"));
const { whitespace, colors } = constants;

function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorBoundaryComponent}>
        <HashRouter>
          <Header />
          <Suspense fallback={<></>}>
            <Switch>
              <Route path="/" exact component={LandingPage}></Route>
              <Route path="/contact" exact component={LandingPage}></Route>
              <Route path="/articles" exact component={ArticleListPage}></Route>
              <Route path="/article/:slug" component={ArticlePage}></Route>
              {landingPageData.experienceTable.projects.map((project) => (
                <Route
                  key={`route-${project.slug}`}
                  path={project.slug}
                  component={() => (
                    <ShowoffPage
                      {...project}
                      isJob={false}
                      shortText={project.shortText}
                      longText={project.text}
                    />
                  )}
                />
              ))}
              {landingPageData.experienceTable.work.map((workItem) => (
                <Route
                  key={`route-${workItem.slug}`}
                  path={workItem.slug}
                  component={() => (
                    <ShowoffPage
                      {...workItem}
                      isJob={true}
                      shortText={workItem.position}
                      longText={workItem.text}
                    />
                  )}
                />
              ))}
              <Route component={Page404} />
            </Switch>
          </Suspense>
          <Footer />
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
        <Button onClick={() => window.location.reload()} secondary>
          Reload
        </Button>
      </Container>
    </ErrorBoundaryContainer>
  );
};

const ErrorBoundaryContainer = styled.div`
  color: ${colors.beige};
  padding: ${whitespace.l} 0;
`;

export default App;
