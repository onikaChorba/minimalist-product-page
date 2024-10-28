import React, { CSSProperties } from 'react';
import Header from '../components/Header';
import { Theme, Box } from "@radix-ui/themes";
import ProductList from "../components/ProductList";

const Home = () => (
  <Theme>
    <Header />
    <main style={mainStyle}>
      <Box pt="5" maxWidth='1550px'>
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
