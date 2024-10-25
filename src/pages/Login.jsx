import React from 'react';

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-lg">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">Login User</h2>
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          />
          <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
