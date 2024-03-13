import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from './useContext'; // Import UserContext from correct path

const Login = () => {
    const [phoneOwnerName, setPhoneOwnerName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setPhoneNumber } = useContext(UserContext); // Destructure setPhoneNumber from context

    const handleSubmit = (e) => {
        e.preventDefault();
        // Assuming you want to set the phone number in the context
        setPhoneNumber(phoneOwnerName);
        navigate("/dashboard");
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h4 className="title">LOGIN FORM</h4>

                <div className="mb-3">
                    <label htmlFor="exampleInputPhoneOwnerName" className="form-label">Phone Owner Name</label>
                    <input
                        type="text"
                        value={phoneOwnerName}
                        onChange={(e) => setPhoneOwnerName(e.target.value)}
                        className="form-control"
                        id="exampleInputPhoneOwnerName"
                        placeholder="Enter Your Phone Owner Name"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Enter Your Password"
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary login">
                    LOGIN
                </button>

            </form>
        </div>
    );
};

export default Login;
