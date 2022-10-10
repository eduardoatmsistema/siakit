import { Flex, Grid } from "@atmoutsourcing/siakit";
import { BrowserRouter } from "react-router-dom"
import { Header } from "./components/Header";
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

