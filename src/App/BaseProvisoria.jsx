const ShoppingList = [
  { id: 1, 
    sector: "🥛", 
    producto: "leche común",
    cantidad: 2,
    addicional: "",
    selected: false
  },
  { id: 2, 
    sector: "📥", 
    producto: "atún",
    cantidad: 2,
    addicional: "",
    selected: true
  }
] 

const InventoryList = [
  {id: 1, icon: "🥛", categoria: "Lácteos", producto: "leche común" },
  {id: 2, icon: "📥", categoria: "Almacén", producto: "lentejas" },
  {id: 3, icon: "📥", categoria: "Almacén", producto: "atún" }
]

export {ShoppingList, InventoryList}