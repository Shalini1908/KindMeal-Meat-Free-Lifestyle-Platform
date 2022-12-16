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
    <Box display={"flex"} ml={650} mt={10}>
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


<Text ml={550}  fontSize={15}>login</Text>
<Stack spacing={3} direction='row'  ml={1000} mt={"-55px"}>

      <Button colorScheme='facebook' size='xs' width={90} fontSize={13} >Facebook</Button>

      <Button bg='RGBA(0, 0, 0, 0.80)' color="white" size='xs' width={90} fontSize={13}>Email</Button>
      
     
      <BasicUsage/>
      </Stack>
      </Box>
      <Box bg={useColorModeValue("#2bb673", "#2bb673")} px={4} mt={"26px"} >
       
        <Flex h={12} alignItems={'center'} justifyContent={"space-around"}>
         <RouterLink to={"./"}>
          <Box  color={'white'} fontFamily={"Roboto, Arial, Helvetica, sans-serif;"} fontWeight={600} fontSize={15} lineHeight={40}>HOME</Box>
          </RouterLink>
          <RouterLink to="../MealDeal">
          <Box  color={'white'} fontFamily={"Roboto, Arial, Helvetica, sans-serif;"} fontWeight={600} fontSize={15} lineHeight={40} cursor={"pointer"}>MEAL DEALS</Box>
          </RouterLink>
          <RouterLink to="../KindMoments">
          <Box  color={'white'} fontFamily={"Roboto, Arial, Helvetica, sans-serif;"} fontWeight={600} fontSize={15} lineHeight={40} cursor={"pointer"}>KIND MOMENTS</Box>
          </RouterLink>
          <RouterLink to="../Recipes">
          <Box  color={'white'} fontFamily={"Roboto, Arial, Helvetica, sans-serif;"} fontWeight={600} fontSize={15} lineHeight={40} cursor={"pointer"}>RECIPES</Box>
          </RouterLink>
          <RouterLink to="../Directory">
          <Box  color={'white'} fontFamily={"Roboto, Arial, Helvetica, sans-serif;"} fontWeight={600} fontSize={15} lineHeight={40} cursor={"pointer"}>DIRECTORY</Box>
          </RouterLink>
          <RouterLink to="../Articles">
          <Box  color={'white'} fontFamily={"Roboto, Arial, Helvetica, sans-serif;"} fontWeight={600} fontSize={15} lineHeight={40} cursor={"pointer"}>ARTICLES</Box>
          </RouterLink >
          <RouterLink to="../MobileApp">
          <Box  color={'white'} fontFamily={"Roboto, Arial, Helvetica, sans-serif;"} fontWeight={600} fontSize={15} lineHeight={40} cursor={"pointer"}>MOBILE APP</Box>
          </RouterLink>
          <RouterLink to="../Help">
          <Box  color={'white'} fontFamily={"Roboto, Arial, Helvetica, sans-serif;"} fontWeight={600} fontSize={15} lineHeight={40} cursor={"pointer"}>HELP</Box>
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
  
                  <FaRegUser color='white'/>
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                  <FaRegUser color='black'/>
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Admin</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>

      
    </>
  );
}
