import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

import ContactsPage from './pages/ContactsPage';


import MapPage from './pages/MapPage';
import Layout from './components/Layout';
import AddContactPage from './pages/AddcontactPage';
import EditContactPage from './pages/EditContactPage';
import ChartsPage from './pages/ChartsPage';


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<ContactsPage />} />
            <Route path="/add-contact" element={<AddContactPage />} />
            <Route path="/edit-contact/:id" element={<EditContactPage />} />
            <Route path="/charts" element={<ChartsPage/>} />
            <Route path="/map" element={<MapPage />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
