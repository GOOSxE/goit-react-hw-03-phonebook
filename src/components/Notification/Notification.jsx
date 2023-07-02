import React from 'react';
import propTypes from 'prop-types';
import css from './Notification.module.css';
// ? // Компонент нотифікацій якщо контактів ще немає ;
const Notification = ({ message = 'There is no contacts' }) => (
  <h4 className={css.notification}>{message}</h4>
);
Notification.propTypes = {
  message: propTypes.string.isRequired,
};
export default Notification;
