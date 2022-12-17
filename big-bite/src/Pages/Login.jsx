import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Select,
  Card,
  Grid,
  Container,
  Image
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import join_shop from "../images/join_shop.png";
import join_normal from "../images/join_normal.png"

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);

  return (
<>
  {/* <Grid>


  </Grid> */}

    <Flex
      minH={'100vh'}
       align={'center'}
      justify={'center'}
     
      bg={useColorModeValue('gray.50', 'gray.800')}>
        <div >
 <Card bg={"white"} w={"242px"} m={3}  boxShadow='md' h={"242px"}>
<Image src={join_normal} width={"200px"} h={"146px"} ml={6}></Image>
<Container mr={600}><Text fontSize={15} color={"#8d8d8d"} fontWeight={500} textAlign={"center"} mt={6}>Food Lover Sign</Text>
</Container>
</Card>

<Card bg={"white"} w={"242px"} m={3} boxShadow='md' h={"242px"}>
<Image src={join_shop} width={"200px"} h={"146px"} ml={6}></Image>
<Container><Text fontSize={15} color={"#8d8d8d"} fontWeight={500}  width={"200px"} mr={"600px"} textAlign={"center"} mt={6}>Restaurant Signup</Text>
</Container>
</Card>

<Card bg={"white"} w={"242px"} m={3} boxShadow='md' h={"242px"} >
  <Container>
    <Heading color={"#444444"} fontWeight={500} fontSize={17} p={1}>Why KindMeal?</Heading>
    
<Text fontSize={13} color={"#8d8d8d"} textAlign={"left"} ml={2} p={1}><li>Exclusive meat-free deals</li></Text>
<Text fontSize={13} color={"#8d8d8d"} textAlign={"left"} ml={2}><li>Share yummy food moments</li></Text>
<Text fontSize={13} color={"#8d8d8d"} textAlign={"left"} ml={2}><li>Meet friendly food lovers</li></Text>
<Text fontSize={13} color={"#8d8d8d"} textAlign={"left"} ml={2}><li>Discover cool restaurants</li></Text>

<Text fontSize={13} color={"#8d8d8d"} textAlign={"left"} ml={2}><li>Email updates on tasty deals</li></Text>
<Text fontSize={13} color={"#8d8d8d"} textAlign={"left"} ml={2}><li>Instant coupons & dining</li></Text>
<Text fontSize={13} color={"#8d8d8d"} textAlign={"left"} ml={2}><li>No upfront payment, booking or printing</li></Text>
<Text fontSize={13} color={"#8d8d8d"} textAlign={"left"} ml={2}><li>More about KindMeal »</li></Text>


</Container>
</Card>
</div>
      <Stack spacing={8}  maxW={'lg'} py={12} px={6} mr={"300px"}>
        {/* mx={'auto'} */}
        <Stack mt={"-15px"} >
          <Heading fontSize={'19px'} textAlign={"left"} fontFamily={"Roboto, Arial, Helvetica, sans-serif"} >
            Food Lover? Sign Up Now or <Flex><Link color={"#2184ff"} mt={"-22px"} ml= {"266px"} fontSize={"19px"} >Login With Facebook</Link></Flex>
          </Heading>
          <Box width={"665px"}>
          <Text fontSize={'14px'}  textAlign={"left"} fontFamily={"Roboto, Arial, Helvetica, sans-serif"} >
          Discover tasty meat-free meals and dine instantly — no coupon payment, booking or printing is required.</Text>
          <Text fontSize={'14px'} textAlign={"justify"} fontFamily={"Roboto, Arial, Helvetica, sans-serif"} mt={"10px"}>KindMeal is a fun, 
          exciting and cool new way for you to show your compassion towards animals. We collaborate with kind restaurants and cafes across the nation to bring you delicious meat-free foods that 
           will not only help save precious animal lives, but improve your health and save your money at the same time!</Text>
           </Box>
        </Stack>
        <Box
          ml={"-10px"}
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
        
          w={680}
          p={8}>
          <Stack spacing={4}>
            <HStack >
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            {/* <FormControl id="username" isRequired>
              <FormLabel>Username</FormLabel>
              <Input type="email" />
            </FormControl> */}
            <FormControl>
  <FormLabel>Username</FormLabel>
  <Input type='email' />
  
</FormControl>
            <Select placeholder='Select option'>
  <option value='option1'>Malaysia</option>
  <option value='option2'>India</option>

</Select>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
              w={"150px"}
                h={"40px"}
                bg={'#ef3e3e'}
                color={'white'}
                _hover={{
                  bg: '#ef3e3e',
                }}>
                Join Now
              </Button>
            </Stack>
            <Stack pt={6}>
     
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </>
  );
}