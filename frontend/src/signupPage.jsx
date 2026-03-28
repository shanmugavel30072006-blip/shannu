import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        alert("🎉 Success! User saved in MongoDB Compass.");
      } else {
        alert("❌ Fail: " + data.error);
      }
    } catch (error) {
      alert("Backend is offline. Make sure 'npm run dev' is running in the backend folder.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">Create Account</h2>
        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          <input name="username" placeholder="Username" onChange={handleChange} className="p-3 border rounded-xl" required />
          <input name="email" type="email" placeholder="Email" onChange={handleChange} className="p-3 border rounded-xl" required />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} className="p-3 border rounded-xl" required />
          <button type="submit" className="bg-blue-600 text-white p-3 rounded-xl font-bold hover:bg-blue-700">Sign Up</button>
        </form>
        <Link to="/" className="block text-center mt-4 text-slate-500 underline">Back to Home</Link>
      </div>
    </div>
  );
};

export default SignupPage;