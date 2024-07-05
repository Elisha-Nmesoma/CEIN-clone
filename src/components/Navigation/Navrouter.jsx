import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbarmenu from './NavbarMenu.jsx';
import Shop from './shop';
import Sales from './sales';
import NewArrivals from './new-arrivals.jsx';
import Journal from './journal';


export default function Navrouter() {
    return (
        //for routing  the nav menu
        <>
            <div>
                <Navbarmenu />
                <Router>
                    <Routes>
                        <Route exact path="/shop" component={Shop} />
                        <Route exact path="/sales" component={Sales} />
                        <Route exact path="/new-arrivals" component={NewArrivals} />
                        <Route exact path="/journal" component={Journal} />
                    </Routes>
                </Router>
            </div>
        </>
    )
}
