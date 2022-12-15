import { Box,Image, Card , CardBody , CardFooter , Stack, Heading , Text } from "@chakra-ui/react";
import React from "react";
import banner_whykindmeal from "../images/banner_whykindmeal.png";
import logopetfinder from "../images/logopetfinder.png";
import mediafeature from "../images/mediafeature.png";
import CarouselFadeExample from "./Carousel1";


function Home() {
return (
  <Card bg={"#e9e9e9"} boxShadow="base">
<Box>
  <Box ml={70} display={"flex"}>
    <Box><CarouselFadeExample/></Box>
</Box>

<Card bg={"white"}  h={130}
width={"75%"} ml={"168px"}></Card>

<Card 
bg={"white"} h={330}
width={"90%"}
ml={"70px"}
mt={35}
>

  <Heading mr={"80%"} color={"#8d8d8d"} mt={2} fontSize={22} fontWeight={400}>Latest News & Videos</Heading>

<Box display={"flex"} paddingTop={5}>
  <Image
    objectFit='cover'
    width={"100%"}
    h={"30%"}
    borderRadius={10}
    marginInline={2}

    src='https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/313572633_1222446185289163_301818545381834372_n.jpg?stp=dst-jpg_s720x720&_nc_cat=1&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=YQIGmo8tlTkAX9uSzj1&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AfA6XgzblFUG7jAAwGTuZDmnoPfYg8s9qv2bd-r8mxmNew&oe=639F9B35'
    alt='Caffe Latte'
  />


<Image
    objectFit='cover'
    width={"100%"}
    h={"30%"}
    borderRadius={10}
    marginInline={2}
 
    src='https://scontent-xsp1-1.xx.fbcdn.net/v/t15.5256-10/317917398_835831947653314_7294252524021926878_n.jpg?stp=dst-jpg_s720x720&_nc_cat=105&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=hsHMEsxpCYYAX8jh38A&_nc_ht=scontent-xsp1-1.xx&edm=ALdPpPkEAAAA&oh=00_AfDj8ifvYXuxX3V2k36OjBd0o-FCQ7mpsuuMjHsEcxMQhQ&oe=639DE0B0'
    alt='Caffe Latte'
  />

<Image
    objectFit='cover'
    width={230}
    h={"30%"}
    borderRadius={10}
    marginInline={2}
    
    src='https://scontent-xsp1-1.xx.fbcdn.net/v/t15.5256-10/318915884_561186642153164_127441678623272126_n.jpg?stp=dst-jpg_s720x720&_nc_cat=103&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=eQegN0-Nn9AAX9jGU4_&_nc_ht=scontent-xsp1-1.xx&edm=ALdPpPkEAAAA&oh=00_AfDPNDh9vtFB3mvO-u8Wcf-Bv6PZrBsAYQ6xFR8wa4rnpA&oe=639F271C'
    alt='Caffe Latte'
  />

<Image
    objectFit='cover'
    width={"100%"}
    h={"30%"}
    borderRadius={10}
    marginInline={2}
 
    src='https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/283214530_476021257630109_5388539080951558766_n.jpg?stp=dst-jpg_p720x720&_nc_cat=104&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=_cs7zbisYbwAX9On0jy&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AfA7W2uJsXdlGbtAWc43fqUfoVkqFXH6GdHqW0JRilnIgg&oe=639E8B0B'
    alt='Caffe Latte'
  />

<Image
    objectFit='cover'
    width={"100%"}
    h={"30%"}
    borderRadius={10}
    marginInline={2}

  
    src='https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/317151508_2973337439627415_2451805833777691388_n.jpg?stp=dst-jpg_s720x720&_nc_cat=106&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=-hXLRvmz8CEAX9NFJuy&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AfAiPFi9F3h2s6sbwrB5cMJ6X_65PX7RAB9GmAXO6oqsSw&oe=639EAF39'
    alt='Caffe Latte'
  />

      
     </Box>

    </Card>

<Card 
bg={"white"} h={340}
width={"90%"}
ml={"70px"}
mt={20}
>

<Box display={"flex"} paddingTop={20}>
  <Image
    objectFit='cover'

    borderRadius={10}
     marginInline={5}
    boxSize='220px'

    src='https://www.kindmeal.my/photos/moment/24/24753-48157-s.jpg'
    alt='Caffe Latte'
  />


<Image
    objectFit='cover'

    borderRadius={10}
 
    boxSize='220px'
 
    src='https://www.kindmeal.my/photos/moment/24/24752-48154-s.jpg'
    alt='Caffe Latte'
  />

<Image
    objectFit='cover'
   
    borderRadius={10}
    marginInline={5} 
    boxSize='220px'
    src='https://www.kindmeal.my/photos/moment/24/24751-48149-s.jpg'
    alt='Caffe Latte'
  />

<Image
    objectFit='cover'
  
    boxSize='220px'
    borderRadius={10}
  
 
    src='https://www.kindmeal.my/photos/moment/24/24750-48146-s.jpg'
    alt='Caffe Latte'
  />

<Image
    objectFit='cover'
  
    boxSize='220px'
    borderRadius={10}
     marginInline={5}

  
    src='https://www.kindmeal.my/photos/moment/24/24749-48145-s.jpg'
    alt='Caffe Latte'
  />

      
     </Box>

     

     
  <Stack>
    <CardBody>
   
    </CardBody>

    <CardFooter>

    </CardFooter>
  </Stack>
</Card>

<Card 
bg={"white"} h={340}
width={"90%"}
ml={"70px"}
mt={20}
>

<Box display={"flex"} paddingTop={20}>
  <Image
    objectFit='cover'
    boxSize='220px'
    borderRadius={10}
    marginInline={5}

    src='https://www.kindmeal.my/photos/item/0/433-5018-s.jpg'
    alt='Caffe Latte'
  />


<Image
    objectFit='cover'
    boxSize='220px'
    borderRadius={10}
 
 
    src='https://www.kindmeal.my/photos/item/0/361-3902-s.jpg'
    alt='Caffe Latte'
  />

<Image
    objectFit='cover'
    boxSize='220px'
    borderRadius={10}
     marginInline={5}
    
    src='https://www.kindmeal.my/photos/item/0/482-5774-s.jpg'
    alt='Caffe Latte'
  />

<Image
    objectFit='cover'
    boxSize='220px'
    borderRadius={10}
 
 
    src='https://www.kindmeal.my/photos/item/0/315-3249-s.jpg'
    alt='Caffe Latte'
  />

<Image
    objectFit='cover'
    boxSize='220px'
    borderRadius={10}
    marginInline={5}

  
    src='https://www.kindmeal.my/photos/item/0/530-6878-s.jpg'
    alt='Caffe Latte'
  />

      
     </Box>

     

     
  <Stack>
    <CardBody>
  
    </CardBody>

    <CardFooter>
   
    </CardFooter>
  </Stack>
</Card>

<Card 
bg={"white"} h={340}
width={"90%"}
ml={"70px"}
mt={20}
>

<Box display={"flex"} paddingTop={20}>
  <Image
    objectFit='cover'
    boxSize='220px'
    borderRadius={10}
    marginInline={5}

    src='https://www.kindmeal.my/photos/member/26/26741-m.jpg'
    alt='Caffe Latte'
  />


<Image
    objectFit='cover'
    boxSize='220px'
    borderRadius={10}
 
 
    src='https://www.kindmeal.my/photos/member/41/41906-m.jpg'
    alt='Caffe Latte'
  />

<Image
    objectFit='cover'
    boxSize='220px'
    borderRadius={10}
    marginInline={5}
    
    src='https://www.kindmeal.my/photos/member/40/40841-m.jpg'
    alt='Caffe Latte'
  />

<Image
    objectFit='cover'
    boxSize='220px'
    borderRadius={10}
    boxShadow='base'
 
    src='https://www.kindmeal.my/photos/member/32/32319-m.jpg'
    alt='Caffe Latte'
  />

<Image
    objectFit='cover'
    boxSize='220px'
    borderRadius={15}


  
    src='https://www.kindmeal.my/photos/member/40/40588-m.jpg'
    alt='Caffe Latte'
  />

      
     </Box>

     

     
  <Stack>
    <CardBody>
   
    </CardBody>

    <CardFooter>
  
    </CardFooter>
  </Stack>
</Card>
<Card bg={"white"} mt={58} borderRadius={null}>
<Heading color={"#8d8d8d"} fontSize="32px" fontWeight={500} mt={20}>Introducing Malaysia's Pioneering Meat-Free Lifestyle Platform</Heading>
<Text color={"#b3b3b3"} fontSize={22} mt={10} mr={240}>
  
Brought to you by</Text>
  
     <Image src={logopetfinder} ml={680} w={250} mt={"-40px"}/>
     <Text color={"#8d8d8d"} fontSize={24} fontWeight={600} mt={10}>Instant coupon & dining. No upfront coupon payment, booking or printing.</Text>
  
     <Box mt={300}>
        <Image src={mediafeature} ml={150}></Image>
        </Box>
        </Card>
        <Box  mt={10}>
     <Image src={banner_whykindmeal} ml={150}></Image>
     </Box>
 
     </Box>
     </Card>
     
     )
}

export default Home
