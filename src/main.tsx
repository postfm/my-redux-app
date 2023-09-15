import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.tsx';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
