import {
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react'

import AcceptOrderPage from '../components/vendor/acceptOrdertab'
import Subsidies from '../components/vendor/Subsidies';

/*
 * Страница для пользователей типа "Производитель"
 * Разделение на вкладки. Контент каждой вкладки - отдельный компонент
 */
const VendorPage = () => {
  return (
    <Container maxW='container.lg'>
      <Tabs isFitted variant='enclosed' isLazy>
        <TabList>
          <Tab>Субсидии</Tab>
          <Tab>Взять заказ</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Subsidies />
          </TabPanel>
          <TabPanel>
            <AcceptOrderPage />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  )
}

export default VendorPage
