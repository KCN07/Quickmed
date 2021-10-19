import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import NotFound from "./Pages/NotFound/NotFound";
import Home from "./Pages/Home/Home/Home";
import Schedule from "./Pages/Schedule/Schedule";
import Detail from "./Pages/Detail/Detail";
import Doctors from "./Pages/Doctors/Doctors";
import About from "./Pages/About/About";
import Login from "./Pages/Account/Login/Login";
import Appointment from "./Pages/Appointment/Appointment";
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./Pages/Account/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
        <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/schedule">
              <Schedule></Schedule>
            </PrivateRoute>
            <PrivateRoute path="/detail/:serviceId">
              <Detail></Detail>
            </PrivateRoute>
            <Route path="/doctors">
              <Doctors></Doctors>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/appointment/:dId">
              <Appointment></Appointment>
            </PrivateRoute>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
