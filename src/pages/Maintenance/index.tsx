import { useLoading } from "@siakit/loading";
import { Card } from '@siakit/card';
import { Form } from '@siakit/form-unform';
import { Flex, Grid } from "@siakit/layout";
import { Select } from '@siakit/form-components';
import { Accordion, AccordionItem } from '@siakit/accordion';
import { Button } from "@siakit/button";
import { FormHandles } from "@unform/core";
import { useRef } from "react";
import { MenuSideBar } from "../../components/MenuSideBar";

export function Maintenance(){
  const formRef = useRef<FormHandles>(null);
  

  // function handleLoading(){
  //   setLoading(true);
  //   console.log("clicou");
  //   setInterval(() => {
  //     clearLoading();
  //     console.log("terminou de carregar");
  //   }, 3000)
  // }

  return (
    <Flex>
      <MenuSideBar/>
      <p>teste123</p>
    </Flex>
  )
}