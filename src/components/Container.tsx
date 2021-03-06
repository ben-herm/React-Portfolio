import { Flex, useColorMode, Box } from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import BackgroundVideo from "./backgroundVideo";

export const Container = ({ children }) => {
  const { colorMode } = useColorMode();
  const [xMain, setxMain] = useState(0);
  const [yMain, setyMain] = useState(0);
  const [yTrailing, setyTrailing] = useState(0);
  const [xTrailing, setxTrailing] = useState(0);

  useEffect(() => {
    setyTrailing(xMain);
    setxTrailing(yMain);
  }, [xMain, yMain]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setxMain(clientX);
    setyMain(clientY);
  };

  const bgColor = { light: "gray.50", dark: "gray.700" };

  const color = { light: "red.200", dark: "gray.200" };
  return (
    <>
      <Flex
        onMouseMove={(e) => handleMouseMove(e)}
        mx="auto"
        // bg={bgColor[colorMode]}
        color={color[colorMode]}
        minHeight={"800px"}
      >
        {/* <Box
          className="cursor"
          style={{
            left: xMain,
            top: yMain,
            position: "fixed",
            height: "20px",
            width: "20px",
            backgroundColor: "transparent",
            borderColor:"black",
            borderWidth:1,
            borderRadius: "50%",
            transform: `translateX(-50%) translateY(-50%)`,
            pointerEvents: "none",
          }}
        /> */}
        <BackgroundVideo />
        {children}
      </Flex>
    </>
  );
};
