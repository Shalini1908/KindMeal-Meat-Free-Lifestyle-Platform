import React from 'react'
import { Card, Grid, Text, Flex, Heading, Image, Button, Container } from "@chakra-ui/react";
import bannerrecipe from "../images/bannerrecipe.jpg"
import how_kindmeal_works from "../images/how_kindmeal_works.png"
import icon_alcohol from "../images/icon_alcohol.png"
import icon_star from "../images/icon_star.png"
import icon_milk from "../images/icon_milk.png"
import icon_egg from "../images/icon_egg.png"


export default function MealDeal() {


    const Chinese = [
        {
            "id": 1,
            "image": "https://www.kindmeal.my/photos/deal/3/383-1189-l.jpg",
            "category": "Chinese",
            "title": "Dining Bowl Asian Delight",
            "desc": "Dine in this authentic cozy Chinese environment with any items from the menu, made with fresh and quality ingredients, in an envir.."
        },
        {
            "id": 2,
            "image": "https://www.kindmeal.my/photos/deal/7/728-5305-l.jpg",
            "category": "Chinese",
            "title": "Malaysian Favrorites & Ramen",
            "desc": "A meat-free restaurant run by a small-town girl, serving local cuisine prepared and cooked with plenty of love. Experience our de.."
        },
        {
            "id": 3,
            "image": "https://www.kindmeal.my/photos/deal/6/664-4296-l.jpg",
            "category": "Chinese",
            "title": "The Soul of Local Delights",
            "desc": "Revitalize your soul with our healthy, delicious local cuisine, straight from the food paradise of Melaka! Enjoy discounts off al.."
        },
        {
            "id": 4,
            "image": "https://www.kindmeal.my/photos/deal/4/498-2202-l.jpg",
            "title": "Imperial Feast",
            "desc": "Dine like an emperor on a variety of Japanese and Western meals! Feast on delightful items from our selected menu sections below:.."
        }
    ]
    const Burger = [

        {
            "id": 1,
            "image": "https://www.kindmeal.my/photos/deal/6/696-5075-l.jpg",
            "category": "Burger",
            "title": "Fusion Gourmet Cuisine",
            "desc": "Alice Kitchen delights you with fusion vegetarian and vegan gourmet cuisine, with an innovative gastronomic take on traditional an.."
        },
        {
            "id": 2,
            "image": "https://www.kindmeal.my/photos/deal/6/684-4446-l.jpg",
            "category": "Burger",
            "title": "Planet Based Culinary Experience",
            "desc": "We indulge you in a delightful meat-free Western culinary experience within a cozy ambience, while also offering plant-based cooki.."
        },
        {
            "id": 3,
            "image": "https://www.kindmeal.my/photos/deal/7/710-4998-l.jpg",
            "category": "Burger",
            "title": "Tasty Waffles , Tarts & Farsan",
            "desc": "Enjoy a creative Western-Indian fusion menu of delicious waffles, tarts, Farsan & more! Feast on any items on our menu: BREADED.."
        },
        {
            "id": 4,
            "image": "https://www.kindmeal.my/photos/deal/7/706-4801-l.jpg",
            "category": "Burger",
            "title": "Creative Burger and Snacks",
            "desc": "Our burger recipes range from traditional to special, for those seeking to discover outrageous burger tastes. We serve creative co.."
        }
    ]
    return (




        <div>

            {/* <Card bg={"white"}   maxH={{ base: '100%', sm: '800vh' }}> */}

            <Card bg={"#e9e9e9"} h={204}>
                <Flex><Heading textAlign={"left"}  ml={"15%"} mt={8} fontSize={26} color={"#333333"} fontWeight={500}>
                    Meat-Free Deals | </Heading>
                    <Text color={'gray.600'} mt={"28px"} ml={2} fontSize={26} >Restaurants In Malaysia</Text></Flex>



                <Text textAlign={"left"} ml={"15%"} mt={3} fontFamily={"Roboto, Arial, Helvetica, sans-serif;"} fontSize={14} >Browse delicious meat-free, vegetarian deals from top restaurants and cafes! Just click on "Get Free Coupon" to obtain instant discounts and dine at the restaurants.</Text>
                <Text textAlign={"left"} ml={"15%"} fontFamily={"Roboto, Arial, Helvetica, sans-serif;"} fontSize={14}>No upfront payment, booking or printing is needed. If you share it on social media, you'll even DOUBLE your discount!</Text>

                <Text textAlign={"left"} ml={"15%"} mt={3} fontFamily={"Roboto, Arial, Helvetica, sans-serif;"} fontSize={14}>Download our mobile app now to easily get coupons and start dining in a few seconds. Effortlessly save lives, health, environment and money now!</Text>


            </Card>
            <Card width={"80%"} style={{ margin: "auto" }} >
                <Image src={bannerrecipe} width="100%" />
            </Card>

            <Container marginLeft={90} bg={"#f9f9f9"}>
                <Grid templateColumns='repeat(2, 1fr)' rowGap={25} columnGap={20} mt={10}>
                    {Chinese.map((e) => (

                        <Card w={"550px"} h={"550px"} bg={"white"} mt={10} style={{ margin: "auto" }} boxShadow={"base"} textAlign={"left"}>
                            <img src={e.image} alt="" style={{ width: "550px", height: "342px" }} />
                            <Heading textAlign={"center"} fontSize={17} mt={2}><p>{e.title}</p></Heading>

                            <Text mt={2}>{e.desc}</Text>
                            <Flex>
                                <Button bg={"#f53838"} color={"white"} width={"200px"} height="50px" mt={2}>Get free Coupon</Button>
                                <Flex ml={215} mt={3}>
                                    <Image src={icon_star} w={"30px"} h={"30px"} />
                                    <Image src={icon_star} w={"30px"} h={"30px"} />
                                    <Image src={icon_star} w={"30px"} h={"30px"} />
                                    <Image src={icon_star} w={"30px"} h={"30px"} />
                                </Flex >
                            </Flex>
                            <Flex mt={3}>
                                <Image src={icon_egg} w={"45px"} h={"45px"} />
                                <Image src={icon_milk} w={"45px"} h={"45px"} ml={1} />
                                <Image src={icon_alcohol} w={"45px"} h={"45px"} ml={1} />
                                <Text ml={85} fontSize={18} mt={2}>KindMeal Discount 30% Off</Text>
                            </Flex>


                        </Card>

                    ))}
                </Grid>



                <Grid templateColumns='repeat(2, 1fr)' rowGap={25} columnGap={20} marginTop={50}>
                    {Burger.map((e) => (
                        <Card bg={"white"} w={"550px"} h={"550px"} mt={10} style={{ margin: "auto" }} boxShadow={"base"} textAlign={"left"}>
                            <img src={e.image} alt="" style={{ width: "550px", height: "342px" }} />
                            <Heading textAlign={"center"} fontSize={17} mt={2}><p>{e.title}</p></Heading>
                            <Text textAlign={"left"} mt={2}>{e.desc}</Text>
                            <Flex>
                                <Button bg={"#f53838"} color={"white"} width={"200px"} height="50px" mt={2}>Get free Coupon</Button>
                                <Flex ml={215} mt={3}>
                                    <Image src={icon_star} w={"30px"} h={"30px"} />
                                    <Image src={icon_star} w={"30px"} h={"30px"} />
                                    <Image src={icon_star} w={"30px"} h={"30px"} />
                                    <Image src={icon_star} w={"30px"} h={"30px"} />
                                </Flex >
                            </Flex>
                            <Flex mt={3}>

                                <Image src={icon_egg} w={"45px"} h={"45px"} />
                                <Image src={icon_milk} w={"45px"} h={"45px"} ml={1} />
                                <Image src={icon_alcohol} w={"45px"} h={"45px"} ml={1} />
                                <Text ml={85} fontSize={18} mt={2}>KindMeal Discount 10% Off</Text>
                            </Flex>

                        </Card>
                    ))}
                </Grid>
            </Container>
            <Card bg={"#e0e0e0"} width={"100%"} mt={70}><Image src={how_kindmeal_works}  style={{margin:"auto"}}/></Card>
      
        </div>
    )


}