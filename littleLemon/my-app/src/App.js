import { BrowserRouter as Router, Route, Routes, Form } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Book from "./components/Book";
import About from "./components/About";
import React from "react";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css"; // Assuming you have some styles in App.css
function App() {
  return (
    <>
      <Header />

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Book />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}
export default App;
