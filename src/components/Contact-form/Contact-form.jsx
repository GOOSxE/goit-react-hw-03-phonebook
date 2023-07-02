import React from 'react';
import propTypes from 'prop-types';
import css from './Contact-form.module.css';
import { nanoid } from 'nanoid';
export default class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };
  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    const contact = {
      name: this.state.name,
      number: Number.parseInt(this.state.number),
      id: nanoid(),
    };
    this.props.onContactAdding(contact);
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label className={css.label}>
          <h2 className={css.title}>Name</h2>
          <input
            className={css.input}
            onChange={this.handleInputChange}
            maxLength={22}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
          ></input>
        </label>
        <label className={css.label}>
          <h2 className={css.title}>Number</h2>
          <input
            className={css.input}
            onChange={this.handleInputChange}
            maxLength={22}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
          />
        </label>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
ContactForm.propTypes = {
  onContactAdding: propTypes.func.isRequired,
};
