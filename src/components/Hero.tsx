import { Flex, Heading, Text, Box } from "@chakra-ui/core";
import { useEffect, useState } from "react";
import { CSSTransition, Transition } from "react-transition-group";

export const Hero = ({ title }) => {
  const [inProp, setInProp] = useState(false);
  const duration = 1000;
  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out, margin-top ${duration}ms ease-in-out`,
    opacity: 0,
  };
  const transitionStyles = {
    entering: { opacity: 1, marginTop: 100 },
    entered: { opacity: 1, marginTop: 100 },
    exiting: { opacity: 0, marginTop: 0 },
    exited: { opacity: 0, marginTop: 0 },
  };

  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <Transition in={inProp} timeout={duration}>
      {(state) => (
        <Flex
          flexDirection="column"
          mr="auto"
          ml={10}
          // zIndex={1}
          mt={"15%"}
          width={"100%"}
          justifyContent="flex-start"
          alignItems="center"
          height="75vh"
          style={{ ...defaultStyle, ...transitionStyles[state] }}
        >
          <Box>
            <Heading
              style={
                {
                  // alignSelf: "flex-start",
                  // marginLeft: 40,
                }
              }
              paddingY={5}
              fontSize="4vw"
            >
              {title}
            </Heading>

            <Text
              style={{ alignSelf: "flex-start", fontSize: 20, marginLeft: 40 }}
            >
              {`I am a Full-Stack developer with a web and mobile background.`}
            </Text>
          </Box>
        </Flex>
      )}
    </Transition>
  );
};

Hero.defaultProps = {
  title: "Ben Herman - Web Developer",
};
