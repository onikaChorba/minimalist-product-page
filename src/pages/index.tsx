import React, { CSSProperties } from 'react';
import Header from '../components/Header';
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Theme, Box, TextField, Select, Flex } from "@radix-ui/themes";
import ProductList from "../components/ProductList";

const Home = () => (
  <Theme>
    <Header />
    <main style={mainStyle}>
      <Box pt="5" maxWidth='1550px' width="100%">

        <Flex justify='between' align="center" mb="5" gap='2'>
          <Box width='1550px'>
            <TextField.Root placeholder="Search the product…" size='3'>
              <TextField.Slot>
                <MagnifyingGlassIcon height="16" width="16" />
              </TextField.Slot>
            </TextField.Root>
          </Box>

          <Box>
            <Select.Root defaultValue="all" size='3'>
              <Select.Trigger>Filter by Category</Select.Trigger>
              <Select.Content>
                <Select.Group>
                  <Select.Item value="all">All</Select.Item>
                  <Select.Item value="beauty">beauty</Select.Item>
                  <Select.Item value="fragrances">fragrances</Select.Item>
                </Select.Group>
              </Select.Content>
            </Select.Root>
          </Box>
        </Flex>

        <Box>
          <ProductList />
        </Box>
      </Box>
    </main>
  </Theme>
);

const mainStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  minHeight: '100vh',
};

export default Home;
