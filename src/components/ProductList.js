import ImageSlider from "./ImagesSlider";
import {
  Box,
  Button,
  Card,
  Grid,
  Heading,
  Text,
  Flex,
  Select,
  Strong,
  Dialog,
} from "@radix-ui/themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products?limit=30");
        const data = await response.json();
        setProducts(data || []);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <Grid
      style={{
        display: "grid",
        gap: "1rem",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      }}
    >
      {products.map((product) => (
        <Box maxWidth="100%" key={product.id}>
          <Card size="2">
            <Flex justify="center" align="center" width="auto" height="100%">
              <Image
                src={product.images[0]}
                alt={`Product image 0`}
                style={{ width: "auto", height: "370px" }}
              />
            </Flex>
            <Box>
              <Flex justify="between" align="center">
                <Box>
                  <Heading size="3" as="h3">
                    {product.title}
                  </Heading>
                  <Text as="div" size="2" color="gray" mb="2">
                    Price: ${product.price}
                  </Text>
                </Box>
                <Flex align="center" gap="2">
                  <Text as="div" size="2" color="gray">
                    Size:
                  </Text>
                  <Select.Root defaultValue="standart">
                    <Select.Trigger variant="classic" />
                    <Select.Content>
                      <Select.Group>
                        <Select.Item value="standart">Standard</Select.Item>
                        <Select.Item value="mini">Mini</Select.Item>
                        <Select.Item value="medium" disabled>
                          Medium
                        </Select.Item>
                      </Select.Group>
                    </Select.Content>
                  </Select.Root>
                </Flex>
              </Flex>
              <Text as="div" size="2" color="black" mb="2">
                {product.description}
              </Text>
            </Box>
            <Flex justify="between" align="center">
              <Button color="gray" variant="surface" highContrast>
                <Strong>Add to Cart</Strong>
              </Button>

              <Dialog.Root>
                <Dialog.Trigger>
                  <Button variant="ghost">more info</Button>
                </Dialog.Trigger>
                <Dialog.Content size="5">
                  <Flex gap="3" justify="end">
                    <Dialog.Close>
                      <Button variant="soft" color="gray">
                        Close
                      </Button>
                    </Dialog.Close>
                  </Flex>
                  <Flex justify="between" align="center">
                    <Box width="60%">
                      <ImageSlider images={product.images} />
                    </Box>
                    <Box width="40%">
                      <Box>
                        <Heading size="3" as="h3">
                          {product.title}
                        </Heading>
                        <Text as="div" size="2" color="gray" mb="2">
                          Price: ${product.price}
                        </Text>
                      </Box>
                      <Flex align="center" gap="2" justify="start">
                        <Text as="div" size="2" color="gray">
                          Size:
                        </Text>
                        <Select.Root defaultValue="standart">
                          <Select.Trigger variant="classic" />
                          <Select.Content>
                            <Select.Group>
                              <Select.Item value="standart">
                                Standard
                              </Select.Item>
                              <Select.Item value="mini">Mini</Select.Item>
                              <Select.Item value="medium" disabled>
                                Medium
                              </Select.Item>
                            </Select.Group>
                          </Select.Content>
                        </Select.Root>
                      </Flex>
                      <Text as="div" size="2" color="black" mb="2">
                        {product.description}
                      </Text>
                      <Button color="gray" variant="surface" highContrast>
                        <Strong>Add to Cart</Strong>
                      </Button>
                    </Box>
                  </Flex>
                </Dialog.Content>
              </Dialog.Root>
            </Flex>
          </Card>
        </Box>
      ))}
    </Grid>
  );
}
