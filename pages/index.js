import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {
  IoLogoYoutube,
  IoLogoGithub,
  IoFolderOpenOutline,
  IoLogoDiscord
} from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&#39;m a full-stack developer from Bangladesh
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Frazix
          </Heading>
          <p>I am a ( Developer / Designer / Gamer)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/frazix.png"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I am a freelance and a full-stack developer. I have experience working
          with the web,
          <Link href="https://discord.gg/ynWdPzqhdH" target="_blank">
            Discord
          </Link>{' '}
          bot&apos;s and some{' '}
          <Link href="https://www.gnu.org/software/bash/" target="_blank">
            Bash
          </Link>{' '}
          scripts.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" scroll={false} passHref>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
              My Projects
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I Love 💖
        </Heading>
        <Paragraph>Gaming, Coding And listening to music</Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Links 🔗
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Frazix12" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoGithub />}
              >
                @Frazix12
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.youtube.com/CodeWithFrazix" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoYoutube />}
              >
                Code With Frazix
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://discord.gg/ynWdPzqhdH" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoDiscord />}
              >
                Discord Server
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://github.com/craftzdog/craftzdog-homepage"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoFolderOpenOutline />}
              >
                Source
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
