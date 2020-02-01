import React from 'react';
import Navigation from './components/Layout/Navigation';
import Button from './components/Layout/Button';

const App = () => {

  return (
    <Router>
    <div>
      <h1>Kompi</h1>
      <Navigation/>
      <Button name="Log inn"/>
      <Button name="Registrer"/>
    </div>
    </Router>
  ) 
}

export default App;
