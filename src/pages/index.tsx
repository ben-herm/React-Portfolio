import {
  Link as ChakraLink,
  Text,
  Code,
  Icon,
  List,
  ListIcon,
  ListItem,
  Image,
  Box,
} from "@chakra-ui/core";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import transitionHoc from "../components/animations/transitionsHoc";
import React from "react";


const Index = () => (
  <>
    <Container>
      <Hero />
      <DarkModeSwitch />
      <CTA />
    </Container>
  </>
);

export default Index;
