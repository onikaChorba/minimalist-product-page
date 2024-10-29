import React, { CSSProperties } from 'react';
import Header from '../components/Header';
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Theme, Box, TextField } from "@radix-ui/themes";
import ProductList from "../components/ProductList";

const Home = () => (
  <Theme>
    <Header />
    <main style={mainStyle}>
      <Box pt="5" maxWidth='1550px' >
        <Box pt="1" pb="3">
          <TextField.Root placeholder="Search the product…">
            <TextField.Slot>
              <MagnifyingGlassIcon height="16" width="16" />
            </TextField.Slot>
          </TextField.Root>
        </Box>
        <ProductList />
      </Box>
    </main>
  </Theme>
);

const mainStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%'
};

export default Home;
