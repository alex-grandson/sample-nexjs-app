import {
  Avatar,
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Img,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Tooltip,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react'

import { Context } from '../pages/_app'
import { DarkModeSwitch } from './DarkModeSwitch'
import Link from 'next/link'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'

export const KursachHeader = observer(() => {
  const { colorMode } = useColorMode()
  const { auth } = useContext(Context)
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Flex w={'100%'} position={'relative'}>
        <Tooltip label={'На главную'}>
          <Link href='/' aria-label='На главную'>
            <Img
              cursor={'pointer'}
              w={200}
              p={4}
              mt={-3}
              src={colorMode == 'dark' ? 'logo_light.png' : 'logo_dark.png'}
              transition={'opacity 0.2s ease'}
              _hover={{ opacity: 0.75 }}
            />
          </Link>
        </Tooltip>

        <Flex
          cursor={'pointer'}
          onClick={onOpen}
          justifyContent={'center'}
          flexDirection={'column'}
          textAlign={'left'}
          pl={10}
        >
          <Text>Курсовая работа по ИСБД</Text>
          <Text>
            Соловьев Павел <Badge>P34312</Badge>
          </Text>
        </Flex>
        {auth.username && (
          <Tooltip label={'Выйти'} placement={'right'}>
            <Center ml={8} p={4} onClick={onOpen} cursor={'pointer'}>
              <Avatar name={auth.username} />
              <Box pl={4}>
                <Text fontSize={24} mb={-3} textTransform={'capitalize'}>
                  {auth.username}
                </Text>
                <Badge fontSize={9}>{auth.type}</Badge>
              </Box>
            </Center>
          </Tooltip>
        )}
        <Center position={'absolute'} right={4} h={'100%'}>
          <DarkModeSwitch />
        </Center>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Выход</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Вы действительно хотите выйти?</ModalBody>
          <ModalFooter>
            <Button
              colorScheme='green'
              variant='ghost'
              mr={3}
              onClick={onClose}
            >
              Отклонить
            </Button>
            <Button
              colorScheme='red'
              // disabled={modelQuantities[choosenModel] == 0 || orderType == ''}
              onClick={() => {
                // CountryService.makeOrder(
                //   choosenModel,
                //   orderType,
                //   modelQuantities[choosenModel]
                // )
                onClose()
              }}
            >
              Выйти
            </Button>
          </ModalFooter>
          {/* <Box p={4}>{children}</Box> */}
        </ModalContent>
      </Modal>
    </>
  )
})
