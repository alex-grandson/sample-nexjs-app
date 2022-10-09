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
import { useEffect, useState } from 'react'

import VendorService from '../../http/vendorAPI'

const MakeOrderTab = () => {
  const [orders, setOrders] = useState(undefined)
  const [choosenOrder, setChoosenOrder] = useState(undefined)
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    if (!orders) {
      VendorService.getOrders()
        .then((response) => {
          setOrders(response.data.orders)
        })
        .catch((err) => console.error(err))
    }
    // if (orders) {
    //   setModelQuantities(Object(models.map(() => 0)))
    //   console.log('modelQuantities')
    // }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Grid>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Сделать заказ</ModalHeader>
          <ModalCloseButton />
          {choosenOrder != undefined ? (
            <ModalBody>
              <Text>
                Модель: <Code>{orders[choosenOrder].name}</Code>
              </Text>
            </ModalBody>
          ) : (
            <Text>Вы пока ничего не выбрали</Text>
          )}

          <ModalFooter>
            <Button colorScheme='red' variant='ghost' mr={3} onClick={onClose}>
              Отклонить
            </Button>
            <Button colorScheme='green'>Подтвердить</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Heading mb={8}>Доступные заказы</Heading>
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
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
                    <Td>{order.model_id}</Td>
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
    </Grid>
  )
}

export default MakeOrderTab
