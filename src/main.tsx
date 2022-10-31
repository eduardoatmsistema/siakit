import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { LoadingProvider } from '@siakit/loading';
import { DialogProvider } from '@siakit/dialog';
import { Provider } from '@siakit/core';
import { ToastProvider } from '@siakit/toast';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider>
      <LoadingProvider>
        <DialogProvider>
          <ToastProvider>
            <App />
          </ToastProvider>
        </DialogProvider>
      </LoadingProvider>
    </Provider>
  </React.StrictMode>
)
