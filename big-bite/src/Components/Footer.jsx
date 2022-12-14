import React from 'react';
import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
  
    Text,
    useColorModeValue,
} from '@chakra-ui/react';


export default function LargeWithLogoCentered() {
    return (
        <Box 
            bg={useColorModeValue('#2bb673', '#2bb673')}
            color={useColorModeValue('white', 'white')} h={560} fontFamily={"Roboto, Arial, Helvetica, sans-serif;"}>
            <Container maxW={'6xl'} pt={8} fontSize={14} textAlign={"left"} >
                <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 6 }}  spacing='40px'>
                    <Stack align={'flex-start'}>
                        <Text fontSize={17} fontWeight={"bold"}>General</Text>
                        <Link href={'#'}>Home</Link>
                        <Stack direction={'column'} align={'center'} spacing={2} >
                            <Link href={'#'}>Sign Up</Link>

                        </Stack>
                        <Link href={'#'}>Businesses/Restaurateurs</Link>
                        <Link href={'#'}>Advertising</Link>
                        <Link href={'#'}>About KindMeal.my</Link>
                        <Link href={'#'}>Help & FAQ</Link>
                        <Link href={'#'}>Terms & Conditions</Link>
                        <Link href={'#'}>Inspiring Partners</Link>
                        <Link href={'#'}>Lifestyle Ambassadors</Link>
                        <Link href={'#'}>Jobs & Careers</Link>
                        <Link href={'#'}>Contact Us </Link>


                    </Stack>
                    <Stack align={'flex-start'}>
                        <Text fontSize={17} fontWeight={"bold"}>Features</Text>
                        <Link href={'#'}>Meat-Free Deals</Link>
                        <Link href={'#'}>Tasty Menus</Link>
                        <Link href={'#'}>Kind Moments</Link>
                        <Link href={'#'}>Meat-Free Recipes</Link>
                        <Link href={'#'}>Member Recommendations</Link>
                        <Link href={'#'}>Featured Restaurants</Link>
                        <Link href={'#'}>Vegetarian & Vegan Directory</Link>
                        <Link href={'#'}>Food Map</Link>
                        <Link href={'#'}>Become A Superhero</Link>
                        <Link href={'#'}>VeganNews & VegetarianArticles</Link>
                        <Link href={'#'}>Latest Comments</Link>

                    </Stack>
                    <Stack align={'flex-start'}>
                        <Text fontSize={17} fontWeight={"bold"}>Social Media</Text>
                        <Link href={'#'}>KindMeal Widget</Link>
                        <Link href={'#'}>Facebook</Link>
                        <Link href={'#'}>Twitter</Link>
                        <Link href={'#'}>Instagram</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <Text fontSize={17} fontWeight={"bold"}>Mobile</Text>
                        <Link href={'#'}>iphone & ipod App</Link>
                        <Link href={'#'}>Android App</Link>
                        <Link href={'#'}>Dribbble</Link>
                        <Link href={'#'}>Instagram</Link>
                        <Link href={'#'}>LinkedIn</Link>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <Text fontSize={17} fontWeight={"bold"}>Exciting Promos</Text>
                        <Link href={'#'}>Gadhimai : Ending Mass Slaughter</Link>
                        <Link href={'#'}>Free Meals</Link>
                        <Link href={'#'}>Food Bloggers</Link>
                        <Link href={'#'}>Uber CHIRP</Link>
                        <Link href={'#'}>Jane Goodall Contest</Link>
                        <Link href={'#'}>Win Digi iPhone 6</Link>
                        <Link href={'#'}>Feed The Poor</Link>
                        <Link href={'#'}>Win Superhero Gifts</Link>
                        <Link href={'#'}>Win an iPad Mini 3</Link>

                    </Stack>
                    <Stack align={'flex-start'}>
                        <Text fontSize={17} fontWeight={"bold"}>Petfinder.my</Text>
                        <Link href={'#'}>Adopt A Pet</Link>
                        <Link href={'#'}>Smartphone Apps</Link>
                        <Link href={'#'}>WAGazine</Link>
                        <Link href={'#'}>Discussion Forum</Link>
                        <Link href={'#'}>Medical Fund</Link>
                    </Stack>
                </SimpleGrid>
            </Container>
            <Box py={10}>
                <Text pt={6} fontSize={'11'} textAlign={'center'} >
                    Copyright © KindMeal.my, 2014 - 2022. All rights reserved.
                </Text>
                <Text fontSize={'12'} >This website promotes compassionate, meat-free dining experience.
                    Some food may contain eggs, dairy products or alcohol, please view individual listings for details.</Text>
            </Box>
        </Box>
    );
}

