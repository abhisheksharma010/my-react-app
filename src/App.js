import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import Login from './Login';
import Register from './Register';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [phones, setPhones] = useState([
    { phoneName: "Phone A", phoneImg: "https://media.istockphoto.com/id/1327617572/photo/blue-phone-icon-or-contact-website-mobile-symbol-isolated-on-classic-communication-telephone.webp?b=1&s=170667a&w=0&k=20&c=E8C4ZsO8Hq2_a8Pdr-ez0h3fOUnVz0eYZGA2IrmPvHs=", phoneYear: 2020, uuid: uuidv4() },
    { phoneName: "Phone B", phoneImg: "https://media.istockphoto.com/id/1327617572/photo/blue-phone-icon-or-contact-website-mobile-symbol-isolated-on-classic-communication-telephone.webp?b=1&s=170667a&w=0&k=20&c=E8C4ZsO8Hq2_a8Pdr-ez0h3fOUnVz0eYZGA2IrmPvHs=", phoneYear: 2021, uuid: uuidv4() },
    { phoneName: "Phone C", phoneImg: "https://media.istockphoto.com/id/1327617572/photo/blue-phone-icon-or-contact-website-mobile-symbol-isolated-on-classic-communication-telephone.webp?b=1&s=170667a&w=0&k=20&c=E8C4ZsO8Hq2_a8Pdr-ez0h3fOUnVz0eYZGA2IrmPvHs=", phoneYear: 2022, uuid: uuidv4() },
    { phoneName: "Phone D", phoneImg: "https://media.istockphoto.com/id/1327617572/photo/blue-phone-icon-or-contact-website-mobile-symbol-isolated-on-classic-communication-telephone.webp?b=1&s=170667a&w=0&k=20&c=E8C4ZsO8Hq2_a8Pdr-ez0h3fOUnVz0eYZGA2IrmPvHs=", phoneYear: 2023, uuid: uuidv4() },
    { phoneName: "Phone E", phoneImg: "https://media.istockphoto.com/id/1327617572/photo/blue-phone-icon-or-contact-website-mobile-symbol-isolated-on-classic-communication-telephone.webp?b=1&s=170667a&w=0&k=20&c=E8C4ZsO8Hq2_a8Pdr-ez0h3fOUnVz0eYZGA2IrmPvHs=", phoneYear: 2024, uuid: uuidv4() },
    { phoneName: "Phone F", phoneImg: "https://media.istockphoto.com/id/1327617572/photo/blue-phone-icon-or-contact-website-mobile-symbol-isolated-on-classic-communication-telephone.webp?b=1&s=170667a&w=0&k=20&c=E8C4ZsO8Hq2_a8Pdr-ez0h3fOUnVz0eYZGA2IrmPvHs=", phoneYear: 2025, uuid: uuidv4() },
    { phoneName: "Phone G", phoneImg: "https://media.istockphoto.com/id/1327617572/photo/blue-phone-icon-or-contact-website-mobile-symbol-isolated-on-classic-communication-telephone.webp?b=1&s=170667a&w=0&k=20&c=E8C4ZsO8Hq2_a8Pdr-ez0h3fOUnVz0eYZGA2IrmPvHs=", phoneYear: 2026, uuid: uuidv4() }
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home phones={phones} setPhones={setPhones} />}
        />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
