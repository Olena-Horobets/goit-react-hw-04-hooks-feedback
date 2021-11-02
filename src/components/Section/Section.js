import s from '../Section/Section.module.css';
import { Component } from 'react';

class Section extends Component {
  render() {
    return (
      <div className={s.section}>
        {this.props.title && <h1 className={s.title}>{this.props.title}</h1>}
        {this.props.children}
      </div>
    );
  }
}

export { Section };
