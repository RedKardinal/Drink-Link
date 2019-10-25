import React from 'react';


// 10/25/19 Footer has been removed from Drink Linkz app, but component
// has been left for future use if needed.

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const InfoPage = () => (
  <div>
    <p>
      Info Page
    </p>
  </div>
);

export default InfoPage;
