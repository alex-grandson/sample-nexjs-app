import {
  Box,
  Button,
  Center,
  Link as ChakraLink,
  Flex,
  HStack,
  Text,
  useDisclosure,
} from '@chakra-ui/react'

import AuthModal from '../components/auth/AuthModal'
import { Container } from '../components/Container'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import Link from 'next/link'
import LoginForm from '../components/auth/LoginForrm'
import { Main } from '../components/Main'
import RegisterForm from '../components/auth/RegisterForm'

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    isOpen: isRegisterOpen,
    onOpen: onRegisterOpen,
    onClose: onRegisterClose,
  } = useDisclosure()
  return (
    <>
      <Container height='100vh'>
        <Hero />
        <Center>
          <HStack spacing={4}>
            <Button onClick={onOpen} colorScheme={'blue'} size={'lg'}>
              Логин
            </Button>
            <Button onClick={onRegisterOpen} variant={'ghost'} size={'lg'}>
              Регистрация
            </Button>
          </HStack>
        </Center>
        <DarkModeSwitch />
        <Footer>
          <Text textAlign={'center'}>Made with love</Text>
        </Footer>
      </Container>
      <AuthModal isOpen={isOpen} onClose={onClose} title={'Вход'}>
        <LoginForm />
      </AuthModal>
      <AuthModal
        isOpen={isRegisterOpen}
        onClose={onRegisterClose}
        title={'Регистрация'}
      >
        <RegisterForm />
      </AuthModal>
    </>
  )
}

export default Index
