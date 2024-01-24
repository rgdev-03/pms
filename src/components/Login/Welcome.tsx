import { Grid } from '@mantine/core';
import { Tabs, rem } from '@mantine/core';

import { Fieldset } from '@mantine/core';
import { TextInput } from '@mantine/core';
import { PasswordInput } from '@mantine/core';
import { Anchor, Group } from '@mantine/core';
import { Text } from '@mantine/core';
import { Checkbox } from '@mantine/core';
import { Button } from '@mantine/core';
import { Avatar } from '@mantine/core';
import { Divider, Box,  } from '@mantine/core';
import { IconBrandGoogleFilled,IconBrandWindows,IconBrandFacebookFilled } from '@tabler/icons-react';
 export function Login() {
  return (
    <Grid style={{backgroundColor:"#f7f7f7",height:'100vh',}}>
        <Grid.Col span={6} offset={6} style={{backgroundColor:'white',height:'100vh',display:"flex",alignContent:"center",justifyContent:"center",padding:"150px",}}>
          <Tabs color="violet" variant="outline" radius="lg" defaultValue="gallery" style={{backgroundColor:"#f7f7f7",width:"350px", margin:"auto",padding:"20px",borderRadius:"20px",height:"60vh"}} >
            <Tabs.List style={{textAlign:"center",paddingInline:"10px",}}>
              <Tabs.Tab value="gallery" style={{width:"9rem"}}>
                LOGIN
              </Tabs.Tab>
              <Tabs.Tab value="messages" style={{width:"9rem"}}>
                SIGNUP
              </Tabs.Tab>
            </Tabs.List>

          <Tabs.Panel value="gallery" style={{padding:"10px",marginTop:"25px"}}>
              <Fieldset  variant="unstyled" >
                <Text size='lg' ta='center'>Welcome back</Text>
                <TextInput  placeholder="email/phone num" />
                <PasswordInput placeholder="Password" style={{marginTop:"10px"}}/>
                <Anchor href="https://mantine.dev/" target="_blank" underline="hover" >
                  <Text ta="right">forgot password?</Text>
                </Anchor>
                <Checkbox defaultChecked label="Remember me" size="xs"/>
                <a href="/nav"><Button fullWidth style={{marginTop:"10px"}} color="rgba(0, 0, 0, 1)" >Login</Button></a>
                <Divider my="xs" label="Or" labelPosition="center" />
                <Group style={{alignContent:"center",justifyContent:"center"}}>
                  <a href="#"><Avatar><IconBrandGoogleFilled/></Avatar></a>
                  <a href="#"><Avatar><IconBrandWindows/></Avatar></a>
                  <a href="#"><Avatar><IconBrandFacebookFilled/></Avatar></a>
                </Group>
              </Fieldset>
          </Tabs.Panel>

          <Tabs.Panel value="messages" style={{padding:"10px"}}>
              <Fieldset  variant="unstyled" >
                <Text size='lg' ta='center'>Create an account</Text>
                <TextInput  placeholder="username"/>
                <TextInput  placeholder="email/phone num" style={{marginTop:"10px"}}/>
                <PasswordInput placeholder="new password" style={{marginTop:"10px"}}/>
                <PasswordInput placeholder="confirm password" style={{marginTop:"10px"}}/>
                <Divider my="xs" label="Or" labelPosition="center" />
                <Group style={{alignContent:"center",justifyContent:"center"}}>
                  <a href="#"><Avatar><IconBrandGoogleFilled/></Avatar></a>
                  <a href="#"><Avatar><IconBrandWindows/></Avatar></a>
                  <a href="#"><Avatar><IconBrandFacebookFilled/></Avatar></a>
                </Group>     
                <a href="#"><Button fullWidth style={{marginTop:"20px"}} color="rgba(0, 0, 0, 1)" >Login</Button></a>

              </Fieldset>
          </Tabs.Panel>
        </Tabs>
      </Grid.Col>
    </Grid>
  );
}