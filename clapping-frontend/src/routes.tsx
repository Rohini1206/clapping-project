import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// Import other pages here

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* Define routes for other pages */}
            </Routes>
        </Router>
    );
};

export default AppRoutes;
