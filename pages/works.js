import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import phoneUi from '../public/images/works/Phone_ui.png'
import clockUi from '../public/images/works/Clock.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="phoneui"
            title="Phone UI Website"
            thumbnail={phoneUi}
            priority
          >
            A Cool Links Website With A UI of A Phone.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="clockui"
            title="Clock UI Website"
            thumbnail={clockUi}
          >
            A Cool way to show the time with a Website.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
