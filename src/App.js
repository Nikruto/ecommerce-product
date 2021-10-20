import React, { useContext } from "react";
import { Toaster } from "react-hot-toast";
import Header from "./components/header";
import Lightbox from "./components/lightbox";
import Product from "./components/product";

import { LightboxContext } from "./context/lightboxContext";

function App() {
  const lightboxStore = useContext(LightboxContext);

  return (
    <div
      className={`font-sans ${
        lightboxStore.isOpen ? "overflow-hidden h-screen" : ""
      }`}
    >
      <Toaster />
      <Lightbox />
      <div className="min-h-screen max-w-5xl mx-auto">
        <Header />
        <Product />
      </div>
    </div>
  );
}

export default App;
