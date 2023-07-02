import React from 'react';
import propTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ value, onFilterChange }) => (
  <div className={css.filter}>
    <h3 className={css.title}>Find contacts by name</h3>
    <input
      className={css.input}
      type="text"
      value={value}
      onChange={onFilterChange}
    />
  </div>
);
Filter.propTypes = {
  value: propTypes.string.isRequired,
  onFilterChange: propTypes.func.isRequired,
};
export default Filter;
