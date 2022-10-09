import {
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react'

import AcceptOrderPage from '../components/vendor/acceptOrdertab'

/*
 * Страница для пользователей типа "Производитель"
 * Разделение на вкладки. Контент каждой вкладки - отдельный компонент
 */
const VendorPage = () => {
  return (
    <Container maxW='container.lg'>
      <Tabs isFitted variant='enclosed' isLazy>
        <TabList>
          <Tab>Статистика</Tab>
          <Tab>Взять заказ</Tab>
          <Tab>Изобрести велосипед</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>Статистика</p>
          </TabPanel>
          <TabPanel>
            <AcceptOrderPage />
          </TabPanel>
          <TabPanel>
            <div>Изобрести велосипед</div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  )
}

export default VendorPage
