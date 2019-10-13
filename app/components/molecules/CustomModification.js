import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from './actions';

class CustomModification extends Component {
  constructor(props) {
    super(props);

    this.amountToModify = React.createRef();
    this.selectedOption = React.createRef();

    this.dispatch = props.dispatch;
  }

  handlerClickmodifyExactly= () => {
    const modifier = this.selectedOption.current.value;

    const { value } = this.amountToModify.current;

    this.dispatch(actions.modifyExactly(modifier, value));
  }

  render() {
    return (
      <p>
        <select ref={this.selectedOption}>
          <option>More</option>
          <option>Less</option>
        </select>
        <input ref={this.amountToModify} type="number" placeholder="how many?" />
        <button type="button" onClick={this.handlerClickmodifyExactly}>Modify</button>
      </p>
    );
  }
}

CustomModification.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(CustomModification);
