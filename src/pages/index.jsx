import { Button, Center, HStack, Text, useDisclosure } from '@chakra-ui/react'

import AuthModal from '../components/auth/AuthModal'
import { Container } from '../components/Container'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import LoginForm from '../components/auth/LoginForrm'

/*
 * Главня страница
 */
const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Container height='100vh'>
        <Hero />
        <Center>
          <HStack spacing={4}>
            <Button onClick={onOpen} colorScheme={'blue'} size={'lg'}>
              Логин
            </Button>
          </HStack>
        </Center>
        <Footer>
          <Text textAlign={'center'}>SPb, 2022</Text>
        </Footer>
      </Container>
      <AuthModal isOpen={isOpen} onClose={onClose} title={'Вход'}>
        <LoginForm onClose={onClose} />
      </AuthModal>
    </>
  )
}

export default Index
