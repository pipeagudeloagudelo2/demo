import React from 'react';
import { Routes, Route } from 'react-router';
import Screen1 from '../pages/screen1';import Screen2 from '../pages/screen2';

function RoutingApp() {
    return (
        <Routes>
            <Route path="/Screen1" element={<Screen1 />} />
<Route path="/Screen2" element={<Screen2 />} />

        </Routes>
    );

}

export default RoutingApp;