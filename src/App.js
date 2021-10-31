
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './context/AuthProvider';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Home from './Pages/Home/Home/Home';
import ConfirmBooking from './Pages/ConfirmBooking/ConfirmBooking';
import MyOrders from './Pages/MyOrders/MyOrders';
import ManageOrders from './Pages/ManageOrders/ManageOrders';
import NewTourPlan from './Pages/NewTourPlan/NewTourPlan';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Footer from './Pages/Shared/Footer/Footer';

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
            <PrivateRoute path="/confirm-booking/:id">
              <ConfirmBooking></ConfirmBooking>
            </PrivateRoute>
            <PrivateRoute path="/my-orders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/manage-orders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute path="/add-new-plan">
              <NewTourPlan></NewTourPlan>
            </PrivateRoute>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
