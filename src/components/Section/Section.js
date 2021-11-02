import s from '../Section/Section.module.css';

import PropTypes from 'prop-types';
import { Component } from 'react';

class Section extends Component {
  render() {
    return (
      <div className={s[this.props.class]}>
        {this.props.title && <h2 className={s.title}>{this.props.title}</h2>}
        {this.props.children}
      </div>
    );
  }
}

Section.propTypes = {
  class: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export { Section };
