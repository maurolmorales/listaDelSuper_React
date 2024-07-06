import { useState, useEffect } from "react";

const UseLocalStorage = (itemName, initialvalue) => {
  const [sincronizedItem, setSincronizedItem] = useState(true);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(initialvalue);

  useEffect(() => {
    try {
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;

      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialvalue));
        parsedItem = initialvalue;
      } else {
        parsedItem = JSON.parse(localStorageItem);
      }

      setItem(parsedItem);
      setLoading(false);
      setSincronizedItem(true);
    } catch (error) {
      setError(error);
    }
  }, [sincronizedItem]);

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  const sincronizeItem = () => {
    setLoading(true);
    setSincronizedItem(false);
  };

  return {
    item,
    loading,
    error,
    saveItem,
    sincronizeItem,
  };
};

export { UseLocalStorage };
