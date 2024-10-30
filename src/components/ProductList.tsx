import Image from "next/image";
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
  Badge,
} from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { Product } from "@component/types";
import { DialogContent } from "./DialogContent";
import { SkeletonLoader } from "./SkeletonLoader";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products?limit=30");
        const data = await response.json();
        setProducts(data || []);
        setTimeout(() => setLoading(false), 2000);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <SkeletonLoader />;

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
            <Flex justify='end'>
              {product.id <= 2 && <Badge color="red">New</Badge>}
            </Flex>
            <Flex justify="center" align="center" width="auto" height="100%">
              <Image
                src={product.images[0]}
                alt={`Product image 0`}
                style={{ width: 'auto', height: 'auto' }}
                width={370}
                height={370}
                priority
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
              <Text as="div" size="2" mb="2">
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
                <DialogContent product={product} />
              </Dialog.Root>
            </Flex>
          </Card>
        </Box>
      ))}
    </Grid>
  );
}
