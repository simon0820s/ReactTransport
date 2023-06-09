const Form = () => {
  return (
    <div className="flex-1 flex justify-center h-auto">
      <div className="px-4 py-8 max-w-sm flex flex-col items-start gap-4 bg-[#0D1926]">
        <h2 className="text-[#10E698] text-3xl font-bold">Please Complete</h2>
        <h2 className="text-[#10E698] text-3xl font-bold mt-2">My Form.</h2>
        <p className="text-[#CFD1D4] font-light">this is our form</p>

        <div className="flex gap-4">
          <div className="flex flex-col">
            <span className="text-[#10E698]">Nombre</span>
            <input
              className="w-40 font-light text-gray-500 mt-1"
              placeholder="Nombre"
            ></input>
          </div>
          <div className="flex flex-col">
            <span className="text-[#10E698]">Apellido</span>
            <input
              className="w-40 font-light text-gray-500 mt-1"
              placeholder="Apellido"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
