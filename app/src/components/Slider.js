import React from 'react'
import {
    Box,
    Text,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
  } from "@chakra-ui/core";

const SliderComponent = ({ handleDrag, len }) => {
    return (
      <Box width={["100%", "50%", "40%", "35%"]}>
        <Slider
          min={8}
          max={100}
          py={4}
          defaultValue={20}
          color="teal"
          onChange={handleDrag}
        >
          <SliderTrack />
          <SliderFilledTrack />
          <SliderThumb size={6}>
            <Text color="gray.500" fontSize="xs">
              {len}
            </Text>
          </SliderThumb>
        </Slider>
      </Box>
    );
}

export default SliderComponent
