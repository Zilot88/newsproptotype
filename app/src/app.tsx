import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Welcome from './welcome';

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" exact component={Welcome} />
    </Router>
  );
};

export default App;
