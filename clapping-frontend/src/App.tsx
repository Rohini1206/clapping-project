import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserComponent from './components/UserComponent';
import Layout from './components/Layout';

const App: React.FC = () => {
    return (
        <Layout>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<UserComponent />} />
                {/* Add other routes */}
            </Routes>
        </Router>
        </Layout>
    );
};

export default App;
