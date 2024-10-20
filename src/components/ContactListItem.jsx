import React from 'react';
import PropTypes from 'prop-types'; // Adăugăm validarea PropTypes
import styles from './App.module.css'; // Asigură-te că importul este corect

const ContactListItem = ({ contact }) => (
  <li className={styles.contactListItem}> 
    {contact.name}: {contact.phone} 
  </li>
);

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired, // Adaugă id-ul contactului
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired, 
  }).isRequired
};

export default ContactListItem;

