import React from 'react';
import Image from 'next/image';
import { Flex, Box } from '@radix-ui/themes';

const baseImages = ['/Image1.jpg', '/Image2.jpg', '/Image3.jpg'];

const banners = Array.from({ length: 3 }, () =>
  baseImages.map(image => ({ backgroundImage: image }))
).flat();

export const BannerCarousel = () => (
  <Box
    width="100%"
    style={{
      whiteSpace: 'nowrap',
      overflowX: 'scroll',
      scrollbarWidth: 'none',
      WebkitOverflowScrolling: 'touch',
    }}
  >
    <Flex mb="1" display="flex" gap="2" width='fit-content'>
      {banners.map((banner, index) => (
        <Box
          key={index}
          height="200px"
          width="auto"
          display="inline-block"
          style={{
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          }}
        >
          <Image
            src={banner.backgroundImage}
            alt={`Banner ${index + 1}`}
            width={300}
            height={200}
            priority
          />
        </Box>
      ))}
    </Flex>
  </Box>
);

export default BannerCarousel;
