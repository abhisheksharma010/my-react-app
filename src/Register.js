import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [phoneOwnerName, setPhoneOwnerName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/dashboard");
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h4 className="title">REGISTER FORM</h4>

                <div className="mb-3">
                    <label htmlFor="exampleInputUsername" className="form-label">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="form-control"
                        id="exampleInputUsername"
                        placeholder="Enter Username"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputCompanyName" className="form-label">Company Name</label>
                    <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="form-control"
                        id="exampleInputCompanyName"
                        placeholder="Enter Company Name"
                        required
                    />
                </div>
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

                <button type="submit" className="btn btn-primary register">
                    REGISTER
                </button>

            </form>
        </div>
    );
};

export default Register;
