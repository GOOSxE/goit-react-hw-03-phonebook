import React from 'react';
import propTypes from 'prop-types';
import css from './Section.module.css';
// ? // Компонент секції в який огортаються інші компоненти, та який приймає потрібний тайтл ;
const Section = ({ title = 'Section title', children }) => (
  <section className={css.section}>
    <h2 className={css.title}>{title}</h2>
    {children}
  </section>
);
Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node,
};
export default Section;
