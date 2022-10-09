import { createContext, useEffect } from 'react'

import { Auth } from '../../store'
import { ChakraProvider } from '@chakra-ui/react'
import { KursachHeader } from '../components/KursachHeader'
import theme from '../theme'
import { useRouter } from 'next/router'

// import { useState } from 'react'

const auth = new Auth()

export const Context = createContext({
  auth,
})

/*
 * Точка входа
 * Базовая логика
 * Прокидывание контекста приложения (данные пользователя)
 */
function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    // Костыльная реализация Protected routes (role-based)
    if (
      auth.username == undefined &&
      (router.pathname == '/country' || router.pathname == '/vendor')
    ) {
      console.error('Вы не вошли в систему')
      router.push('/')
    }
    if (auth.type == 'country' && router.pathname != '/country') {
      console.error(
        'Пользователь типа "Страна" не имеет доступа к этой странице'
      )
      router.push('/country')
    }
    if (auth.type == 'vendor' && router.pathname != '/vendor') {
      console.error(
        'Пользователь типа "Производитель" не имеет доступа к этой странице'
      )
      router.push('/vendor')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth])

  return (
    <ChakraProvider theme={theme}>
      <Context.Provider value={{ auth }}>
        <KursachHeader />
        <Component {...pageProps} />
      </Context.Provider>
    </ChakraProvider>
  )
}

export default MyApp
