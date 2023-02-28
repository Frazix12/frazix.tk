import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      {new Date().getFullYear()} Made With 💖 And JS.
    </Box>
  )
}

export default Footer
