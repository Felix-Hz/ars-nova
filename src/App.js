import './App.css';

import {
  Navbar,
  ItemListContainer,
  Footer
} from "./components/index";


function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
      <Footer />
    </div>
  );
}

export default App;
