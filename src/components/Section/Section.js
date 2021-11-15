import s from '../Section/Section.module.css';

import PropTypes from 'prop-types';

function Section({ styleClass, title = '', children = null }) {
  return (
    <div className={s[styleClass]}>
      {title && <h2 className={s.title}>{title}</h2>}
      {children}
    </div>
  );
}

Section.propTypes = {
  styleClass: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export { Section };
