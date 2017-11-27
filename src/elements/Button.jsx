import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getContainerStyle } from '../styles/elements/Button';

class Button extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.state = {hover: false};
  }

  handleMouseOver() {
    this.setState({hover: true});
  }

  handleMouseLeave() {
    this.setState({hover: false});
  }

  handleClick() {
    this.props.onClick();
  }

  render() {
    const { children } = this.props;
    return (
      <div
        style={getContainerStyle(this.props, this.state)}
        onClick={this.handleClick}
        onMouseOver={this.handleMouseOver}
        onMouseLeave={this.handleMouseLeave}
      >
        {children}
      </div>
    );
  }
}

Button.propTypes = {
  style: PropTypes.object
};

export default Button;
