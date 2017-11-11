import React, { Component } from 'react';
import { C1, C2, C3, C4 } from '../style/ci/color';
import disableTextSelectionStyle from '../style/disableTextSelection';
import m from 'di_merge';

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

  getContainerStyle(style = {}) {
    const { hover } = this.state;
    return m({
      fontFamily: "Monospace",
      display:"block",
      margin: "auto",
      fontSize: "180%",
      border: "4px solid " + (hover ? C1 : C2),
      backgroundColor: hover ? C3 : C4,
      color: hover ? C1 : C2,
      cursor: hover ? "pointer" : null
    }, disableTextSelectionStyle, style);
  }

  render() {
    const { children, style } = this.props;
    return (
      <div
        style={this.getContainerStyle(style)}
        onClick={this.handleClick}
        onMouseOver={this.handleMouseOver}
        onMouseLeave={this.handleMouseLeave}
      >
        {children}
      </div>
    );
  }
}

export default Button;
