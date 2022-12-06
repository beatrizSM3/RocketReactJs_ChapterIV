import { AppProps} from 'next/app'
import { ChakraProvider} from '@chakra-ui/react'
import { theme} from '../styles/theme'
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext'
import { makeServer } from '../services/mirage'
import { QueryClient, QueryClientProvider} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'


if ( process.env.NODE_ENV === 'development') {  
  //  verifica se o ambiente é de desenvolvimento para rodar o mirage
  makeServer()

}

const queryClient = new QueryClient()

function MyApp({ Component, pageProps } : AppProps) {
  return (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
          <Component {...pageProps} />
      </SidebarDrawerProvider>
    <ReactQueryDevtools />
    </ChakraProvider>
  </QueryClientProvider>
  )
}

export default MyApp
