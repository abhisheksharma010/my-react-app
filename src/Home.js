import React, { useState, useContext } from 'react';
import UserContext from './useContext'; // Import UserContext from correct path

const Home = ({ phones, setPhones }) => {
    const [newPhone, setNewPhone] = useState({
        phoneName: "",
        phoneImg: "",
        phoneYear: "",
        uuid: ""
    });

    const { phoneNumber } = useContext(UserContext); // Destructure setPhoneNumber from context

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPhone(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const addPhone = () => {
        const userOfficialName = prompt("Please enter your official name:");
        if (userOfficialName === phoneNumber) {
            if (newPhone.phoneName && newPhone.phoneImg && newPhone.phoneYear) {
                const updatedPhones = [...phones, { ...newPhone, uuid: Math.random().toString() }];
                setPhones(updatedPhones);
                setNewPhone({
                    phoneName: "",
                    phoneImg: "",
                    phoneYear: "",
                    uuid: ""
                });
            } else {
                alert("Please fill in all fields for the new phone.");
            }
        } else {
            alert("Permission denied. Your official name does not match the owner's name.");
        }
    };

    const deletePhone = (uuid) => {
        const userOfficialName = prompt("Please enter your official name:");
        if (userOfficialName === phoneNumber) {
            if (phones.length > 4) {
                const updatedPhones = phones.filter(phone => phone.uuid !== uuid);
                setPhones(updatedPhones);
            } else {
                alert("There must be more than 4 phones present. You can't delete this phone.");
            }
        } else {
            alert("Permission denied. Your official name does not match the owner's name.");
        }
    };

    return (
        <div>
            <h1>Home</h1>
            <div className="phone-list">
                {phones.map(phone => (
                    <div key={phone.uuid} className="phone-item">
                        <h2>{phone.phoneName}</h2>
                        <img src={phone.phoneImg} alt={phone.phoneName} />
                        <p>Year: {phone.phoneYear}</p>
                        <p>UUID: {phone.uuid}</p>
                        <button onClick={() => deletePhone(phone.uuid)}>Delete</button>
                    </div>
                ))}
            </div>
            <h2>Add New Phone</h2>
            <input
                type="text"
                placeholder="Phone Name"
                name="phoneName"
                value={newPhone.phoneName}
                onChange={handleInputChange}
            />
            <input
                type="text"
                placeholder="Phone Image URL"
                name="phoneImg"
                value={newPhone.phoneImg}
                onChange={handleInputChange}
            />
            <input
                type="number"
                placeholder="Phone Year"
                name="phoneYear"
                value={newPhone.phoneYear}
                onChange={handleInputChange}
            />
            <button onClick={addPhone}>Add Phone</button>
        </div>
    );
}

export default Home;
