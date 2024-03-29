import { Box, Button,} from '@chakra-ui/react';
import React from 'react'
function createArrayOfSize(n) {
    return new Array(n).fill(0);
  }

function Pagination({currentPage,handlePageChange}) {

    let pages =createArrayOfSize(4).map((a, i)=>
    (<Button bg={"#17824f"} _hover={"#17824f"} ml="15px" mt='20px' color={"white"} width={"15px"} h={"35px"}disabled={currentPage===(i+1)}
     onClick={()=>handlePageChange(i+1)} >{i+1}</Button>  ));
    return <Box>{pages}</Box>;
}

export default Pagination