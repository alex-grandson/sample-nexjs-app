import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
} from '@chakra-ui/react'

import { FC } from 'react'

interface IAuthModelProps {
  title: string
  text?: string
  isOpen: boolean
}

const AuthModal: FC<ModalProps & IAuthModelProps> = ({
  isOpen,
  title,
  onClose,
  text,
  children,
  ...props
}: ModalProps & IAuthModelProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        {text && <ModalBody>{text}</ModalBody>}
        <Box p={4}>{children}</Box>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default AuthModal
