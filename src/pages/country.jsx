import {
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react'

import MakeOrderTab from '../components/country/makeOrderTab'
import MakeSubsidy from '../components/country/makeSubsidy';
import MyOrders from '../components/country/myOrders'

/*
 * Страница для пользователей типа "Страна"
 * Разделение на вкладки. Контент каждой вкладки - отдельный компонент
 */
const CountryPage = () => {
  return (
    <Container maxW='container.lg'>
      <Tabs isFitted variant='enclosed' isLazy>
        <TabList>
          <Tab>Субсидии</Tab>
          <Tab>Сделать заказ</Tab>
          <Tab>Мои заказы</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <MakeSubsidy />
          </TabPanel>
          <TabPanel>
            <MakeOrderTab />
          </TabPanel>
          <TabPanel>
            <MyOrders />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  )
}

export default CountryPage
