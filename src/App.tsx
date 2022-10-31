import { BrowserRouter } from "react-router-dom";
import Router from './routes/Router';
import Global from './styles/global';
import { LoadingProvider } from '@siakit/loading';
import { DialogProvider } from '@siakit/dialog';
import { Provider } from '@siakit/core';
import { ToastProvider } from '@siakit/toast';

function App() {
  return (
    <BrowserRouter>
      <Global />
      <Router />
    </BrowserRouter>
  )
}

export default App

