import '@fontsource/manrope'

import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Manrope'`,
    body: `''Manrope`,
  },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
