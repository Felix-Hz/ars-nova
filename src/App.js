/* ----------------------     IMPORTS     ---------------------- */
import "./App.css";
import {
  Navbar,
  Landing,
  Footer,
  CartWidget,
  ItemListContainer,
  ItemCount,
  ItemDetailContainer,
} from "./components/index";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { useState } from "react";

/* ------------------------------------------------------------ */

function App() {
  const [page, setPage] = useState("list");

  return (
    <Router>
      <ChakraProvider>
        <Box className="App">
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
              <Route exact path="/count" element={<ItemCount initial={0} />} />
              <Route exact path="/cart" element={<CartWidget />} />
              <Route
                exact
                path="/item/:itemId"
                element={<ItemDetailContainer />}
              />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </ChakraProvider>
    </Router>
  );
}

export default App;
