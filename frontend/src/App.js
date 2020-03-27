import React from 'react';
import './styles/background-anim.css'
import './styles/feed-page.css'
import './styles/generic-components.css'
import './styles/normalize.css'
import './styles/popup.css'
import './styles/style.css'
import './styles/topic-choice.css'


import Header from "./components/Header";
import Newsfeed from "./components/news-feed/Newsfeed";

function App() {
  return (
      <React.Fragment>
            <Header/>
            <Newsfeed />
      </React.Fragment>
  );
}

export default App;
