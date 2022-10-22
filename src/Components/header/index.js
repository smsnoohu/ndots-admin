import React from "react";
import styled from "styled-components";

import logo from "Assets/images/logo.svg";

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Logo href="/">
          <img src={logo} alt="nDots" title="nDots" />
        </Logo>
        <Navigation>
          <Menu>
            <List>
              <a href="/">Home</a>
            </List>
            <List>
              <a href="/">About</a>
            </List>
            <List>
              <a href="/">Login</a>
            </List>
          </Menu>
        </Navigation>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.header({
  backgroundColor: "#203656",
  width: "100%",
});

const Container = styled.div({
  display: "flex",
  maxWidth: "1400px",
  margin: "auto",
  padding: "10px",
});

const Logo = styled.a({
  textDecoration: "none",
  img: {
    border: 0,
    maxWidth: "200px",
  },
});

const Navigation = styled.nav({
  marginLeft: "auto",
});

const Menu = styled.ul({
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "flex",
});

const List = styled.li({
  flex: 1,
  fontSize: "1.2rem",
  fontWeight: "500",
  textTransform: "uppercase",
  a: {
    textDecoration: "none",
    color: " #fff",
    padding: "15px",
    display: "inline-block",
    "&:after": {
      position: "absolute",
      content: "|",
    },
  },
});

export default Header;
