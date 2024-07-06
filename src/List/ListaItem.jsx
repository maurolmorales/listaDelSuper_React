import imgImportant from "../assets/important.svg";

const ListaItem = ({
  data,
  openModalAuxiliar_TF,
  setOpenModalAuxiliar_TF,
  openAddLista,
  setAddLista,
  addItem,
  localItem,
  saveItem,
  dataAuxiliar,
  setDataAuxiliar,
}) => {
  return (
    <section
      key={data.id}
      className="bg-blue-400  grid grid-cols-8 h-10 m-1 items-center"
    >
      <div className="flex justify-center"> {data.icon}</div>
      <div className="col-span-4"> {data.name}</div>
      {data.auxiliar ? (
        <div
          className="flex justify-center"
          onClick={() => {
            setDataAuxiliar(data.auxiliar);
            setOpenModalAuxiliar_TF(!openModalAuxiliar_TF)
          }}
        >
          <img
            src={imgImportant}
            alt="información importante"
            className="w-5"
          />
        </div>
      ) : (
        <div></div>
      )}
      <div className="flex justify-center"> {data.count}</div>
      <div className="w-10 flex justify-center">
        <input type="checkbox" id={`check-${data.id}`} />
        <label htmlFor={`check-${data.id}`} className="" ></label>
      </div>
    </section>
  );
};

export { ListaItem };
