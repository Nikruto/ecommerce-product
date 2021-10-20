import React, { useState, createContext } from "react";

const CardContext = createContext({
  items: [],
  addItem: (itemData, amount) => {},
  removeItem: (itemId) => {},
});

const CardProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (itemData, amount) => {
    const sameItemInCard = items.findIndex(
      (item) => item.data.id === itemData.id
    );

    if (sameItemInCard === -1) {
      setItems([
        ...items,
        {
          data: itemData,
          amount: amount,
        },
      ]);
    } else {
      setItems([
        ...items.slice(0, sameItemInCard),
        {
          data: itemData,
          amount: items[sameItemInCard].amount + amount,
        },
      ]);
    }
  };

  const removeItem = (itemId) => {
    setItems(items.filter((item) => item.data.id !== itemId));
  };

  return (
    <CardContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </CardContext.Provider>
  );
};

export { CardContext, CardProvider };
