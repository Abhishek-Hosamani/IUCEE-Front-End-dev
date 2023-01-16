import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About/About';
import Home from '../pages/Home/Home';
import { ROUTES } from './RouterConfig';
import Navbar from '../components/Navbar/Navbar'
import Event from '../pages/Event/Event';
const Router = () => {

    const RouteWithRole = ({ Element }) => {
        return (
          <>
          <Navbar/>
            {/* <Element/> */}
          <Event/>
          </>
        );
      }

  return (
    <div>
        <Routes>
            <Route exact path={ROUTES.Home} element={<RouteWithRole Element={Home} />}></Route>
            <Route exact path={ROUTES.About} element={<RouteWithRole Element={About} />}></Route>
            <Route exact path={ROUTES.Navbar} element={<RouteWithRole Element={Navbar} />}></Route>
            <Route exact path={ROUTES.Event} element={<RouteWithRole Element={Event} />}></Route>
        </Routes>
    </div>
  )
}

export default Router