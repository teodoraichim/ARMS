import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './containers/Header/Header';
import Footer from './containers/Footer/Footer'
import Booklist from './containers/BooksList/Booklist';


function App() {
  return (
      <React.Fragment>
          <Header></Header>  
          <Booklist></Booklist>
          <Footer></Footer>
      </React.Fragment>
  );
}

export default App;
