const Modal = ({ children }) => {
  return (
    <div className="bg-slate-600 bg-opacity-80 fixed h-full w-full top-0 content-center">
      <form className="w-full border flex flex-col gap-10 p-10 bg-slate-400">
        {children}
      </form>
    </div>
  );
};

export {Modal};
