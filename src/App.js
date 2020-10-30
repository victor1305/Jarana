import React, { Fragment } from 'react';
import { Switch, Route } from "react-router-dom"
import NavBar from './components/navbar/Navbar';
import Home from './components/home/Home'
import Menu from './components/menu/Menu'
import AboutUs from './components/aboutUs/AboutUs'
import Footer from './components/footer/Footer'
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    <Fragment>
      <NavBar/>
      <Switch>
        <Route exact path = "/" render = { () => <Home />} />
        <Route path = "/nuestra-carta" render = { () => <Menu />} />
        <Route path = "/quienes-somos" render = { () => <AboutUs />} />
      </Switch>
      <Footer/>
    </Fragment>
  );
}

export default App;
