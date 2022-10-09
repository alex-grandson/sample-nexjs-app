import {
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react'

import MakeOrderTab from '../components/country/makeOrderTab'

/*
 * Страница для пользователей типа "Страна"
 * Разделение на вкладки. Контент каждой вкладки - отдельный компонент
 */
const CountryPage = () => {
  return (
    <Container maxW='container.lg'>
      <Tabs isFitted variant='enclosed' isLazy>
        <TabList>
          <Tab>Статистика</Tab>
          <Tab>Сделать заказ</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>Статистика</p>
          </TabPanel>
          <TabPanel>
            <MakeOrderTab />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  )
}

export default CountryPage
