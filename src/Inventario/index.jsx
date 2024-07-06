import { useState, useEffect } from "react";
import { InventarioItem } from "./InventoryItem.jsx";
import { Modal } from "../components/Modal/index.jsx";
import { SubMenu } from "../components/SubMenu/SubMenu.jsx";
//import "./inventory.css";

const categorias = [
  { id: 1, categoria: "Lácteos", icon: "🥛" },
  { id: 2, categoria: "Almacén", icon: "📥" },
  { id: 3, categoria: "Desayuno/Merienda", icon: "☕" },
  { id: 4, categoria: "Bebidas", icon: "🍾" },
  { id: 5, categoria: "Carnes/Pescados", icon: "🥩" },
  { id: 6, categoria: "Frutas/Verduras", icon: "🥬" },
  { id: 7, categoria: "Panadería", icon: "🍞" },
  { id: 8, categoria: "Congelados", icon: "❄️" },
  { id: 9, categoria: "Limpieza", icon: "🧹" },
  { id: 10, categoria: "Perfumería", icon: "🧼" },
];

const Inventario = ({
  openAddLista,
  setAddLista,
  addItem,
  localItem,
  saveItem,
  ordenSubMenu
}) => {
  const [addItemInventario_TF, setAddItemInventario_TF] = useState(false);
  const [addItemList_TF, setAddItemList_TF] = useState(false);
  const [editItemInventario, setEditItemInventario] = useState(false);
  const [newItem, setNewItem] = useState("");

  const ButtonFormAddInventario = () => {
    return (
      <div className="bg-emerald-400 flex fixed bottom-0 w-full h-12 justify-center">
        <button onClick={() => setAddItemInventario_TF(!addItemInventario_TF)}>
          Agregar al Inventario
        </button>
      </div>
    );
  };

  const onSubmitInventario = (event) => {
    event.preventDefault();
    const productoNuevo = {};
    let formSelect = document.querySelector("#itemFormSelect");
    let formInputText = document.querySelector("#itemFormText");
    let numberID = () => {
      return Math.floor(Math.random() * 1001);
    };
    productoNuevo.type = "categoria";
    productoNuevo.id = numberID();
    productoNuevo.icon =
      categorias.find((f) => formSelect.value == f.id)?.icon || null;
    productoNuevo.categorias =
      categorias.find((f) => formSelect.value == f.id)?.categoria || null;
    productoNuevo.name = formInputText.value;
    productoNuevo.checked = false;
    console.log("data", productoNuevo);
    addItem(productoNuevo);
    setAddItemInventario_TF(!addItemInventario_TF);
  };

  const ModalAddItemInventario = () => {
    return (
      <Modal>
        <div>
          <select className="w-full h-10 p-2" id="itemFormSelect">
            {categorias.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {`${item.categoria} ${item.icon}`}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <input
            type="text"
            name="producto"
            id="itemFormText"
            placeholder="Producto"
            className="h-10 w-full p-2"
          />
        </div>
        <section className="flex justify-around">
          <div>
            <button
              type="button"
              className="bg-neutral-800 text-stone-50 p-2 rounded-md"
              onClick={onSubmitInventario}
            >
              Agregar
            </button>
          </div>
          <div>
            <button
              type="button"
              className="bg-neutral-800 text-red-400 p-2 rounded-md"
              onClick={() => Cancel("Inventario")}
            >
              Cancelar
            </button>
          </div>
        </section>
      </Modal>
    );
  };

  const EditInventario = ({ data }) => {
    return (
      <Modal>
        <div>
          <select className="w-full h-10 p-2" id="itemFormSelect">
            {categorias.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {`${item.categoria} ${item.icon}`}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <input
            type="text"
            name="producto"
            id=""
            placeholder="Producto"
            className="h-10 w-full p-2"
            defaultValue={newItem.name}
          />
        </div>
        <section className="flex justify-around">
          <div>
            <button
              type="button"
              className="bg-neutral-800 text-stone-50 p-2 rounded-md"
              onClick={() => ModifItem()}
            >
              Modificar
            </button>
          </div>
          <div>
            <button
              type="button"
              className="bg-neutral-800 text-stone-50 p-2 rounded-md"
              onClick={() => DeleteItem()}
            >
              Eliminar
            </button>
          </div>
          <div>
            <button
              type="button"
              className="bg-neutral-800 text-stone-50 p-2 rounded-md"
              onClick={() => Cancel("editInventario")}
            >
              Cancelar
            </button>
          </div>
        </section>
      </Modal>
    );
  };

  const onSubmitList = (event) => {
    event.preventDefault();
    const itemNuevoLista = {};
    let nombreProductoLista = document.querySelector("#nombreProductoLista");
    let auxiliarProductoLista = document.querySelector(
      "#auxiliarProductoLista"
    );
    let cantidadProductoLista = document.querySelector(
      "#cantidadProductoLista"
    );
    let numberID = () => {
      return Math.floor(Math.random() * 1001);
    };
    itemNuevoLista.type = "lista";
    itemNuevoLista.id = numberID();
    itemNuevoLista.icon = newItem.icon || null;
    itemNuevoLista.categorias = newItem.categorias || null;
    itemNuevoLista.name = nombreProductoLista.value;
    itemNuevoLista.auxiliar = auxiliarProductoLista.value;
    itemNuevoLista.count = cantidadProductoLista.value;
    itemNuevoLista.checked = false;
    console.log("data", itemNuevoLista);
    console.log("new", newItem.type);
    addItem(itemNuevoLista);
    setAddItemList_TF(!addItemList_TF);
    // setAddItemInventario_TF(!addItemInventario_TF);
  };

  const ModalAddItemLista = ({ newItem }) => {
    return (
      <Modal>
        <div>
          <input
            type="text"
            name="producto"
            id="nombreProductoLista"
            placeholder="Producto"
            className="w-full h-10 p-2"
            defaultValue={newItem.name}
          />
        </div>
        <div>
          <input
            type="text"
            name="auxiliar"
            id="auxiliarProductoLista"
            placeholder="info adicional..."
            className="w-full h-10 p-2"
            defaultValue={newItem.auxiliar}
          />
        </div>
        <div>
          <label className="px-2"> Cantidad: </label>
          <input
            type="number"
            name="cantidad"
            className="w-20 h-10 text-center"
            id="cantidadProductoLista"
          />
        </div>
        <section className="flex justify-around">
          <div>
            <button
              type="button"
              className="bg-neutral-800 text-stone-50 p-2 rounded-md"
              onClick={onSubmitList}
            >
              Agregarrrr
            </button>
          </div>
          <div>
            <button
              type="button"
              className="bg-neutral-800 text-stone-50 p-2 rounded-md"
              onClick={() => Cancel("list")}
            >
              Cancelar
            </button>
          </div>
        </section>
      </Modal>
    );
  };

  const ModifItem = () => {
    let newlist = localItem.filter((f) => f.id !== newItem.id);
    console.log(newlist);
    // saveItem(newlist);
    // Cancel("editInventario");
  };

  const Cancel = (data) => {
    if (data == "Inventario") {
      setAddItemInventario_TF(!addItemInventario_TF);
    } else if (data == "editInventario") {
      setEditItemInventario(!editItemInventario);
    } else if (data == "list") {
      setAddItemList_TF(!addItemList_TF);
    } else {
      console.log("Nada");
    }
  };

  const DeleteItem = () => {
    let newlist = localItem.filter((f) => f.id !== newItem.id);
    console.log(newlist);
    saveItem(newlist);
    Cancel("editInventario");
  };

  const arrayFiltrado = localItem.filter((f) => { return f.type == "categoria" });

  return (
    <section className="bg-slate-500 min-h-screen h-auto flex flex-wrap flex-col pb-12 ">
      <article className=" flex flex-col flex-wrap h-full">
        <SubMenu ordenSubMenu={ordenSubMenu} />
        {arrayFiltrado.map((i) => {
          return (
            <InventarioItem
              key={i.id}
              data={i}
              addItemList_TF={addItemList_TF}
              setAddItemList_TF={setAddItemList_TF}
              setNewItem={setNewItem}
              setEditItemInventario={setEditItemInventario}
              editItemInventario={editItemInventario}
            />
          );
        })}
      </article>

      {editItemInventario && <EditInventario newItem={newItem} />}
      {addItemList_TF && <ModalAddItemLista newItem={newItem} />}
      {addItemInventario_TF && <ModalAddItemInventario />}
      <ButtonFormAddInventario />
    </section>
  );
};

export { Inventario };
