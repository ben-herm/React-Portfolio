import { Flex, Heading } from '@chakra-ui/core'

export const Hero = ({ title }) => (
  <Flex mr='auto' justifyContent="center" alignItems="center" height="85vh">
    <Heading fontSize="4vw">{title}</Heading>
  </Flex>
)

Hero.defaultProps = {
  title: 'Ben Herman - Web Developer',
}
