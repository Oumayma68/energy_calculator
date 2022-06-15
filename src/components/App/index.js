import React from 'react';
import Header from '../Header'
import Landing from '../Landing'
import Footer from '../Footer'
import Main from '../Main';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';


import '../../App.css';

function App() {
  return (
    <div>
      <Router>
      < Header />
      <Switch>
      <Route  exact path="/" component={Landing} />
      <Route path="/Main" component={Main} />
      </Switch>
      <Footer />
      </Router>
      
    </div>
  );
}

export default App;
