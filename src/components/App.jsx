import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MEDIA_DEVICE_DESKTOP, MEDIA_STORE } from 'di_media_device';

import incAction from '../actions/inc';
import changeAction from '../actions/change';
import { SKELETON_STORE } from '../constants';
import { C1, C2 } from '../style/ci/color';

import Button from '../elements/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.interval = window.setInterval(this.props.incAction, 500);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  handleClick() {
    this.props.changeAction({done: 0});
  }
  getContainerStyle(style) {
    return {
      fontFamily: "Monospace",
      width: "200px",
      display:"block",
      margin: "auto",
      fontSize: this.props.width > 700 ? "250%" : "180%",
      textAlign: "center",
      color: this.props.done % 2 ? C1 : C2
    };
  }
  getButtonStyle() {
    return {
      fontSize: "120%",
      fontWeight: "bold",
      borderRadius: "3px"
    };
  }
  getNameStyle() {
    return {
      fontWeight: "bold",
      display: "block"
    };
  }
  getDoneStyle() {
    return {
      padding: "10px",
      display: "block",
      fontSize: "150%"
    };
  }

  render() {
    const { name, done, title } = this.props;
    return (
      <div style={this.getContainerStyle()}>
        <span style={this.getNameStyle()}>{name}</span>
        <span style={this.getNameStyle()}>{title}</span>
        <span style={this.getDoneStyle()}>{done}</span>
        <Button style={this.getButtonStyle()} onClick={this.handleClick}>reset</Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state[SKELETON_STORE].get("name"),
    title: state[SKELETON_STORE].get("title"),
    done: state[SKELETON_STORE].get("done"),
    width: state[MEDIA_STORE].get("device").width
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changeAction,
    incAction
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
