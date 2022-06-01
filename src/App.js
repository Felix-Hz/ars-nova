/* ----------------------     IMPORTS     ---------------------- */
import "./App.css";
import {
  Navbar,
  Landing,
  Footer, 
  CartWidget,
  ItemListContainer,
} from "./components/index";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

/* ------------------------------------------------------------ */

function App() {
  return (
    <Router>
      <ChakraProvider>
        <div className="App">
          <Navbar />
          <div className="routes">
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
              <Route exact path="/cart" element={<CartWidget />} />
            </Routes>
          </div>
          <Footer /> 
        </div>
      </ChakraProvider>
    </Router>
  );
} 

export default App;
 