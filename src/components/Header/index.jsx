import { NavLink } from "react-router-dom";
import groceryList from "../../assets/groceryList.svg";
import homeInventory from "../../assets/homeInventory.svg";
import './header.css';

const Header = () => {
  return (
    <header className="bg-slate-300 grid grid-cols-2 grid-rows-1 min-h-12 items-center justify-center sticky top-0 z-10">
      <NavLink to="/">
        <h1 className="flex justify-center">Lista del Super</h1>
      </NavLink>
      <nav className="flex justify-around">
        <NavLink to="/inventario">
          <img
            src={homeInventory}
            alt="stock grocery list"
            className="w-5 h-5"
          />
        </NavLink>
        <NavLink to="/lista">
          <img src={groceryList} alt="grocery list" className="w-5 h-5" />
        </NavLink>
      </nav>
    </header>
  );
};

export { Header };
