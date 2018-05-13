import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { MEDIA_STORE, MEDIA_GET_DEVICE } from 'di_media_device';

import incAction from '../actions/inc';
import resetAction from '../actions/reset';
import changeAction from '../actions/change';
import {
  SKELETON_STORE,
  SKELETON_GET_NAME,
  SKELETON_GET_TITLE,
  SKELETON_GET_DONE
} from '../constants';
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
    this.props.resetAction();
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
    name: state[SKELETON_STORE].get(SKELETON_GET_NAME),
    title: state[SKELETON_STORE].get(SKELETON_GET_TITLE),
    done: state[SKELETON_STORE].get(SKELETON_GET_DONE),
    width: state[MEDIA_STORE].get(MEDIA_GET_DEVICE).width
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changeAction,
    resetAction,
    incAction
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
