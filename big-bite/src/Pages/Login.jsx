import {
  Flex,
 
 

  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,

  Card,

  Container,
  Image
} from '@chakra-ui/react';

import join_shop from "../images/join_shop.png";
import join_normal from "../images/join_normal.png";
import icon_tick from '../images/icon_tick.png' ;
import {Link as RouterLink} from "react-router-dom";
import how_kindmeal_works from "../images/how_kindmeal_works.png"

export default function Login() {


  return (
<>
  

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

<Stack spacing={8}  maxW={'lg'} py={12} px={6} mr={"300px"} >
  <Flex>
    
  <Image src={icon_tick} w={20} h={20} />
  <Heading mt={"20px"} ml={5} color={"#666666"} fontWeight={500}>
Sign Up Successful</Heading>
</Flex>
<Container textAlign={"left"}>
<Text  width={700} color={"#666666"} fontSize={20}>Congratulations Shalini Singh, you're now ready to get started on KindMeal.my.</Text>

 <Text width={700} color={"#666666"} mt={5} fontSize={20}>A verification email has been sent to shalini1908singh@gmail.com. Please click </Text> 

<Text w={700} color={"#666666"} fontSize={20}>on the link there to activate your account and begin redeeming coupons.</Text>

<Text  width={700} color={"#666666"} mt={5} fontSize={20}> A Yummy meals are waiting for you!</Text>  
</Container>
<RouterLink to="/MealDeal">
<Button w={"200px"}h={"40px"}bg={'#ef3e3e'}color={'white'} _hover={"#ef3e3e"} mr={230}>Login To Account</Button>
</RouterLink>

</Stack>

    </Flex>
    <Card bg={"#e0e0e0"} width={"100%"} mt={70}>
    <Image src={how_kindmeal_works}  style={{margin:"auto"}} mt={20}/>
</Card>
    
    </>
  );
}