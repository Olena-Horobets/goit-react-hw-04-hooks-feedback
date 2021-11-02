import s from '../Button/Button.module.css';
import { Component } from 'react';

class Button extends Component {
  render() {
    const { name } = this.props;
    return (
      <button
        type="button"
        name={name}
        className={s.option}
        onClick={this.props.onClick}
      >
        {name}
      </button>
    );
  }
}

export { Button };
