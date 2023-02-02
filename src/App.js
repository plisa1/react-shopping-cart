import React from "react";
//import styles from "./App.css";
import Menu from "./components/Menu";
import Cards from "./components/Cards";
import { Paper } from "@mui/material";
import CartContextProvider from "./store/cart-store/cart-context-provider";

function App() {
  return (
    <CartContextProvider>
      <Menu />
      <Paper
        sx={{
          backgroundColor: "white",
          p: 5,
        }}
      >
        <Cards />
      </Paper>
    </CartContextProvider>
  );
}

export default App;
