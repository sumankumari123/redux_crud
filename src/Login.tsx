import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

type formType = { 
  email: string; 
  password: string;
};

const Login = () => {
  let navigate = useNavigate();
  const [userData, setUserData] = useState<formType>({
    email: '',
    password: '',
  });
  const [error, setError] = useState<string>('');

  const getInputData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userData.email === '' || userData.password === '') {
      alert('Please fill all fields');
    } else {
      const getData = JSON.parse(localStorage.getItem('user') || '[]');
      let isValidUser = false;
      getData.forEach((value: any) => {
        if (userData.email === value.email && userData.password === value.password) {
          alert('Login Successfully!');
          navigate('/home');
          isValidUser = true;
        }
      });
      if (!isValidUser) setError('Invalid Email and Password!');
      setUserData({ email: '', password: '' });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white shadow-lg rounded-lg px-10 py-8 w-96">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
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
            Login
          </button>
          <div className="text-center mt-4">

            <p className="mt-2">
              Don't have an account? <Link to="/signup" className="text-blue-500 font-semibold">Sign up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
