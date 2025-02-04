import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

type formType = {
  phoneNo: string;
  email: string;
  password: string;
};

const Signup = () => {
  let navigate = useNavigate();
  const [userData, setUserData] = useState<formType>({
    phoneNo: '',
    email: '',
    password: '',
  });

  const getInputData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userData.phoneNo === '' || userData.email === '' || userData.password === '') {
      alert('Please fill all fields');
    } else {
      const getData = JSON.parse(localStorage.getItem('user') || '[]');
      const updatedData = [...getData, userData];
      localStorage.setItem('user', JSON.stringify(updatedData));
      alert('Signup successful!');
      navigate('/home');
      setUserData({ phoneNo: '', email: '', password: '' });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white shadow-lg rounded-lg px-10 py-8 w-96">
        <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="number"
              name="phoneNo"
              value={userData.phoneNo}
              onChange={getInputData}
              placeholder="Phone Number"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={getInputData}
              placeholder="Email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={getInputData}
              placeholder="Password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-md"
          >
            Sign Up
          </button>
          <div className="text-center mt-4">
            <p>
              Already have an account? <Link to="/" className="text-blue-500 font-semibold">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
