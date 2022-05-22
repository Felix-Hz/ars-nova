import "./App.css";

import { Navbar, ItemListContainer, Footer } from "./components/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={"Be Welcomed, Foreigner."} />
      <Footer />
    </div>
  );
}

export default App;
