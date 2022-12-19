import React from 'react';
import logo  from "../logo/mylogo.png";
import { Link as RouterLink} from "react-router-dom";
import twitter from "../images/twitter.png";
import facebook from "../images/facebook.png";
import blog from "../images/blog.png";
import BasicUsage from "../Components/Model";
import { FaRegUser } from "react-icons/fa";
import {
  Box,
  Flex,Image,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
 Text,
  useColorModeValue,
  Stack,useColorMode,
  Center,


} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';


export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
    <Box display={"flex"} ml={570} mt={6}>
    <Stack spacing={3} direction='row'>
        <Image src={blog} width={"40px"} />
        <Image src={facebook} width={"40px"}/>
        <Image src={twitter} width={"40px"}/>
        </Stack>
    </Box>
   <Box boxSize='200px'>
  <Image src={logo} width={530} h={382} alt="logo" objectFit='cover' mt={"-190px"} />

</Box>

<Box >



<Stack spacing={3} direction='row'  ml={1000} mt={"-35px"}>

      <Button colorScheme='facebook' size='xs' width={90} fontSize={13} >Facebook</Button>

      <Button bg='RGBA(0, 0, 0, 0.80)' color="white" size='xs' width={90} fontSize={13}>Email</Button>
      
     
      <BasicUsage/>
      </Stack>
      <Text ml={550}  fontSize={16} mt={"-22px"}>login</Text>
      </Box>
      <Box bg={useColorModeValue("#2bb673", "#2bb673")} px={4} mt={"46px"} >
       
        <Flex h={12} alignItems={'center'} justify="center">
         <RouterLink to={"./"}>
          <Box  color={'white'} fontFamily={"Roboto, Arial, Helvetica, sans-serif;"} fontWeight={600} fontSize={16} lineHeight={40}>Home</Box>
          </RouterLink>
          <RouterLink to="../MealDeal">
          <Box  color={'white'} fontFamily={"Roboto, Arial, Helvetica, sans-serif;"} fontWeight={600} fontSize={16} lineHeight={40} cursor={"pointer"} m={8}>Meal Deals</Box>
          </RouterLink>
          <RouterLink to="../KindMoments">
          <Box  color={'white'} fontFamily={"Roboto, Arial, Helvetica, sans-serif;"} fontWeight={600} fontSize={16} lineHeight={40} cursor={"pointer"}>Kind Moments</Box>
          </RouterLink>
          <RouterLink to="../Recipes">
          <Box  color={'white'} fontFamily={"Roboto, Arial, Helvetica, sans-serif;"} fontWeight={600} fontSize={16} lineHeight={40} cursor={"pointer"} m={8}>Recipes</Box>
          </RouterLink>
          <RouterLink to="../Directory">
          <Box  color={'white'} fontFamily={"Roboto, Arial, Helvetica, sans-serif;"} fontWeight={600} fontSize={16} lineHeight={40} cursor={"pointer"}>Directory</Box>
          </RouterLink>
          <RouterLink to="../Articles">
          <Box  color={'white'} fontFamily={"Roboto, Arial, Helvetica, sans-serif;"} fontWeight={600} fontSize={16} lineHeight={40} cursor={"pointer"} m={8}>Articles</Box>
          </RouterLink >
          {/* <RouterLink to="../MobileApp"> */}
          <Box  color={'white'} fontFamily={"Roboto, Arial, Helvetica, sans-serif;"} fontWeight={600} fontSize={16} lineHeight={40} cursor={"pointer"}>Mobile App</Box>
          {/* </RouterLink> */}
          <RouterLink to="../Help">
          <Box  color={'white'} fontFamily={"Roboto, Arial, Helvetica, sans-serif;"} fontWeight={600} fontSize={16} lineHeight={40} cursor={"pointer"} m={8}>Help</Box>
          </RouterLink>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton 
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                 <FaRegUser color='white' />
                
                </MenuButton>
                <MenuList alignItems={'center'} bg={"blue.200"} >
                  <br />
                  <Center>
                  <FaRegUser color='black' />
                  </Center>
                  <br />
                  <Center >
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem bg={"blue.200"}>Admin</MenuItem>
                  <MenuItem bg={"blue.200"}>Account Settings</MenuItem>
                  <RouterLink to="/">
                  <MenuItem bg={"blue.200"}>Logout</MenuItem>
                  </RouterLink>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>

      
    </>
  );
}
