import React from 'react';
import { HashRouter as Router } from 'react-router-dom';


// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <Router>
    <div>
      <p>




        ----------- IF YOU ARE SEEING THIS PAGE SOMETHING HAS GONE TERRIBLY WRONG AND MARTY IS TRYING REALLY HARD NOT TO PANIC! --------------






      </p>
    </div>
    </Router>
  </div>
);

export default AboutPage;