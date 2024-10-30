import React from "react";
import { Dialog, Flex, Button, Box, Text, Select, Strong } from "@radix-ui/themes";
import ImageSlider from "./ImagesSlider";
import { Product } from "@component/types";

interface IDialogContent {
  product: Product;
}

export const DialogContent: React.FC<IDialogContent> = ({ product }) => {
  return (
    <Dialog.Content size="4">
      <Flex gap="3" justify="end">
        <Dialog.Close>
          <Button variant="soft" color="gray">
            Close
          </Button>
        </Dialog.Close>
      </Flex>

      <Flex direction="column" gap="4">

        <Box width="100%" mb="3">
          <ImageSlider images={product.images} />
        </Box>

        <Box width="100%">
          <Box mb="2">
            <Dialog.Title>
              {product.title}
            </Dialog.Title>
            <Text as="div" size="2" color="gray">
              Price: ${product.price}
            </Text>
          </Box>

          <Flex align="center" gap="2" mb="3">
            <Text as="div" size="2" color="gray">
              Size:
            </Text>
            <Select.Root defaultValue="standart">
              <Select.Trigger variant="classic" />
              <Select.Content>
                <Select.Group>
                  <Select.Item value="standart">Standard</Select.Item>
                  <Select.Item value="mini">Mini</Select.Item>
                  <Select.Item value="medium" disabled>Medium</Select.Item>
                </Select.Group>
              </Select.Content>
            </Select.Root>
          </Flex>

          <Text as="div" size="2" mb="3">
            <Dialog.Description>
              {product.description}
            </Dialog.Description>
          </Text>

          <Button color="gray" variant="surface" highContrast>
            <Strong>Add to Cart</Strong>
          </Button>
        </Box>
      </Flex>
    </Dialog.Content>
  );
};
