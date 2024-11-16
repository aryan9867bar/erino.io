import React, { useContext } from 'react';
import ContactForm from '../components/ContactForm';
import ContactTable from '../components/ContactTable';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ThemeContext } from '../App';
import { getContacts, createContact, updateContact, deleteContact } from '../services/contactService';
import { Box, Typography } from '@mui/material';
import { toast } from 'react-toastify';

const Home = () => {
  const [contacts, setContacts] = React.useState([]);
  const [editingContact, setEditingContact] = React.useState(null);
  const { darkMode } = useContext(ThemeContext);

  React.useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const data = await getContacts();
      setContacts(data);
    } catch (error) {
      toast.error('Error fetching contacts!');
      console.error('Error fetching contacts:', error);
    }
  };

  const handleAddOrUpdateContact = async (contact) => {
    try {
      if (editingContact) {
        const updatedContact = await updateContact(contact._id, contact);
        setContacts((prev) =>
          prev.map((c) => (c._id === updatedContact._id ? updatedContact : c))
        );
        setEditingContact(null);
        toast.success('Contact updated successfully!');
      } else {
        const newContact = await createContact(contact);
        setContacts([...contacts, newContact]);
        toast.success('Contact added successfully!');
      }
    } catch (error) {
      toast.error('Error saving contact!');
      console.error('Error saving contact:', error);
    }
  };

  const handleEditContact = (contact) => {
    setEditingContact(contact);
  };

  const handleDeleteContact = async (id) => {
    try {
      await deleteContact(id);
      setContacts((prev) => prev.filter((c) => c._id !== id));
      toast.success('Contact deleted successfully!');
    } catch (error) {
      toast.error('Error deleting contact!');
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <div>
      <Header />
      <Box
        sx={{
          padding: '20px',
          background: darkMode ? '#333' : '#fff',
          minHeight: 'calc(100vh - 160px)',
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: '20px', color: darkMode ? '#fff' : '#000' }}>
          Contact Management Application
        </Typography>
        <ContactForm onSubmit={handleAddOrUpdateContact} contact={editingContact} />
        <ContactTable contacts={contacts} onEdit={handleEditContact} onDelete={handleDeleteContact} />
      </Box>
      <Footer />
    </div>
  );
};

export default Home;
