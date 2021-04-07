import logo from './logo.svg';
import './App.css';
import Landing from './components/pages/landing.component'
import Login from './components/pages/login.component'
import { Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Route exact path="/">
        <Landing />
      </Route>

      <Route exact path="/login">
        <Login />
      </Route>
      
    </>
  );
}

export default App;
