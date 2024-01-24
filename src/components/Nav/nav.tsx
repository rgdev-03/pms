import { useState } from 'react';
import { Group, Code } from '@mantine/core';
import {
    IconLayoutDashboard,
    IconSettings,
    IconUser
} from '@tabler/icons-react';
import { Badge, NavLink } from '@mantine/core';
import classes from './nav.module.css';



export function Nav() {
 
  return (
    <nav className={classes.navbar} style={{backgroundColor:"#f1f1f1", height:"100vh"}}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} >
              <NavLink
                className={classes.navlink}
                variant="subtle"
                label="Dashboard"
                leftSection={<IconLayoutDashboard size="2rem" stroke={1.3} />}
              />
              <NavLink
                className={classes.navlink}
                variant="subtle"
                label="Configure setting"
                leftSection={<IconSettings size="2rem" stroke={1.3} />}
              />
        </Group>
      </div>
      
      <a href="/header" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconUser  stroke={1.5} />
          <span>Account</span>
      </a>
    </nav>
  );
}