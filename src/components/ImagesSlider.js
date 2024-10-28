import React, { useState } from "react";
import { Button, Box } from "@radix-ui/themes";
import * as Slider from "@radix-ui/react-slider";
import Image from "next/image";
const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box style={sliderContainerStyle}>
      <Button variant="soft" onClick={prevImage} size="1">
        {"<"}
      </Button>
      <Box position="relative" width="auto" height="100%">
        <Image
          src={images[currentIndex]}
          alt={`Product image ${currentIndex + 1}`}
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
      <Button variant="soft" onClick={nextImage} size="1">
        {">"}
      </Button>
      <Slider.Root
        style={{ marginTop: "20px" }}
        value={[currentIndex]}
        max={images.length - 1}
        step={1}
      >
        <Slider.Track
          style={{ backgroundColor: "#ddd", height: "4px", width: "100%" }}
        >
          <Slider.Range style={{ backgroundColor: "#5932ea" }} />
        </Slider.Track>
        <Slider.Thumb
          style={{
            backgroundColor: "#5932ea",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
          }}
        />
      </Slider.Root>
    </Box>
  );
};

const sliderContainerStyle = {
  position: "relative",
  width: "100%",
  maxHeight: "368px",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
};

export default ImageSlider;
