import { BrowserRouter } from "react-router-dom"
import Router from './routes/Router'
import Global from './styles/global';

function App() {
  return (
      <BrowserRouter>
        <Global />
        <Router />
      </BrowserRouter>
  )
}

export default App

