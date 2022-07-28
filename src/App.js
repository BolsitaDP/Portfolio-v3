import "./App.css";
import Themes from "./components/Themes";
import Aboutme from "./pages/Aboutme";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import RecentWork from "./pages/RecentWork";
import Skills from "./pages/Skills";

function App() {
  return (
    <div className="container">
      <Themes>
        <Home />
        <Aboutme />
        <Skills />
        <RecentWork />
        <Contact />
        <Footer />
      </Themes>
    </div>
  );
}

export default App;
