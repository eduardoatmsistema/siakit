import { Flex, Grid } from "@atmoutsourcing/siakit";
import { BrowserRouter, useNavigate } from "react-router-dom"
import { MenuSideBar } from "./components/Menu";
import { SignIn } from "./pages/SignIn";
import Router from './routes/Router'
import Global from './styles/global';

function App() {
  return (
      <BrowserRouter>
        <Global />
        <Grid columns="240px 1fr">
          <MenuSideBar />
          <Router />
        </Grid>

      </BrowserRouter>
  )
}

export default App

