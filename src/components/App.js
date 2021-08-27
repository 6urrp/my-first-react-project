import { Fragment } from 'react';
import { Switch, Route } from "react-router-dom";

import { Header } from "./Header/Header.jsx";
import SingleBlog from './SingleBlog/SingleBlog.jsx';
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
        <Route exact path="/blog" component={BlogList} />
        <Route path="/blog/:id" component={SingleBlog} />
      </Switch>
    </Fragment>
  );
}

export default App;
