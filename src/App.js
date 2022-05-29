import "./App.css";

import { Navbar, Landing, Footer, Landing } from "./components/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing
        greeting={"Be Welcomed, Foreigner."}
        subtitle={"The journey is about to begin."}
      />
      <Footer />
    </div>
  );
}

export default App;
