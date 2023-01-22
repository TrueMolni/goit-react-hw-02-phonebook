import React, { Component } from 'react';
import Phonebook from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';
class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    const { contacts, name } = this.state;

    return (
      <>
        <Phonebook />
        <Contacts />
      </>
    );
  }
}

export default App;
