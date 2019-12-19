import React, { Component } from "react";
import { connect } from "react-redux";

class Page extends Component {
  render() {
    const { state } = this.props;
    return (
      <div>
        <div>state {state} </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { state: state.test.textPrueba };
};

export default connect(mapStateToProps)(Page);
