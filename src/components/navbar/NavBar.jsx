import React from 'react'
import {NavBarContainer, ClockLogo} from "../../shared/styles"
import { Tabs, TabList, Tab} from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom'
const NavBar = () => {
  const {pathname} = useLocation()
  const bg = {
    "/":'#ff9399',
    "/stopwatch":'#55bbd3',
    "/timer":'#3888ca'
  } 
  return (
    <NavBarContainer bg={bg[pathname]} >
    <div>
    {/* {Object.keys(bg).findIndex((e)=> e === pathname)} */}
      <ClockLogo/>
    </div>
      <Tabs align='center' marginBottom='-2px' size="lg"
      bg={bg[pathname]} transition="background 1s" color="white" defaultIndex={Object.keys(bg).findIndex((e)=> e === pathname)} >
        <TabList>
        <Link to="/">
          <Tab fontWeight="bold"  _selected={{color:'#fff4f4',borderColor:'#ff9399'}} _focus={{ boxShadow: "none", }}> Clock</Tab>
        </Link>
        <Link to="/stopwatch">
          <Tab fontWeight="bold" _selected={{color:'#e3faff',borderColor:'#55bbd3'}} _focus={{ boxShadow: "none", }}> StopWatch</Tab> 
        </Link>
        <Link to="/timer">
          <Tab fontWeight="bold" _selected={{color:'#e4edff',borderColor:'#3888ca'}} _focus={{ boxShadow: "none", }}> Timer</Tab>
        </Link>
        </TabList>
      </Tabs>
    </NavBarContainer>
  ) 
}

export default NavBar