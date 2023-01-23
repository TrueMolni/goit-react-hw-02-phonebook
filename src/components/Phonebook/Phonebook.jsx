import { Component } from 'react';
import PropTypes from 'prop-types';
import scss from './phonebook.module.scss';

class Phonebook extends Component {
  state = { name: '' };

  handleChange = evt => {
    this.setState({ name: evt.target.value });
  };
  render() {
    const { name } = this.state;
    // return <input type="text" value={name} onChange={this.handleChange} />;
    return (
      <div className={scss.wrapper}>
        <h2>Phonebook</h2>
        <form action="">
          <label>
            Name
            <input
              onChange={this.handleChange}
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}

export default Phonebook;

// Contacts.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired
//   ),
// };
