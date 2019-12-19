import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import { withRouter } from "next/router";
import App from "next/app";

import createStore from "../redux/store/index";

class MyApp extends App {
  render() {
    const { Component, pageProps, router, store } = this.props;
    return (
      <Provider store={store}>
        <h1>soy el appjs papurru</h1>
        <Component router={router} {...pageProps} />
      </Provider>
    );
  }
}

export default withRedux(createStore)(withRouter(MyApp));
