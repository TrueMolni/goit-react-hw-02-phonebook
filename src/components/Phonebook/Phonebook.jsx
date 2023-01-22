import PropTypes from 'prop-types';
// import scss from './contacts.module.scss';

function Phonebook() {
  return (
    <>
      <h2></h2>
      <form action="">
        <label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    </>
  );
}

export default Phonebook;

// Contacts.propTypes = {};
