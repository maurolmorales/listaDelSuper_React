import { useState } from "react";
import { ShoppingList } from "../App/BaseProvisoria.jsx";
import { ListaItem } from "./ListaItem";
import { Modal } from "../components/Modal/index.jsx";
import { SubMenu } from "../components/SubMenu/SubMenu.jsx";
// import "./lista.css";

const Lista = ({ openAddLista, setAddLista, addItem, localItem, saveItem }) => {
  const [addItemInventario_TF, setAddItemInventario_TF] = useState(false);
  const [addItemList_TF, setAddItemList_TF] = useState(false);
  const [editFormInventario, setEditFormInventario] = useState(false);
  const [openModalAuxiliar_TF, setOpenModalAuxiliar_TF] = useState(false);
  const [dataAuxiliar, setDataAuxiliar] = useState("");
  const [newItem, setNewItem] = useState("");

  const ModalAuxiliar = () => {
    console.log("data: ", dataAuxiliar);
    return (
      <Modal>
        <div>
          <textarea
            type="text"
            name="producto"
            id="itemFormText"
            placeholder="Producto"
            className="h-40 w-full p-2"
            defaultValue={dataAuxiliar}
          ></textarea>
        </div>
        <section className="flex justify-around">
          <div>
            <button
              type="button"
              className="bg-neutral-800 text-stone-50 p-2 rounded-md"
              onClick={() => Cancel("auxiliar")}
            >
              Cerrar
            </button>
          </div>
        </section>
      </Modal>
    );
  };

  const Cancel = (data) => {
    if (data == "auxiliar") {
      setOpenModalAuxiliar_TF(!openModalAuxiliar_TF);
    } else {
      console.log("Nada");
    }
  };

  const arrayFiltrado = localItem.filter((f) => {
    return f.type == "lista";
  });

  return (
    <section className="bg-slate-500 h-screen ">
      <article className="">
        <SubMenu />
        {arrayFiltrado.map((f) => {
          return (
            <ListaItem
              key={f.id}
              data={f}
              addItemList_TF={addItemList_TF}
              setAddItemList_TF={setAddItemList_TF}
              setNewItem={setNewItem}
              setEditFormInventario={setEditFormInventario}
              editFormInventario={editFormInventario}
              openModalAuxiliar_TF={openModalAuxiliar_TF}
              setOpenModalAuxiliar_TF={setOpenModalAuxiliar_TF}
              dataAuxiliar={dataAuxiliar}
              setDataAuxiliar={setDataAuxiliar}
            />
          );
        })}
      </article>

      {dataAuxiliar
        ? openModalAuxiliar_TF && <ModalAuxiliar />
        : null}
    </section>
  );
};

export { Lista };
