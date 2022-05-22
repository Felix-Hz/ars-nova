import "./App.css";

import { Navbar, ItemListContainer, Footer } from "./components/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={"Be Welcomed, Foreigner."} subtitle={"The journey is about to begin."}/>
      <Footer />
    </div>
  );
}

export default App;
