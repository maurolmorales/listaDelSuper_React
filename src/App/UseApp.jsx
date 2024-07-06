import { useState } from "react";
import { UseLocalStorage } from "../App/UseLocalStorage";

const UseApp = () => {
  const { item, saveItem, sincronizeItem, loading, error } = UseLocalStorage( "Lista_V1", [] );
  const [itemSelected, setItemSelected] = useState({});
  const [openAddLista, setAddLista] = useState(false);
  const [footerApp, setFooterApp] = useState({});
  const [ordenLista, setOrdenLista] = useState(false)

  const addItem = (text) => {
    const newItemInventory = [...item];
    newItemInventory.push(text);
    saveItem(newItemInventory);
  };

  const ordenSubMenu =((mlm)=>{
    
    // const ordenado = item.sort((a, b)=>{let infoData = mlm; if(a.infoData > b.infoData ){return -1} })
    console.log('ordenado: ', mlm )  
    // return addItem(ordenado); 
  })

  return {
    itemSelected,
    setItemSelected,
    openAddLista,
    setAddLista,
    addItem,
    saveItem,
    item,
    ordenSubMenu
  };
};
export { UseApp };
