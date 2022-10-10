import {
  Sidebar,
  Menu,
  MenuHeader,
  MenuTitle,
  MenuItem,
  SubMenu,
  SubMenuTitle,
  SubMenuSeparator,
  SubMenuItem,
  Grid,
  Flex,
} from '@atmoutsourcing/siakit';

import { BsBuilding, BsFillPersonFill, BsHouseDoor, BsPerson, BsPersonCircle } from 'react-icons/bs';

import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Header(){

  return (
    <Flex height="100vh">
      <Sidebar>
        <Flex>
          <Menu>
            <MenuHeader onClick={ () => console.log("clicou") } children="SiaKit"/>
            <MenuItem icon={<BsHouseDoor/>} value="1" onClick={ () => console.log("clicou") }>
              Manutenção
            </MenuItem>
            <MenuItem icon={<BsBuilding/>} value="2" onClick={ () => console.log("clicou") }>
              Clientes
            </MenuItem>
            <MenuItem icon={<BsPerson/>} value="3" onClick={ () => console.log("clicou") }>
              Perfil
            </MenuItem>
          </Menu>
        </Flex>

        <SubMenu value="1">
          <SubMenuTitle>
            Manutenção
          </SubMenuTitle>
          <SubMenuSeparator />
          <Link to="/maintenance" style={{ textDecoration: "none"}}>
            <SubMenuItem children='Dashboard' onClick={ () => console.log("clicou") }/>
          </Link>
        </SubMenu>

        <SubMenu value="2">
          <SubMenuTitle>
            Empresas
          </SubMenuTitle>
          <SubMenuSeparator />
          <Link to="/customers" style={{ textDecoration: "none"}}>
            <SubMenuItem children="Cadastro de empresas" onClick={ () => console.log("clicou")}/>
          </Link>
        </SubMenu>

        <SubMenu value="3">
          <SubMenuTitle>
            Configurações
          </SubMenuTitle>
          <SubMenuSeparator />
          <Link to="/profile" style={{ textDecoration: "none"}}>
            <SubMenuItem children="Configurações" onClick={ () => console.log("clicou") }/>
          </Link>
        </SubMenu>
      </Sidebar>
    </Flex>
   )
}