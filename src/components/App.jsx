import React, { Component } from 'react';
import { nanoid } from 'nanoid';
// import Phonebook from './Phonebook/Phonebook';
// import Contacts from './Contacts/Contacts';
import scss from './Phonebook/phonebook.module.scss';

class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Amerigo W', number: '0995232' },
      { id: nanoid(), name: 'Bill C', number: '0995232' },
      { id: nanoid(), name: 'Smidth H', number: '0995232' },
      { id: nanoid(), name: 'Sparrow J', number: '0995232' },
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  removeContact(id) {
    this.setState(({ contacts }) => {
      const newContacts = contacts.filter(contact => contact.id !== id);
      return { contacts: newContacts };
    });
  }

  isDublicate(name, number) {
    const dublicateName = name.toLowerCase();
    const dublicateNumber = number;
    const { contacts } = this.state;
    const result = contacts.find(({ name, number }) => {
      return name.toLowerCase() === dublicateName && number === dublicateNumber;
    });

    return Boolean(result);
  }

  addContact = e => {
    e.preventDefault();

    const { name, number } = this.state;
    if (this.isDublicate(name, number)) {
      return alert(`${name} with number: ${number} is already ixist`);
    }

    this.setState(prevState => {
      const { name, contacts, number } = prevState;

      const newContact = { id: nanoid(), name, number };

      return { contacts: [newContact, ...contacts], name: '', number: '' };
    });
  };

  getFilteredContacts() {
    const { filter, contacts } = this.state;
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    const result = contacts.filter(({ name, number }) => {
      return (
        name.toLowerCase().includes(normalizedFilter) ||
        number.toLowerCase().includes(normalizedFilter)
      );
    });
    return result;
  }

  render() {
    const { name, number } = this.state;
    const { handleChange, addContact } = this;
    const contacts = this.getFilteredContacts();

    const contactsList = contacts.map(({ id, name, number }) => {
      return (
        <li key={id}>
          {name}. Number : {number}
          <button onClick={() => this.removeContact(id)} type="button">
            Delete
          </button>
        </li>
      );
    });

    return (
      <>
        <div className={scss.wrapper}>
          <h2>Phonebook</h2>
          <form action="" onSubmit={addContact}>
            <label>
              Name
              <input
                onChange={handleChange}
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
            <label>
              Number
              <input
                onChange={handleChange}
                type="tel"
                name="number"
                value={number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </label>
            <button type="submit">Add contact</button>
          </form>
        </div>
        <div className={scss.wrapper}>
          <label>Filter contacts</label>
          <input
            name="filter"
            onChange={handleChange}
            placeholder="Filter contacts"
          />
          <div>
            <ol>{contactsList}</ol>
          </div>
        </div>
      </>
    );
  }
}

export default App;
