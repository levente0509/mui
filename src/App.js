import "./App.css";
import { Button, Checkbox } from "@mui/material/";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Art from "./components/Art";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/art/:id" element={<Art />} />
      </Routes>
    </BrowserRouter>
    //MUI
    // <div className="App">
    //   <header className="App-header">
    //     <Button variant="outlined">Click me ;)</Button>
    //     <Checkbox />
    //   </header>
    // </div>
  );
}
export default App;
