import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FriendDetail from './pages/FriendDetail';

function App() {
    return (
    <Router>
        <div className="min-h-screen bg-gray-50">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/friend/:id" element={<FriendDetail />} />
        </Routes>
        </div>
    </Router>
    );
}

export default App;