import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './containers/Header/Header';
import Footer from './containers/Footer/Footer'
import Booklist from './containers/BooksList/Booklist';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";


function App() {
  return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/book/:id" component={BookDetails} />
        </Switch>
      </React.Fragment>
  );
}

function Home() {
  return (
    <React.Fragment>
          <Header />
          <Booklist></Booklist>
          <Footer></Footer>
      </React.Fragment>
  );
}

export function BookDetails() {
  return (
    <React.Fragment>
      <p>Hello</p>
    </React.Fragment>
  )
}

export default withRouter(App);
