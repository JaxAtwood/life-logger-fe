//Packages
import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

//Components
import Header from "./components/dashboard/header/Header"
import { createUser, fetchUser, /*updateUser*/ } from "./actions/index";
import PrivateRoute from "./PrivateRoute"
import Dashboard from "./components/dashboard/Dashboard";
import LandingPage from "./components/landing page/LandingPage";
import Footer from "./components/dashboard/Footer";
import Register from "./components/landing page/Registraition";
import CreateEventForm from "./components/events/CreateEvent";
import LoadEvents from "./components/events/LoadEvents";

//Style
import "./App.css";
import { AppContainer } from "./styles/Styles";


 
function App() {
  const token = localStorage.token;

  return (
    <AppContainer>
      <Header />
      
      {!token? <Route exact path = "/" component = {LandingPage}/> :  null}

      <PrivateRoute exact path = "/" component = {Dashboard}/>

      <Route path = "/Register" component = {Register} />

      <Route path = "/addevent" component = {CreateEventForm} />

      <Route path = "/events" component = {LoadEvents} />

      <Footer />
    </AppContainer>
  );
}



const mapStateToProps = state => {
  return {
    users: state.users,
    events: state.events
  };
};

export default connect(mapStateToProps, { fetchUser, createUser })(App);
