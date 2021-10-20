import React, { useState, createContext } from "react";

const LightboxContext = createContext({
  isOpen: false,
  imageIndex: 0,
  images: [],
  open: (imageList, startIndex = 0) => {},
  setActiveImage: (index) => {},
  close: () => {},
});

const LightboxProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [images, setImages] = useState([]);

  const open = (imageList, startIndex = 0) => {
    setImages(imageList);
    setImageIndex(startIndex);
    setIsOpen(true);
    console.log("sj");
  };

  const setActiveImage = (index) => setImageIndex(index);

  const close = () => setIsOpen(false);

  return (
    <LightboxContext.Provider
      value={{ isOpen, imageIndex, images, open, setActiveImage, close }}
    >
      {children}
    </LightboxContext.Provider>
  );
};

export { LightboxContext, LightboxProvider };
