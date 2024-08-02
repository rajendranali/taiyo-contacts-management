import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../store/contactsSlice';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store/store';

const ContactsPage: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddContact = () => {
    navigate('/add-contact');
  };

  const handleEditContact = (id: number) => {
    navigate(`/edit-contact/${id}`);
  };

  const handleDeleteContact = (id: number) => {
    dispatch(removeContact(id));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Contacts</h2>
      <button
        onClick={handleAddContact}
        className="bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition-colors duration-300 mb-6"
      >
        Add Contact
      </button>
      {contacts.length === 0 ? (
        <div className="bg-white shadow-md rounded-lg p-6 text-center text-gray-600">
          <p className="text-lg font-medium">No contacts available</p>
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg">
          <ul className="divide-y divide-gray-300">
            {contacts.map(contact => (
              <li key={contact.id} className="py-6 px-6 flex justify-between items-center hover:bg-gray-50 transition-colors duration-300">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{contact.name}</h3>
                  <p className="text-gray-600">{contact.email}</p>
                  <p className="text-gray-600">{contact.phone}</p>
                </div>
                <div className="space-x-4">
                  <button
                    onClick={() => handleEditContact(contact.id)}
                    className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteContact(contact.id)}
                    className="text-red-600 hover:text-red-700 transition-colors duration-300"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ContactsPage;
