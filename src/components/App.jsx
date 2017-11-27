import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { MEDIA_DEVICE_DESKTOP, MEDIA_STORE } from 'di_media_device';

import incAction from '../actions/inc';
import changeAction from '../actions/change';
import { SKELETON_STORE } from '../constants';
import {
  getContainerStyle,
  getNameStyle,
  getDoneStyle,
  getButtonStyle
} from '../styles/components/App';

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

  render() {
    const { name, done, title } = this.props;
    return (
      <div style={getContainerStyle(this.props)}>
        <span style={getNameStyle()}>{name}</span>
        <span style={getNameStyle()}>{title}</span>
        <span style={getDoneStyle()}>{done}</span>
        <Button style={getButtonStyle()} onClick={this.handleClick}>reset</Button>
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
