import {
    Modal,
    ModalOverlay,
    ModalContent,
    // ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    //  Button,
    Text,
    Image,
    // CardFooter,
   Flex,
    useDisclosure,
    Card,
    Heading,
    // CardBody,
    Stack,
    CardBody,
    // Flex
    // Heading,
    // Box
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
            {/* <ModalHeader>Modal Title</ModalHeader> */}
            <ModalCloseButton />
            <ModalBody  w={500}>
              
             <Image src={logo} width={500} h={500} objectFit='cover' mt={"-158px"} alt="logo"/>
             <Text mt={"-200px"} ml={100} color={"#3e3e3e"} fontSize={20}>Join KindMeal For FREE Now</Text>
             <Text ml={43} color={"#746d66"}>Please select the type of membership to proceed</Text>

             <Flex>
             <Card 
               direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'> 
             <Image src={join_normal} width={120} h={120}/>
            <Stack>
            <CardBody>
            <Heading fontSize={18}>Food Lover</Heading>
            <Text fontSize={15} >Join FREE to enjoy yummy deals, share reviews & meet our community of compassionate food lovers.</Text>
            </CardBody>
            </Stack>    
            </Card>
         </Flex>

     
        <Flex>
            <Card  direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' p={5}> 
             <Image src={join_shop} width={120} h={120}/>
            <Stack>
                <CardBody w={300}>
            <Heading fontSize={18}>Resutaurant/ Shop Owner</Heading>
            <Text noOfLines={[1,2,3]} fontSize={15}>List your food outlet, create exciting vegetarian deals & showcase your delicious menu for Free. Enjoy our yummy deals, share reviews & meet food lovers too.</Text>
            </CardBody>
            </Stack>    
            </Card>
            </Flex>
           

           {/* <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
     maxW={{ base: '100%', sm: '100px' }}
    // width={90}
    src={join_normal}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>Food Lover</Heading>

      <Text py='2'>
      Join FREE to enjoy yummy deals, share reviews & meet our community of compassionate food lovers.
      </Text>
    </CardBody>


  </Stack>
</Card>
         */}
     
            </ModalBody>
  
            <ModalFooter>
               
              {/* <Button colorScheme='blue' mr={3} onClick={onClose}> */}
           <RouterLink to="../Login">
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