import React, { Component } from "react";
import Navbar from "../components/navbar";
import "../styles/global.css";
import "semantic-ui-css/semantic.min.css";
import App from "next/app";

const Layout = ({ children }) => <div className="layout">{children}</div>;

export default class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = { activeNavbarItem: "Home" };
    this.handleNavbarChange = this.handleNavbarChange.bind(this);
  }

  handleNavbarChange(value) {
    console.log(value);
    this.setState({ activeNavbarItem: value });
  }

  render() {
    const { Component, pageProps } = this.props;
    const { activeNavbarItem } = this.state;

    return (
      <Layout>
        <Navbar
          activeItem={activeNavbarItem}
          onNavbarChange={this.handleNavbarChange}
        ></Navbar>
        <Component {...pageProps} />
      </Layout>
    );
  }
}
