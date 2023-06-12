const Form = () => {
  return (
    <div className="flex-1 flex justify-center h-auto">
      <div className="p-6 flex flex-col items-start gap-4 bg-[#0D1926]">
        <h2 className="text-[#10E698] text-3xl font-bold">Please Complete</h2>
        <h2 className="text-[#10E698] text-3xl font-bold mt-2">My Form.</h2>
        <p className="text-[#CFD1D4] font-light">this is our form</p>

        <div className="flex gap-4">
          <div className="flex flex-col">
            <span className="text-[#10E698]">Nombre</span>
            <input
              className="w-40 h-8 font-light text-gray-500 mt-1 focus:outline-none px-1"
              placeholder="Nombre"
            ></input>
          </div>
          <div className="flex flex-col">
            <span className="text-[#10E698]">Apellido</span>
            <input
              className="w-40 h-8 font-light text-gray-500 mt-1 focus:outline-none px-1"
              placeholder="Apellido"
            ></input>
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-[#10E698]">Email</span>
          <input
            className="w-[21rem] h-8 font-light text-gray-500 mt-1 focus:outline-none px-1"
            placeholder="Email"
          ></input>
        </div>
        
        <button className="bg-[#10e698] w-[21rem] mt-4 py-3 hover:bg-[#10e69870] hover:text-neutral-100 transition-all ease-in-out duration-300 font-bold text-lg">Send</button>

      </div>
    </div>
  );
};

export default Form;
