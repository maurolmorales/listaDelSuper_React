const SubMenu = ({ordenSubMenu}) => {
  return (
    <nav className="bg-green-500 flex justify-around p-1 h-10 items-center sticky top-12 z-10 ">
      <div onClick={()=>ordenSubMenu("categorias")}>Categoría</div>
      <div onClick={()=>ordenSubMenu("name")}>Producto</div>
      <div onClick={()=>ordenSubMenu("checked")} >Checkeado</div>
    </nav>
  );
};

export { SubMenu };
