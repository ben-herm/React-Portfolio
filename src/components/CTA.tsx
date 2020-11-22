import {
  Link as ChakraLink,
  Button,
  Flex,
  useColorModeValue,
  Text,
} from "@chakra-ui/core";

import { Container } from "./Container";

export const CTA = () => {
  const value = useColorModeValue("red.200", "gray.200");
  return (
    <Container>
      <ChakraLink
        backgroundColor="transparent"
        isExternal
        // href="https://chakra-ui.com"
        flexGrow={1}
        mx={2}
      >
        <Button
          style={{ backgroundColor: "transparent", fontSize: 20 }}
          borderColor="transparent"
          width="100%"
          variant="solid"
          variantcolor="green"
        >
          <Text color={value}>Ben Herman</Text>
        </Button>
      </ChakraLink>

      <ChakraLink
        isExternal
        // href="https://github.com/vercel/next.js/blob/canary/examples/with-chakra-ui"
        flexGrow={3}
        mx={2}
        borderColor="transparent"
        backgroundColor="transparent"
      >
        <Button
          borderColor="transparent"
          width="100%"
          style={{ backgroundColor: "transparent", fontSize: 20 }}
          variant="solid"
          variantcolor="transparent"
        >
          <Text color={value}>Check out my GitHub!</Text>
        </Button>
      </ChakraLink>
    </Container>
  );
};
