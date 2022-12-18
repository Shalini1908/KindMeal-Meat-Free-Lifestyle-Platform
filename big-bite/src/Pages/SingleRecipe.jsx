import React from "react";
import minion from "../images/minion.jpg";
import cartoon from "../images/cartoon.jpg"
import {Card, Image , Flex , Text , Button , Heading, Container} from "@chakra-ui/react";
import pastry from "../images/pastry.jpg";
import icon_star from "../images/icon_star.png";
import medal_gold from "../images/medal_gold.png";
import share_facebook from "../images/share_facebook.png";
import share_twitter from "../images/share_twitter.png"



export default function SingleRecipe(){

    return (
<>

<Image src={minion} width={"100%"}></Image>
<Card bg={"white"} w={"100%"} h="900px" mt={"-40px"}>

<Image src={cartoon} w={"200px"} h={"200px"} ml={"150px"} mt={"-80px"} style={{border:"1px solid black"}}></Image>
<Flex ml={"30%"} mt={"-90px"}>
    <Image src={medal_gold} w={"40px"} h={"40px"}/>
<Text ml={5} fontSize={18} mt={2}>KindMealChef</Text>
<Text fontSize={18} mt={2} ml={4}>14 Followers</Text>
</Flex>

<Flex  ml={"30%"} mt={"20px"} >
<Button bg={"#f53838"} color={"white"} _hover={"#f53838"}> + Follow Member</Button>
<Button ml={5}>Contact Member</Button>
</Flex>

<Flex ml={"150px"} mt={"30px"}>

<Card>
    <Flex>
    <Image src={pastry} style={{width:"500px", height:"400px"}}></Image>
    <Card  bg={"white"} style={{width:"500px", height:"400px" }}>

{/* <Flex> */}
       <Heading mr={300}  fontSize={20} mt={5}>Time</Heading>
        <Text mr={300} color={"#2bb673"} mt={5} fontSize={20}>53 mins</Text>
        {/* </Flex> */}

        <Heading ml={300} mt={"-75px"}  fontSize={20}>Servings</Heading>
        <Text ml={300} color={"#2bb673"} mt={5} fontSize={20}>48 Servings</Text>
        {/* </Flex> */}


<Heading mr={300} fontSize={20} mt={70}>Diet Restriction ?</Heading>
<Heading mr={300}  mt={5}>---</Heading>




<Heading ml={300} fontSize={20} mt={"-88px"}>Rating</Heading>
<Flex ml={340} mt={5} style={{width:"30px" , height:"30px"}}>
<Image src={icon_star} />
<Image src={icon_star} />
<Image src={icon_star} />
<Image src={icon_star} />
</Flex>


<Flex mt={20}>
    <Button mt={8} ml={5} bg={"#1877f2"} color="white" w={70}>Like</Button>
    <Text ml={19} mt={10}>Like this recipe & share with friends!</Text>
    <Flex mt={8} ml={10}>
  <Image src={share_facebook} style={{width:"30px" , height:"30px",margin:"2px"}}/>
  <Image src={share_twitter} style={{width:"30px" , height:"30px" ,margin:"2px"}}/>
  <Image/>
</Flex>
    </Flex>


    </Card>
    </Flex>
    
    <Flex>

   
    <Container textAlign={"left"} fontSize={14} mt={"15px"} h={"325px"}>
    <Heading fontSize={20} textAlign={"left"} mt={2} fontWeight={500}>Secret Ingredients</Heading>
    <li>1 cup butter, softened</li>
<li>3/4 cup sugar</li>
<li>1 large egg</li>
<li>1 teaspoon vanilla</li>
<li>2 1/4 cups flour</li>

<li>2 cups semi-sweet miniature chocolate chips, divided</li>
</Container>


<Container  fontSize={14} mt={"15px"} textAlign="justify">
<Heading fontSize={20} textAlign={"left"}  mt={2} fontWeight={500} >Directions</Heading>
<p>1.   Preheat oven to 350º.</p>
<p>2.   In a large mixing bowl,beat butter and sugar together until creamy.</p>
<p>3.   Beat in egg and vanilla.</p>
<p>4.   Add flour gradually and beat well.</p>
<p>5.   Stir in 1 cup morsels.</p>
<p>6.   Press on bottom of ungreased 9x13 baking pan.</p>
<p>7.   Bake for 30-33 minutes or until the top is lightly browned.</p>
<p>8.   Immediately sprinkle with the remaining chocolate chips and let sit for 5 minutes or so until the chips become shiny; then spread evenly over top.</p>
<p>9.   Cool completely in the pan and then cut into squares.</p>
</Container>


    </Flex>
</Card>


</Flex>


</Card>
</>
    )


}