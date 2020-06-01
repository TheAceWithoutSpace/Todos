import React from 'react';
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom';

const App =()=>{
  return(
  <Router>
    <Route path="/"exact>
    </Route>
    <Redirect/>
  </Router>
  );
};
export default App;
