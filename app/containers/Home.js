import React ,{ Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './actions';

class Home extends Component {

  handlerClick = () =>{
    this.props.dispatch(actions.addOne())
  }

  render() {
    var { number } = this.props;
    //console.log(number)
    return (
      <div>
        <button onClick={this.handlerClick} >Count +1</button>
        <h3> { number } </h3>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state.homeReducer
}




export default connect(mapStateToProps)(Home);
