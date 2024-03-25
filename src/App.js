/* ----------------------     IMPORTS     ---------------------- */
import "./App.css";
import {
  Navbar,
  Landing,
  Footer,
  ItemListContainer,
  ItemCount,
  ItemDetailContainer,
  Cart,
  ContactForm,
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
          <Box className="App">
            {/* The FS styling has to be done here */}
            <Navbar />
            <Box className="routes">
              <Routes>
                <Route
                  exact
                  path="/"
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
                  element={<ItemListContainer />}
                />
                {/* <Route
                  exact
                  path="/count"
                  element={<ItemCount initial={1} />}
                /> */}
                <Route
                  exact
                  path="/item/:itemId"
                  element={<ItemDetailContainer />}
                />
                <Route exact path="/cart" element={<Cart />} />
                {/* <Route exact path="/checkout" element={<ContactForm />} /> */}
              </Routes>
            </Box>
            <Footer />
          </Box>
        </CartProvider>
      </Router>
    </ChakraProvider>
  );
}

export default App;
