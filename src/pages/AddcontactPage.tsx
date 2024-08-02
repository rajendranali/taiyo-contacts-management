import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../store/contactsSlice';
import { useNavigate } from 'react-router-dom';

const AddContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addContact({ id: Date.now(), name, email, phone }));
    navigate('/');
  };

  const handleBack = () => {
    navigate(-1); // Navigates back to the previous page
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-white rounded shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Add Contact</h2>
        <button
          onClick={handleBack}
          className="text-blue-500 hover:text-blue-600"
        >
          Back
        </button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2 text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring focus:ring-blue-300"
            required
            placeholder="Enter name"
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring focus:ring-blue-300"
            required
            placeholder="Enter email"
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-700">Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring focus:ring-blue-300"
            required
            placeholder="Enter phone number"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
        >
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default AddContactPage;
