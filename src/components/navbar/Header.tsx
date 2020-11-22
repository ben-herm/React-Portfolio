import React, { useState } from "react";
import {
  Box,
  Heading,
  Flex,
  Text,
  Link,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/core";
import { Form, FormControl } from "@chakra-ui/react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import { HamburgerArrow } from "react-animated-burgers";
const MenuItems = ({ children }) => (
  <Text marginY={{ sm: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

// Note: This code could be better, so I'd recommend you to understand how I solved and you could write yours better :)
const Header = (props) => {
  const [show, setShow] = useState(false);
  const { colorMode } = useColorMode();
  const handleToggle = () => setShow(!show);

  const color = { light: "black.400", dark: "gray.400" };
  const bgColor = { light: "transparent", dark: "transparent" };
  const value = useColorModeValue("red.200", "gray.200");
  const value2 = useColorModeValue("gray.200", "gray.600");
  return (
    <Flex
      as="nav"
      align="center"
      justify="start"
      wrap="wrap"
      padding="1.5rem"
      color={color[colorMode]}
      bg={bgColor[colorMode]}
      // bg="gray.600"
      // color="white"
      {...props}
    >
      <Flex mr={5}>
        <Heading color={value} as="h1" size="lg" letterSpacing={"-.1rem"}>
          Ben Herman
        </Heading>
      </Flex>
      <Box
        style={{ position: "absolute", right: 60, top:-10 }}
        mt="20px"
        display={{ md: "none" }}
        onClick={handleToggle}
      >
        <HamburgerArrow barColor={"white"} buttonWidth={25} isActive={show} />
      </Box>
      <Flex display={{ sm: show ? "block" : "none", md: "block" }}>
        <Navbar bg="transparent">
          <Nav className="mr-auto">
            <Nav.Link className="one" href="#home">
              <Text color={value}>My Projects</Text>
            </Nav.Link>
            <Nav.Link className="two" href="#features">
              <Text color={value}>My Work</Text>
            </Nav.Link>
            <Box background={value2} className="temp" />
          </Nav>
        </Navbar>
      </Flex>

      <Box
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
        mr="40px"
      ></Box>
    </Flex>
  );
};

export default Header;
