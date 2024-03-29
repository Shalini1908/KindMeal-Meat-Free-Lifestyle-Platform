import { Box, Container, Flex, Grid, GridItem, Image, Text, Button, Wrap , WrapItem , Card , Heading}  from '@chakra-ui/react'
// import { Button } from 'bootstrap';
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import { Avatar } from '@chakra-ui/react';
import {FaHeart} from "react-icons/fa";
import {FaComment} from "react-icons/fa";
import {Link as RouterLink} from "react-router-dom"
// import bannerrecipe from "../images/bannerrecipe.jpg";

import Pagination from '../Components/Pagination';

function Recipes() {
  const getUrls= (value)=>{
    value = Number(value);
  if (typeof value === "number" && value <= 0) {
    value = 1;
  }
  if (!value) {
    value = 1;
  }
  return value;
  }

  const [data, setData] = useState([]);
  const [searchParams , setSearchParams] = useSearchParams();
  const IntialSearch = getUrls(searchParams.get("page"))
  const [page,setPage] = useState(IntialSearch);
  const fetching = async (page) => {
    try {
      const res = await fetch(`https://umang-food-api.onrender.com/api/Food?_page=${page}&_limit=6`);
   
      const data12 = await res.json();
      setData(data12);
    } catch (error) {}
  };
  const handlePageChange = (value) => {
    setPage(value);
  };
  useEffect(() => {
    setSearchParams({page});
    fetching(page);
  }, [page , setSearchParams]);
  return (

<>
    <Box>
         <Card bg={"white"}   maxH={{ base: '100%', sm: '800vh' }}>
      
            <Card bg={"#e9e9e9"} h={204}>
<Flex><Heading textAlign={"left"} ml={75} mt={8} fontSize={20} color={"#333333"} fontWeight={500}>Food & Drinks  | </Heading>
<Text color={'gray.600'} mt={"35px"} ml={2} >Yummy Meat-Free Recipes</Text></Flex>


 
<Text textAlign={"left"} ml={75} mt={3} fontFamily={"Roboto, Arial, Helvetica, sans-serif;"} fontSize={15}>Want to craft your own creative meat-free meals? Get inspiration from other food lovers, or share your own masterpieces!</Text>

<Text textAlign={"left"} ml={75} mt={3} fontFamily={"Roboto, Arial, Helvetica, sans-serif;"} fontSize={15}>Transform into a master chef now.</Text>
      
   
</Card>
      <Box data-testid="pagination-container">
    {
       <Pagination currentPage={page} handlePageChange={handlePageChange}/>
     }
 </Box>

        <Container mt="40px" maxW={{base:'full',md:'container.lg'}}
        p={{base : 2 ,lg:0}}
        >
          <Grid
          w="full"
          templateColumns={{
            base : 'repeat(1,1fr)',
            md: 'repeat(2,1fr)',
            lg: 'repeat(3,1fr)'
          }}
          gap="2rem"
          >
            {data && data.map((el)=>(
              <GridItem key={el.id}>
                <Box bg="beige" 
                columns={{sm:2,md:4}} 
                color={'gray.600'}
                boxShadow="xl"
                borderRadius={8}
                h={400}
          
                >
                    <Wrap>
  <WrapItem>
    <Avatar src='https://www.kindmeal.my/photos/member/28/28122-s.jpg' />
    <Text ml={50} mt={4}>MalikTaufiq</Text>
  </WrapItem>
  </Wrap>
                 <Button bg={"#f53838"} color={"white"} ml={240} width={70} h={30} mt={"-70px"}>View</Button>
                  <Grid templateRows={'repeat(12,1fr)'} h='lg'>
                    <GridItem rowSpan={10} >
                      <Flex align={'center'} justify={'center'}>
                      <RouterLink to="/singlerecipe">
                        <Image src={el.img} boxSize='xs' w="300px" h="290px" mt={1} mb={2}/>
                        </RouterLink>
                      </Flex>
                      <Flex justifyContent={"space-around"}>
                   
                      <FaHeart color={"#f53838"} size={20} />
                   
                      <FaComment color={"gray"} size={20}/>
                      </Flex>
                    </GridItem>
                    <GridItem rowSpan={6}>
                      <Flex align={'center'} justify={'center'}>
                        <Link to={`/product/${el.id}`}>
                          
                        </Link>
                      </Flex>
                    </GridItem>
                    <GridItem rowSpan={6}>
                      <Flex align={'center'} justify={'center'}>
                      
                      </Flex>
                    </GridItem>

                

                  </Grid>

                </Box>

              </GridItem>
             
            ))}

          </Grid>


       </Container>

       </Card>
    </Box>
    </>
  )
}

export default Recipes
