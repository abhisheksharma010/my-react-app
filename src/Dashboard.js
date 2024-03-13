import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {

    return (
        <div>
            <h1>Dashboard</h1>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/register"><button>Register</button></Link>
        </div>
    )
}

export default Dashboard;
