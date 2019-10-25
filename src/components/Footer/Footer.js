import React from 'react';
import './Footer.css'

// 10/25/19 Footer has been removed from Drink Linkz app, but component
// has been left for future use if needed.

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const Footer = () => (
  <footer>
    &copy; Prime Digital Academy
  </footer>
);

export default Footer;