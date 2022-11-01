import { useNavigate } from 'react-router-dom';

import { Sidebar, Menu, MenuHeader, MenuItem, MenuTitle, SubMenu, SubMenuItem, SubMenuSeparator, SubMenuTitle } from '@siakit/sidebar';
import { Image } from '@siakit/image';
import { Flex } from '@siakit/layout';

import { BsBuilding,
  BsHouseDoor, 
  BsPerson 
} from 'react-icons/bs';
import { useState } from 'react';

export function MenuSideBar(){

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const history = useNavigate();

  return (
    <Flex height="100vh">
      <Sidebar open={sidebarOpen} onOpenChange={() => setSidebarOpen(false) }>
        <Flex>
          <Menu>
              <MenuHeader onClick={() => history(`/maintenance`)} >
                <Flex width={80} height={20}>
                  <Image ratio={3.5} alt="logo-atm" src="https://sia.atmoutsourcing.com.br/assets/sia-logo-yellow.afe8f0e3.svg"/>
                </Flex>
                <Flex width={42} padding={8}>
                  <Image ratio={1} alt="logo-atm" src="https://sia.atmoutsourcing.com.br/assets/sia-logo-icon-yellow.987ab41e.svg"/>
                </Flex>
              </MenuHeader>
            <MenuItem icon={<BsHouseDoor/>} value="1" tooltip="Manutenção">
              Manutenção
            </MenuItem>
            <MenuItem icon={<BsBuilding/>} value="2" tooltip="Clientes">
              Clientes
            </MenuItem>
            <MenuItem icon={<BsPerson/>} value="3" tooltip="Perfil">
              Perfil
            </MenuItem>
          </Menu>
        </Flex>

        <SubMenu value="1">
          <SubMenuTitle>
            Manutenção
          </SubMenuTitle>
          <SubMenuSeparator />
            <SubMenuItem children='Dashboard' onClick={() => history(`/maintenance`)}/>
        </SubMenu>

        <SubMenu value="2">
          <SubMenuTitle>
            Empresas
          </SubMenuTitle>
          <SubMenuSeparator />
            <SubMenuItem children="Cadastro de empresas" onClick={ () => history(`/customers`)}/>
        </SubMenu>

        <SubMenu value="3">
          <SubMenuTitle>
            Configurações
          </SubMenuTitle>
          <SubMenuSeparator />
            <SubMenuItem children="Configurações" onClick={ () => history(`/profile`)}/>
        </SubMenu>
      </Sidebar>
    </Flex>
   )
}