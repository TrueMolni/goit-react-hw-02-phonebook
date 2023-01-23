import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Phonebook from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';

let id = nanoid();
console.log(id);

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
