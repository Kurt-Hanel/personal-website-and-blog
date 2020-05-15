import React, { Component } from "react";
import { Menu, Segment, Grid, GridRow, Container } from "semantic-ui-react";
import Link from "next/link";
import styles from "./navbar.module.css";
import { getDisplayName } from "next/dist/next-server/lib/utils";

export default class Navbar extends Component {
  render() {
    const { activeItem, onNavbarChange } = this.props;
    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Container>
            <Link href="/" passHref>
              <Menu.Item header onClick={() => onNavbarChange("Home")}>
                Your Name | Title
              </Menu.Item>
            </Link>
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
          </Container>
        </Menu>
      </Segment>
    );
  }
}
