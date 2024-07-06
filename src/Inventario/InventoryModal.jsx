import { ReactDOM } from "react-dom";
const destino = document.getElementById("portal");

const InventarioModal = () => {
  return ReactDOM.createPortal(
    <div className="prueba">{console.log("99999999")}Portal</div>,
    destino
  );
};

export { InventarioModal };
