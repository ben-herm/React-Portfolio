import React from "react";
import { Box, Heading, Flex, Text, Button } from "@chakra-ui/core";
import { HamburgerArrow } from 'react-animated-burgers'
const MenuItems = ({ children }) => (
  <Text marginY={{ sm: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

// Note: This code could be better, so I'd recommend you to understand how I solved and you could write yours better :)
const Header = props => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="teal.500"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          Ben Herman
        </Heading>
      </Flex>
      <Box mt="20px" display={{ md: "none"}} onClick={handleToggle}>
      <HamburgerArrow barColor={'white'} buttonWidth={25} isActive={show} />
     </Box>
      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
   
        flexGrow={1}
      >
        <MenuItems>Docs</MenuItems>
        <MenuItems>Examples</MenuItems>
        <MenuItems>Blog</MenuItems>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
        mr='40px'
      >
        <Button bg="transparent" border="1px">
          Create account
        </Button>
      </Box>
    </Flex>
  );
};

export default Header;
