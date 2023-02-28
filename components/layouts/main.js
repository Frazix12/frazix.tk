import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelModelLoader from '../voxel-loader'
import Spotify from '../spotify'

const LazyVoxelModel = dynamic(() => import('../voxel'), {
  ssr: false,
  loading: () => <VoxelModelLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Frazix's homepage" />
        <meta name="author" content="Frazix" />

        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Frazix" />

        <meta content="#0e1017" name="theme-color" />
        <meta content="#0e1017" name="msapplication-navbutton-color" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="Frazix's Homepage" />
        <meta
          name="description"
          content="Hello, I'm a full-stack developer from Bangladesh"
        />
        <meta name="copyright" content="Frazix12" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://frazix.tk/" />
        <meta property="og:title" content="Frazix's Homepage" />
        <meta
          property="og:description"
          content="Hello, I'm a full-stack developer from Bangladesh"
        />
        <meta
          property="og:image"
          content="http://res.cloudinary.com/dpu5ywrox/image/upload/v1654273284/bd4qai7c7u05aepc0tfa.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://frazix.tk/" />
        <meta property="twitter:title" content="Frazix's Homepage" />
        <meta
          property="twitter:description"
          content="Hello, I'm a full-stack developer from Bangladesh"
        />
        <meta
          property="twitter:image"
          content="http://res.cloudinary.com/dpu5ywrox/image/upload/v1654273284/bd4qai7c7u05aepc0tfa.png"
        />

        <title>Frazix - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelModel />

        {children}

        <Spotify />
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
