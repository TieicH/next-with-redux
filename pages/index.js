import React, { Component } from "react";
import { connect } from "react-redux";
import Router from "next/router";
import * as actions from "../redux/actions/action";

class Page extends Component {
  handleButtonApachurrame = () => {
    this.props.changeReduxText("u can' see me but i can see u");
  };

  hadleRoute = () => {
    const aaa = this.props;
    Router.push({
      pathname: "/another",
      query: { name: "Someone" }
    });
  };

  render() {
    const { state } = this.props;
    return (
      <div>
        <div>Prop from Redux </div>
        <div>Prop from getInitialProps {state} </div>
        <button onClick={this.handleButtonApachurrame}>apachurrame</button>
        <button onClick={this.hadleRoute}>cambiar de pagina boludo</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { state: state.test.textPrueba };
};

const mapDispatchToProps = dispatch => {
  return {
    changeReduxText: text => dispatch(actions.changeText(text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
