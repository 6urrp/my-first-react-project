import { Fragment } from 'react';
import { Switch, Route } from "react-router-dom";

import { Header } from "./Header/Header.jsx";
import BlogList from "./BlogList/BlogList"
import HomePage from './HomePage/HomePage.jsx';
import AboutPage from './AboutPage/AboutPage.jsx';
import './App.css';

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact  path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/blog" component={BlogList} />
      </Switch>
    </Fragment>
  );
}

export default App;
