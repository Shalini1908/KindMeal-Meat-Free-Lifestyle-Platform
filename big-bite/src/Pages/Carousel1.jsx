import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import food1 from "../images/food1.png";
import food2 from "../images/food2.png"
import food3 from "../images/food3.png";
import food4 from "../images/food4.png"
import food5 from "../images/food5.png";
import food6 from "../images/food6.png"
import food7 from "../images/food7.png";

import { Box } from "@chakra-ui/react";

function CarouselFadeExample() {
  return (
    <Box ml={"100px"}>
      <Carousel fade>

        <Carousel.Item >
          <img src={food1} alt="food1" />

        </Carousel.Item>

        <Carousel.Item >
          <img src={food2} alt="food2" />

        </Carousel.Item>

        <Carousel.Item>
          <img src={food3} alt="food3" />

        </Carousel.Item>

        <Carousel.Item>
          <img src={food4} alt="food4"/>

        </Carousel.Item>

        <Carousel.Item>
          <img src={food5} alt="food5"/>

        </Carousel.Item>

        <Carousel.Item>
          <img src={food6} alt="food6" />

        </Carousel.Item>

        <Carousel.Item>
          <img src={food7} alt="food7"/>
        </Carousel.Item>
      </Carousel>
    </Box>
  );
}

export default CarouselFadeExample;