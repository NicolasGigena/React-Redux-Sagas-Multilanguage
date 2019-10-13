import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CustomModification from '../components/molecules/CustomModification';

import * as actions from './actions';

class Home extends Component {
  constructor(props) {
    super(props);

    this.dispatch = props.dispatch;
  }

  handlerClickMoreOne = () => {
    this.dispatch(actions.addOne());
  }

  handlerClickLessOne = () => {
    this.dispatch(actions.lessOne());
  }

  render() {
    const { number } = this.props;
    return (
      <div>
        <button type="button" onClick={this.handlerClickMoreOne}>Count +1</button>
        <h3> { number } </h3>
        <button type="button" onClick={this.handlerClickLessOne}>Count -1</button>
        <CustomModification />
      </div>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func,
  number: PropTypes.number
};


const mapStateToProps = (state) => state.homeReducer;


export default connect(mapStateToProps)(Home);
