import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Component/Nav";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import AboutUs from "./Component/AboutUs";
import Faqs from "./Faqs";
import ContactUs from "./Component/ContactUs";
import Upsc from "./Component/Upsc";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/faq" element={<Faqs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route
              path="/upsc-hindi-hinglish-medium"
              element={<Upsc />}
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
