/* ----------------------     IMPORTS     ---------------------- */
import "./App.css";
import {
  Navbar,
  Landing,
  Footer,
  ItemListContainer,
  ItemDetailContainer,
  Cart,
} from "./components/index";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { CartProvider } from "./context/CartContext";

/* ------------------------------------------------------------ */

function App() {
  return (
    <ChakraProvider>
      <Router>
        <CartProvider>
          <Box className="app">
            {/* The FS styling has to be done here */}
            <Navbar className="footer" />

            <Box className="routes-box">
              <Routes className="routes">
                <Route
                  exact
                  path="/"
                  className="routes"
                  element={
                    <Landing
                      greeting={"Be Welcomed, Foreigner."}
                      subtitle={"The journey is about to begin."}
                    />
                  }
                />
                <Route exact path="/shop" element={<ItemListContainer />} />
                <Route
                  exact
                  path="/category/:type"
                  className="routes"
                  element={<ItemListContainer />}
                />
                <Route
                  exact
                  path="/item/:itemId"
                  className="routes"
                  element={<ItemDetailContainer />}
                />
                <Route
                  exact
                  path="/cart"
                  className="routes"
                  element={<Cart />}
                />
              </Routes>
            </Box>

            <Footer className="footer" />
          </Box>
        </CartProvider>
      </Router>
    </ChakraProvider>
  );
}

export default App;
