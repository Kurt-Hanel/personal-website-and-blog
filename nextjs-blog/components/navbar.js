import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import Link from "next/link";
// import styles from "./navbar.module.css";

export default class Navbar extends Component {
  render() {
    const { activeItem, onNavbarChange } = this.props;
    return (
      <Menu pointing secondary>
        <Link href="/" passHref>
          <Menu.Item
            name="Home"
            active={activeItem === "Home"}
            onClick={() => onNavbarChange("Home")}
          />
        </Link>
        <Link href="/writings" passHref>
          <Menu.Item
            name="Writings"
            active={activeItem === "Writings"}
            onClick={() => onNavbarChange("Writings")}
          />
        </Link>
      </Menu>
    );
  }
}
