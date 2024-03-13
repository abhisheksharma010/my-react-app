import React from 'react';

import { Link, navigate } from 'react-router-dom';

const Dashboard = () => {


    const handleLogin = () => {
        navigate("/login");
    }

    const handleRegister = () => {
        navigate("/register");
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleRegister}>Register</button>
        </div>
    )
}

export default Dashboard;
