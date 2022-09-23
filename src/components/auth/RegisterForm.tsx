import { Button, Input } from '@chakra-ui/react'

import { FC } from 'react'
import { useFormik } from 'formik'

const RegisterForm: FC = () => {
  const formik = useFormik({
    initialValues: { username: '', password: '' },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        placeholder='Логин'
        size='lg'
        name='username'
        onChange={formik.handleChange}
        value={formik.values.username}
        mb={4}
      />
      <Input
        placeholder='Пароль'
        size='lg'
        name='password'
        onChange={formik.handleChange}
        value={formik.values.password}
        mb={4}
      />
      <Button w={'100%'} type='submit'>
        Регистрация
      </Button>
    </form>
  )
}
export default RegisterForm
