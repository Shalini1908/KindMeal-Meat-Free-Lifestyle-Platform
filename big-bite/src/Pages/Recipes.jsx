// import React from "react";
// import Navbar from "../Components/Navbar";
// import Footer from "../Components/Footer";

// function Recipes(){

// return (

// <>
//     <div>
//         <Navbar/>
//         <Footer/>
//     </div>
//     </>


// )


// }

// export default Recipes;

import { Box, Container, Flex, Grid, GridItem, Image, Text }  from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import Navbar from '../Components/Navbar'
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
      const res = await fetch(`https://umang-food-api.onrender.com/api/Food?_page=${page}&_limit=5`);
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
  }, [page]);
  return (
    <Box>
        <Navbar/>
        <Container mt="40px" maxW={{base:'full',md:'container.md'}}
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
                <Box bg="blue.100" 
                columns={{sm:2,md:4}} 
                color={'gray.600'}
                boxShadow="lg"
                borderRadius={'20px'}
                >
                  <Grid templateRows={'repeat(12,1fr)'} h='xl'>
                    <GridItem rowSpan={10} >
                      <Flex align={'center'} justify={'center'}>
                        <Image src={el.img} boxSize='xs' w="full" h="sm"/>
                      </Flex>
                    </GridItem>
                    <GridItem rowSpan={6}>
                      <Flex align={'center'} justify={'center'}>
                        <Link to={`/product/${el.id}`}>
                          <Text color={'red'} textAlign={'center'}>{el.title}</Text>
                        </Link>
                      </Flex>
                    </GridItem>
                    <GridItem rowSpan={6}>
                      <Flex align={'center'} justify={'center'}>
                        <Box>
                          <Text textAlign={'center'}>food, substance consisting essentially of protein, carbohydrate, .....</Text>
                        </Box>
                      </Flex>
                    </GridItem>


                  </Grid>

                </Box>

              </GridItem>
            ))}

          </Grid>


       </Container>
       <Box data-testid="pagination-container">
        {
           <Pagination currentPage={page} handlePageChange={handlePageChange}/>
         }
     </Box>
    </Box>
  )
}

export default Recipes
