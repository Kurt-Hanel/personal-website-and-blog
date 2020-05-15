import React, { Component, createRef } from "react";
import Navbar from "../components/navbar";
import "../styles/global.css";
import "semantic-ui-css/semantic.min.css";
import App from "next/app";
import { Sticky } from "semantic-ui-react";

export default class MyApp extends App {
  contextRef = createRef();

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
      <div ref={this.contextRef}>
        <Sticky context={this.contextRef}>
          <Navbar
            activeItem={activeNavbarItem}
            onNavbarChange={this.handleNavbarChange}
          ></Navbar>
        </Sticky>
        <Component {...pageProps} />
      </div>
    );
  }
}
