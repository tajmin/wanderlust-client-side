import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './context/AuthProvider';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Home from './Pages/Home/Home/Home';
import TourplanDetails from './Pages/TourplanDetails/TourplanDetails';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/plan-details/:id">
              <TourplanDetails></TourplanDetails>
            </Route>
            <Route path="/booking/:id">

            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
