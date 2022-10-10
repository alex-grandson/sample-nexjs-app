import {
  Button,
  Code,
  Grid,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'

import VendorService from '../../http/vendorAPI'
import { Context } from '../../pages/_app';

const MakeOrderTab = () => {
  const [orders, setOrders] = useState(undefined)
  const { auth } = useContext(Context)
  const [choosenOrder, setChoosenOrder] = useState(undefined)
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    if (!orders) {
      VendorService.getOrdersByVendorId(auth.id)
        .then((response) => {
          setOrders(response.data.res)
        })
        .catch((err) => console.error(err))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Grid>

      <Heading mb={8}>Доступные заказы</Heading>
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>Заказчик</Th>
              <Th>Машина</Th>
              <Th>Количество</Th>
              <Th>Тип заказа</Th>
              <Th>Действие</Th>
            </Tr>
          </Thead>
          <Tbody>
            {orders &&
              orders.map((order, idx) => {
                return (
                  <Tr key={idx}>
                    <Td>{order.country_name}</Td>
                    <Td>{order.model_name}</Td>
                    <Td>{order.quantity}</Td>
                    <Td>{order.order_type}</Td>
                    <Td>
                      <Button
                        onClick={() => {
                          setChoosenOrder(idx)
                          onOpen()
                        }}
                      >
                        Принять
                      </Button>
                    </Td>
                  </Tr>
                )
              })}
          </Tbody>
        </Table>
      </TableContainer>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Сделать заказ</ModalHeader>
          <ModalCloseButton />
          {choosenOrder != undefined ? (
            <ModalBody>
              <Text>
                {/*Модель: <Code>{orders[choosenOrder].name}</Code>*/}
              </Text>
            </ModalBody>
          ) : (
            <Text>Вы пока ничего не выбрали</Text>
          )}

          <ModalFooter>
            <Button colorScheme='red' variant='ghost' mr={3} onClick={onClose}>
            Отклонить
            </Button>
            <Button colorScheme='green' onClick={() => {
              console.log('choosenOrder', choosenOrder)
              console.log('orders', orders)
              console.log('orders[choosenOrder].order_id', orders[choosenOrder].order_id)
              VendorService.doOrder(orders[choosenOrder].order_id).then((r) => console.log(r)).catch((err) => console.log(err))
            }}>Подтвердить</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Grid>
  )
}

export default MakeOrderTab
