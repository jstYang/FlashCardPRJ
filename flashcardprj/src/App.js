import "./Components/Welcome/landingpage.css";
import Home from "./Components/Welcome/Home";
import About from "./Components/Welcome/About";
import Contact from "./Components/Welcome/Contact";
import Footer from "./Components/Welcome/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
