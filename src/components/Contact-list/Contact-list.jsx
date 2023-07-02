import React from 'react';
import propTypes from 'prop-types';
import css from './Contact-list.module.css';
export default class Contactslist extends React.Component {
  render() {
    return (
      <ul className={css.list}>
        {this.props.contactsData.map(contact => (
          <li className={css.list_item} key={contact.id}>
            {contact.name}: {contact.number}
            <button
              className={css.button}
              onClick={() => this.props.onContactRemoving(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
Contactslist.propTypes = {
  contactsData: propTypes.array.isRequired,
  onContactRemoving: propTypes.func.isRequired,
};
