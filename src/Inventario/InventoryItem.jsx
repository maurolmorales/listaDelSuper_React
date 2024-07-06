import imgEdit from "../assets/imgEdit.svg";

const InventarioItem = ({
  data,
  addItemList_TF,
  setAddItemList_TF,
  setNewItem,
  setEditItemInventario,
  editItemInventario,
}) => {
  return (
    <section key={data.id} className="bg-teal-700 grid grid-cols-7 h-10 m-1 items-center " >
      <div className="flex justify-center" onClick={() => { setEditItemInventario(!editItemInventario); 
                                                            setNewItem(data); }} >
        <img src={imgEdit} alt="editar" className="w-7 h-7"/>
      </div>
      <div className="flex justify-center"> {data.icon} </div>
      <div className="col-span-4" > {data.name} </div>
      <div className="w-10 flex justify-center" onClick={() => { setAddItemList_TF(!addItemList_TF), 
                                                                 setNewItem(data) }} >🔘</div>
    </section>
  );
};

export { InventarioItem };
