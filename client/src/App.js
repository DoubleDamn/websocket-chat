import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import JoinPage from './components/join-page/JoinPage';
import Chat from './components/chat/Chat';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={JoinPage} />
      <Route path="/chat" exact component={Chat} />
    </Router>
  );
};

export default App;
