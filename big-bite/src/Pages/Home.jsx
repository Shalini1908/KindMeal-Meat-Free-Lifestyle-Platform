import { Box,Image, Card , CardBody , CardFooter , Stack, Heading , Text , Flex , Link, Container , Button } from "@chakra-ui/react";
import React from "react";
import banner_whykindmeal from "../images/banner_whykindmeal.png";
import logopetfinder from "../images/logopetfinder.png";
import mediafeature from "../images/mediafeature.png";
import CarouselFadeExample from "./Carousel1";
import introdeal from "../images/introdeal.png";
import introkindmoment from "../images/introkindmoment.png";
import intromenu from "../images/intromenu.png";
import introfriends from "../images/introfriends.png";
import "../Css/Home.css";


function Home() {
return <div id="main">
  
  <Card bg={"#e9e9e9"} boxShadow="base">
<Box >
  <Box  ml="180px" display={"flex"}>

    <CarouselFadeExample/>
</Box>

<Card bg={"white"}  h={130}
width={"87%"} ml={"90px"}>

<Box display={"flex"} paddingTop={2}>

  <Image
 
     marginInline={1}
    objectFit='cover'
    style={{width:"100%" , height:"120px"}}
    borderRadius={10}

    src='https://www.kindmeal.my/photos/deal/3/383-1189-l.jpg'
    alt='Caffe Latte'
  />

<Image
  
    objectFit='cover'
    style={{width:"100%" , height:"120px"}}
    borderRadius={10}
    marginInline={1}
    src='https://www.kindmeal.my/photos/deal/7/728-5305-l.jpg'
    alt='Caffe Latte'
  />

<Image
 
    marginInline={1}
    objectFit='cover'
    style={{width:"100%" , height:"120px"}}
    borderRadius={10}
    
    src='https://www.kindmeal.my/photos/deal/4/498-2202-l.jpg'
    alt='Caffe Latte'
  />

<Image
    boxShadow='base'
    marginInline={1}
    objectFit='cover'
    style={{width:"100%" , height:"120px"}}
    borderRadius={10}
    src='https://www.kindmeal.my/photos/deal/6/684-4446-l.jpg'
    alt='Caffe Latte'
  />

<Image
    marginInline={1}
    objectFit='cover'
   style={{width:"100%" , height:"120px"}}
    borderRadius={10}
    src='https://www.kindmeal.my/photos/deal/7/710-4998-l.jpg'
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

  <Heading mr={"80%"} color={"#8d8d8d"} mt={"12px"} fontSize={22} fontWeight={400}>Latest News & Videos</Heading>


  <ul>

  <Flex ml={650}>
    <div id="bhoot">
 <Link color={"#2184ff"} mt={"-31px"} mr={2} fontSize={18}>Save Lives with Your Blog</Link>
 <Flex><Link color={"#2184ff"} mt={"-32px"} ml={3} fontSize={18} > •  News & Articles</Link></Flex>
 <Flex><Link color={"#2184ff"}  mt={"-32px"} ml={3} fontSize={18} > •  Follow Our Facebook</Link></Flex>
 </div>
 </Flex>
  </ul>
 

<Box display={"flex"} paddingTop={2}>
  <Container>
  <Image
    objectFit='cover'
  
    style={{width:"100%" , height:"200px"}}
    borderRadius={10}
    marginInline={1}

    src='https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/313572633_1222446185289163_301818545381834372_n.jpg?stp=dst-jpg_s720x720&_nc_cat=1&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=YQIGmo8tlTkAX9uSzj1&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AfA6XgzblFUG7jAAwGTuZDmnoPfYg8s9qv2bd-r8mxmNew&oe=639F9B35'
    alt='Caffe Latte'
  />
<Text noOfLines={2}  color={"#8d8d8d"} fontSize={14}  >Wild Turkeys Go Nuts About Guy On Motorcycle!</Text>
</Container>

<Container>
<Image
    objectFit='cover'

    borderRadius={10}
    style={{width:"100%" , height:"200px"}}
    marginInline={1}
 
    src='https://scontent-xsp1-1.xx.fbcdn.net/v/t15.5256-10/317917398_835831947653314_7294252524021926878_n.jpg?stp=dst-jpg_s720x720&_nc_cat=105&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=hsHMEsxpCYYAX8jh38A&_nc_ht=scontent-xsp1-1.xx&edm=ALdPpPkEAAAA&oh=00_AfDj8ifvYXuxX3V2k36OjBd0o-FCQ7mpsuuMjHsEcxMQhQ&oe=639DE0B0'
    alt='Caffe Latte'
  />
  <Text noOfLines={2}  color={"#8d8d8d"} fontSize={14}  >Sick Baby Cow Headbutts His Bffs All Day Now</Text>
</Container>

<Container>
<Image
    objectFit='cover'
    
    style={{width:"100%" , height:"200px"}}
    borderRadius={10}
    marginInline={1}
    
    src='https://scontent-xsp1-1.xx.fbcdn.net/v/t15.5256-10/318915884_561186642153164_127441678623272126_n.jpg?stp=dst-jpg_s720x720&_nc_cat=103&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=eQegN0-Nn9AAX9jGU4_&_nc_ht=scontent-xsp1-1.xx&edm=ALdPpPkEAAAA&oh=00_AfDPNDh9vtFB3mvO-u8Wcf-Bv6PZrBsAYQ6xFR8wa4rnpA&oe=639F271C'
    alt='Caffe Latte'
  />
  <Text  color={"#8d8d8d"} fontSize={14}  >The Best Air Fryer Recipe</Text>
</Container>

<Container>
<Image
    objectFit='cover'
  
    style={{width:"100%" , height:"200px"}}
    borderRadius={10}
    marginInline={1}
 
    src='https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/283214530_476021257630109_5388539080951558766_n.jpg?stp=dst-jpg_p720x720&_nc_cat=104&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=_cs7zbisYbwAX9On0jy&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AfA7W2uJsXdlGbtAWc43fqUfoVkqFXH6GdHqW0JRilnIgg&oe=639E8B0B'
    alt='Caffe Latte'
  />
  <Text noOfLines={2}  color={"#8d8d8d"} fontSize={14}  >Sea Turtle Stuck In Plastic Gets Help At Just The Right Time</Text>
</Container>

<Container>
<Image
    objectFit='cover'

    style={{width:"100%" , height:"200px"}}
    borderRadius={10}
    marginInline={1}

  
    src='https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/317151508_2973337439627415_2451805833777691388_n.jpg?stp=dst-jpg_s720x720&_nc_cat=106&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=-hXLRvmz8CEAX9NFJuy&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AfAiPFi9F3h2s6sbwrB5cMJ6X_65PX7RAB9GmAXO6oqsSw&oe=639EAF39'
    alt='Caffe Latte'
  />

<Text noOfLines={2}  color={"#8d8d8d"} fontSize={14}  >Wild Turkeys Go Nuts About Guy On Motorcycle!</Text>
</Container>   
     </Box>

    </Card>

<Card 
bg={"white"} h={340}
width={"90%"}
ml={"70px"}
mt={20}

>
<Heading mr={"80%"} color={"#8d8d8d"} mt={"12px"} fontSize={22} fontWeight={400}>
Yummylicious Moments</Heading>


<ul>

<Flex ml={750}>
  <div id="bhoot">
<Link color={"#2184ff"} mt={"-31px"} mr={2} fontSize={18}>Secret Recipes </Link>
<Flex><Link color={"#2184ff"} mt={"-32px"} ml={3} fontSize={18}> •  Member Hot Picks  </Link></Flex>
<Flex><Link color={"#2184ff"}  mt={"-32px"} ml={3} fontSize={18}>• Photo Moments</Link></Flex>
</div>
</Flex>
</ul>

<Box display={"flex"} paddingTop={2}>
  <Container>
  <Image
     objectFit='cover'

    style={{width:"100%" , height:"200px"}}
    borderRadius={10}
    marginInline={1}

    src='https://www.kindmeal.my/photos/moment/24/24753-48157-s.jpg'
    alt='Caffe Latte'
  />
<Text  color={"#8d8d8d"}>Pine 3 Vegetarian Restaurent</Text>
<Text fontSize={13 }  color={"#8d8d8d"} mt={"5px"}>VyVian</Text>
</Container>
<Container>
<Image
  
    borderRadius={10}
    marginInline={2}
    objectFit='cover'
 
    style={{width:"100%" , height:"200px"}}
    src='https://www.kindmeal.my/photos/moment/24/24752-48154-s.jpg'
    alt='Caffe Latte'
  />
  <Text  color={"#8d8d8d"}>Pure Heart Vegetarian</Text>
  <Text fontSize={13 }  color={"#8d8d8d"} mt={"5px"}>William21</Text>
  </Container>
  <Container>
<Image
    objectFit='cover'
 
    style={{width:"100%" , height:"200px"}}
    marginInline={1}
    borderRadius={10}

    src='https://www.kindmeal.my/photos/moment/24/24751-48149-s.jpg'
    alt='Caffe Latte'
  />
  <Text  color={"#8d8d8d"}>MyTOWN Shopping Centre</Text>
  <Text fontSize={13 }  color={"#8d8d8d"} mt={"5px"} >FatJedi</Text>
</Container>
<Container>
<Image
      objectFit='cover'
   
      style={{width:"100%" , height:"200px"}}
      borderRadius={10}
     src='https://www.kindmeal.my/photos/moment/24/24750-48146-s.jpg'
    alt='Caffe Latte'
  />
  <Text color={"#8d8d8d"}>Food In The Woods</Text>
  <Text fontSize={13 }  color={"#8d8d8d"} mt={"5px"} >VyVian</Text>
</Container>
<Container>
<Image
    objectFit='cover'
   marginInline={1}
  
    style={{width:"100%" , height:"200px"}}
    borderRadius={10}
    src='https://www.kindmeal.my/photos/recipe/1039/1039473-58906-m.jpg'
    alt='Caffe Latte'
  />
<Text  color={"#8d8d8d"}>Oreo Egg Tart</Text>
<Text fontSize={13 }  color={"#8d8d8d"} mt={"5px"}>My Weekend Plan</Text>
</Container>
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
<Heading mr={"80%"} color={"#8d8d8d"} mt={"12px"} fontSize={22} fontWeight={400}>Discover Restaurants</Heading>
  <ul>
  {/* <FaCircle fontSize={5} color={"#2184ff"}/> */}
  <Flex ml={750}>
    <div id="bhoot">
 <Link color={"#2184ff"} mt={"-31px"} mr={2} fontSize={18}>Vegetarian Directory  </Link>
 <Flex><Link color={"#2184ff"} mt={"-32px"} ml={3} fontSize={18} > • Restaurant Menu </Link></Flex>
 <Flex><Link color={"#2184ff"}  mt={"-32px"} ml={3} fontSize={18} > • Food Map</Link></Flex>
 </div>
 </Flex>
  </ul>
<Box display={"flex"} paddingTop={2}>
  <Container>
  <Image
  
 
    objectFit='cover'
    marginInline={1}
    style={{width:"100%" , height:"200px"}}
    borderRadius={10}

    src='https://www.kindmeal.my/photos/item/0/520-6541-s.jpg'
    alt='Caffe Latte'
  />
  <Text color={"#8d8d8d"}>Hot Chochlate Brownie</Text>
  </Container>


<Container>
<Image
       marginInline={1}
      objectFit='cover'
      style={{width:"100%" , height:"200px"}}
      borderRadius={10}
   
 
    src='https://www.kindmeal.my/photos/item/0/361-3902-s.jpg'
    alt='Caffe Latte'
  />
  <Text color={"#8d8d8d"}>Dessert</Text>
  </Container>
<Container>
<Image
   
   marginInline={1}
   objectFit='cover'
   style={{width:"100%" , height:"200px"}}

   borderRadius={10}
    
    src='https://www.kindmeal.my/photos/item/0/601-8769-s.jpg'
    alt='Caffe Latte'
  />

  <Text color={"#8d8d8d"}>Hakka Cha Nyuk Rice"</Text>
  </Container>
<Container>
<Image
    marginInline={1}
    objectFit='cover'
    style={{width:"100%" , height:"200px"}}
    borderRadius={10}
 
    src='https://www.kindmeal.my/photos/item/0/392-4480-s.jpg'
    alt='Western Style Fresh Mushroom'
  />
<Text  color={"#8d8d8d"}>Western Style Fresh Mushroom</Text>
</Container>
<Container>
<Image
    marginInline={1}
     objectFit='cover'
     style={{width:"100%" , height:"200px"}}
     borderRadius={10}
  
    src='https://www.kindmeal.my/photos/item/0/316-3258-s.jpg'
    alt='filter Coffee'
  />
<Text color={"#8d8d8d"}>Filter Coffee</Text>
</Container>
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
<Heading mr={"80%"} color={"#8d8d8d"} mt={"12px"} fontSize={22} fontWeight={400}>Amazing Superheroes</Heading>


<ul>
{/* <FaCircle fontSize={5} color={"#2184ff"}/> */}
<Flex ml={800}>
  <div id="bhoot"> 
<Link color={"#2184ff"} mt={"-31px"} mr={2} fontSize={18}>Latest Buzz </Link>
<Flex><Link color={"#2184ff"} mt={"-32px"} ml={3} fontSize={18} >•   Lifestyle Ambassadors</Link></Flex>
<Flex><Link color={"#2184ff"}  mt={"-32px"} ml={3} fontSize={18} >•   Win Gifts!</Link></Flex>
</div>
</Flex>
</ul>

<Box display={"flex"} paddingTop={2}>
  <Container>
  <Image
 
     marginInline={1}
    objectFit='cover'
    style={{width:"100%" , height:"200px"}}
    borderRadius={10}

    src='https://www.kindmeal.my/photos/member/26/26741-m.jpg'
    alt='Caffe Latte'
  />
<Text color={"#8d8d8d"}>JoanneTang</Text>
</Container>
<Container>
<Image
  
    objectFit='cover'
    style={{width:"100%" , height:"200px"}}
    borderRadius={10}
    marginInline={1}
    src='https://www.kindmeal.my/photos/member/41/41906-m.jpg'
    alt='Caffe Latte'
  />
<Text color={"#8d8d8d"}>FaisalMansor</Text>
</Container>
<Container>
<Image
 
    marginInline={1}
    objectFit='cover'
    style={{width:"100%" , height:"200px"}}
    borderRadius={10}
    
    src='https://www.kindmeal.my/photos/member/34/34576-m.jpg'
    alt='Caffe Latte'
  />
  <Text color={"#8d8d8d"}>HonLitYoong</Text>

</Container>
<Container>
<Image
    boxShadow='base'
    marginInline={1}
    objectFit='cover'
    style={{width:"100%" , height:"200px"}}
    borderRadius={10}
    src='https://www.kindmeal.my/photos/member/32/32319-m.jpg'
    alt='Caffe Latte'
  />
  <Text color={"#8d8d8d"}>ChenHou</Text>
  </Container>
<Container>
<Image
    marginInline={1}
    objectFit='cover'
   style={{width:"100%" , height:"200px"}}
    borderRadius={10}
    src='https://www.kindmeal.my/photos/member/13/13450-m.jpg'
    alt='Caffe Latte'
  />
  <Text color={"#8d8d8d"}>JeffreyCk</Text>
  </Container>
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
  
     <Image src={logopetfinder} ml={680} w={250} mt={"-50px"}/>
     <Text color={"#8d8d8d"} fontSize={24} fontWeight={600} mt={10}>Instant coupon & dining. No upfront coupon payment, booking or printing.</Text>
 
     <Flex mt={10} ml={81}>
<Card bg={"white"} w={"22%"} m={3} boxShadow='md'  h={"220px"}>
<Image src={introdeal} width={"120px"} h={"120px"} ml={85}></Image>
<Container><Heading fontSize={18} color={"#8d8d8d"} fontWeight={600}>Get Great Deals</Heading>
<Text color={"#92897f"} fontSize={16}>Show our FREE digital coupons to instantly enjoy exciting deals</Text></Container>



</Card>

<Card bg={"white"} w={"22%"} m={3} boxShadow='md'  h={"220px"}>
<Image src={introkindmoment} width={"120px"} h={"120px"} ml={85}></Image>
<Container><Heading fontSize={18} color={"#8d8d8d"} fontWeight={600}>Share KindMoments</Heading>
<Text color={"#92897f"} fontSize={16}>Spread the joy by sharing your yummy dining moments</Text></Container>



</Card>


<Card bg={"white"} w={"22%"} m={3} boxShadow='md'  h={"220px"}>
<Image src={intromenu} width={"120px"} h={"120px"} ml={85}></Image>
<Container><Heading fontSize={18} color={"#8d8d8d"} fontWeight={600}>Discover Delicious Food</Heading>
<Text color={"#92897f"} fontSize={16}>Explore the latest exquisite offerings and creative menus</Text></Container>



</Card>


<Card bg={"white"} w={"22%"} h={"220px"} m={3} boxShadow='md'>
<Image src={introfriends} width={"120px"} h={"120px"} ml={85}></Image>
<Container><Heading fontSize={18} color={"#8d8d8d"} fontWeight={600}>Meet Food Lovers</Heading>
<Text color={"#92897f"} fontSize={16}>Make new, compassionate friends and share great food tips</Text></Container>



</Card>
</Flex>

 <Text color={"#92897f"} fontWeight={500} noOfLines={2} fontSize={20} lineHeight={"-2px"} w={"75%"} ml={200} mt={10}>Any restaurant or cafe can join KindMeal, vegetarian or not, as long as the deals and menu featured are meat-free.
Enjoy a great meat-free dining experience. Easily save animal lives, health, environment and money now!</Text>


  <Button bg={"#f53838"} color={"white"} width={'35%'} h={"95px"} ml={450} mt={30} noOfLines={2} borderRadius={8} _hover={"#ef3e3e"}><Heading mt={3}>Join KindMeal Now </Heading>
  <Text>Your tasty journey begins here</Text></Button>

  <Text fontSize={30} mt={20} textAlign="center" color={"#bfbfbf"} fontWeight={600}>Featured On</Text>
     <Box mt={10}>
        <Image src={mediafeature} ml={150}></Image>
        </Box>
        </Card>
        <Box  mt={10}>
     <Image src={banner_whykindmeal} ml={150}></Image>
     </Box>
 
     </Box>
     </Card>
     
     </div>
}

export default Home
