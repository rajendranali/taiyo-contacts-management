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
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Contacts</h2>
      <button
        onClick={handleAddContact}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Add Contact
      </button>
      <div className="bg-white shadow overflow-hidden rounded-lg">
        <ul className="divide-y divide-gray-200">
          {contacts.map(contact => (
            <li key={contact.id} className="py-4 px-4 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{contact.name}</h3>
                <p>{contact.email}</p>
                <p>{contact.phone}</p>
              </div>
              <div>
                <button
                  onClick={() => handleEditContact(contact.id)}
                  className="text-blue-500 hover:text-blue-700 mr-4"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteContact(contact.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactsPage;
