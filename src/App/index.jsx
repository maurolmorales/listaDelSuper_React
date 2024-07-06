import { Routes, Route } from "react-router-dom";
import { UseApp } from "./UseApp.jsx";
import { Home } from "../Home";
import { Header } from "../components/Header";
import { Lista } from "../List";
import { Inventario } from "../Inventario";
import "./app.css";

function App() {
  const {
    itemSelected,
    setItemSelected,
    openAddLista,
    setAddLista,
    addItem,
    item,
    saveItem,
    ordenSubMenu
  } = UseApp();

  return (
    <div className="w-full h-full">
      <Header />
      <main>
        <Routes>
          <Route
            path="/lista"
            element={
              <Lista
                openAddLista={openAddLista}
                setAddLista={setAddLista}
                addItem={addItem}
                localItem={item}
                saveItem={saveItem}
              />
            }
          />
          <Route
            path="/inventario"
            element={
              <Inventario
                openAddLista={openAddLista}
                setAddLista={setAddLista}
                addItem={addItem}
                localItem={item}
                saveItem={saveItem}
                ordenSubMenu={ordenSubMenu}
              />
            }
          />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export { App };
