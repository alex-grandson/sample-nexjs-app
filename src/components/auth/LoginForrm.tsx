import { Button, Checkbox, Input } from '@chakra-ui/react'
import { FC, useContext } from 'react'

import { Context } from '../../pages/_app'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'

interface ILoginParams {
  username: string
  isCountry: boolean
}

/*
 * Форма логина юзера
 */
const LoginForm: FC = ({ onClose }: any) => {
  const router = useRouter()
  const { auth } = useContext(Context)

  /*
   * Работа с формой
   * Дефолтные значения, отправка с запоминанием данных,
   * Редирект после входа
   */
  const formik = useFormik({
    initialValues: { isCountry: true, username: '' } as ILoginParams,
    onSubmit: (values) => {
      auth.setAuth(values.username, values.isCountry ? 'country' : 'vendor')
      onClose()
      router.push(values.isCountry ? '/country' : '/vendor')

      // alert(JSON.stringify(values, null, 2))
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
        type={'text'}
        mb={4}
      />
      <Checkbox
        size='lg'
        mb={4}
        colorScheme='blue'
        onChange={formik.handleChange}
        name={'isCountry'}
        isChecked={formik.values.isCountry}
      >
        Я страна
      </Checkbox>
      <Button w={'100%'} type='submit'>
        Вход
      </Button>
    </form>
  )
}
export default LoginForm
