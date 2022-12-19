import {
    Modal,
    ModalOverlay,
    ModalContent,

    ModalFooter,
    ModalBody,
    ModalCloseButton,

    Text,
    Image,

   Flex,
    useDisclosure,
    Card,
    Heading,

    Stack,
    CardBody,
    Container,
  
  } from '@chakra-ui/react';
  import logo  from "../logo/mylogo.png";
 import join_normal from "../images/join_normal.png";
 import join_shop from "../images/join_shop.png";
 import {Link as RouterLink} from "react-router-dom"


export default function BasicUsage() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Text onClick={onOpen} cursor={"pointer"}>Sign Up</Text>
  
        <Modal isOpen={isOpen} onClose={onClose} size={"lg"} >
          <ModalOverlay />
          <ModalContent >
        
            <ModalCloseButton />
            <ModalBody  w={500}>
   
             <Image src={logo} width={500} h={500} objectFit='cover' mt={"-158px"} alt="logo"/>
             <Text mt={"-200px"} ml={100} color={"#3e3e3e"} fontSize={20}>Join KindMeal For FREE Now</Text>
             <Text ml={43} color={"#746d66"}>Please select the type of membership to proceed</Text>

             <Flex>
         
             <Card 
               direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' w={440} mt={5}> 
             
             <Image src={join_normal} width={120} h={120} mt={17} ml={"10px"}/>
           
            <Stack>
            <CardBody>
              <Container w={300}>
            <Heading fontSize={18}>Food Lover</Heading>
            <Text fontSize={14} >Join FREE to enjoy yummy deals, share reviews & meet our community of compassionate food lovers.</Text>
            </Container>
            </CardBody>
            </Stack>    
            </Card>
     
         </Flex>

     
        <Flex>
            <Card  direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' p={5} w={440} mt={5}> 
             <Image src={join_shop} width={120} h={120} ml={"-10px"} mt={17}/>

            <Stack>
                <CardBody >
                  <Container w={550}>
            <Heading fontSize={18}>Resutaurant/ Shop Owner</Heading>
            <Text fontSize={14}>List your food outlet, create exciting </Text>
            <Text fontSize={14}>vegetarian deals & showcase your delicious </Text>
            <Text fontSize={14}>menu for Free. Enjoy our yummy deals,</Text>
            <Text fontSize={14}>share reviews & meet food lovers too.</Text>
            </Container>
            </CardBody>
            </Stack>    
            </Card>
            </Flex>
           



            </ModalBody>
  
            <ModalFooter>
               
              {/* <Button colorScheme='blue' mr={3} onClick={onClose}> */}
           <RouterLink to="../Signup">
            <Text mr={210} color={"#746d66"} onClick={onClose}>Member Login</Text>
         
              </RouterLink>
                {/* Close */}
              {/* </Button> */}
              {/* <Button variant='ghost'>Secondary Action</Button> */}
              <Text color={"#746d66"}>Forget Password ?</Text>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }