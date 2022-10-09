import {
  Button,
  Code,
  Grid,
  Heading,
  Input,
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

import CountryService from '../../http/coutryAPI'

const MakeOrderTab = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [models, setModels] = useState(null)
  const [modelQuantities, setModelQuantities] = useState({})
  const [choosenModel, setChoosenModel] = useState(undefined)
  const [orderType, setOrderType] = useState('')

  useEffect(() => {
    if (!models) {
      CountryService.getModels()
        .then((response) => {
          setModels(response.data.models)
        })
        .catch((err) => console.error(err))
    }
    if (models) {
      setModelQuantities(Object(models.map(() => 0)))
      console.log('modelQuantities')
    }
  }, [models])

  useEffect(() => {
    console.log('modelQuantities', modelQuantities)
  }, [modelQuantities])
  return (
    <Grid>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setOrderType('')
          onClose()
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Сделать заказ</ModalHeader>
          <ModalCloseButton />
          {choosenModel != undefined ? (
            <ModalBody>
              <Text>
                Модель: <Code>{models[choosenModel].name}</Code>
              </Text>
              <Text>
                Количество: <Code>{modelQuantities[choosenModel]}</Code>
              </Text>
              <Input
                placeholder='Тип заказа'
                value={orderType}
                onChange={(e) => setOrderType(e.target.value)}
              />
            </ModalBody>
          ) : (
            <Text>Вы пока ничего не выбрали</Text>
          )}

          <ModalFooter>
            <Button colorScheme='red' variant='ghost' mr={3} onClick={onClose}>
              Отклонить
            </Button>
            <Button
              colorScheme='green'
              disabled={modelQuantities[choosenModel] == 0 || orderType == ''}
              onClick={() => {
                CountryService.makeOrder(
                  choosenModel,
                  orderType,
                  modelQuantities[choosenModel]
                )
                onClose()
              }}
            >
              Подтвердить
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Heading mb={8}>Доступные для заказа авто</Heading>
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>Модель</Th>
              <Th>Привод</Th>
              <Th>Крутость</Th>
              <Th>Количество</Th>
              <Th>Заказать</Th>
            </Tr>
          </Thead>
          <Tbody>
            {models &&
              models.map((model, idx) => {
                return (
                  <Tr key={idx}>
                    <Td>{model.name}</Td>
                    <Td>{model.wheeldrive}</Td>
                    <Td>{model.significance}</Td>
                    <Td>
                      <Input
                        placeholder='0'
                        type={'number'}
                        onChange={(event) => {
                          const quantity = event.target.value
                          var m = modelQuantities
                          m[idx] = Number(quantity)
                          setModelQuantities(m)
                        }}
                      />
                    </Td>
                    <Td>
                      <Button
                        onClick={() => {
                          setChoosenModel(idx)
                          onOpen()
                        }}
                      >
                        Заказать
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
