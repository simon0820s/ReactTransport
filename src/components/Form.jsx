const Form = () => {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="h-1/2 md:w-3/4 p-6 m-6 flex flex-col items-start bg-[#0D1926] rounded-lg gap-1 xl:gap-4 xl:px-10">
        <div>
          <h2 className="text-[#10E698] text-3xl xl:text-4xl font-bold">Please Complete</h2>
          <h2 className="text-[#10E698] text-3xl xl:text-4xl font-bold">My Form.</h2>
        </div>
        <p className="text-[#CFD1D4] text-xs xl:mt-2">fill to join</p>

        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 flex flex-col">
            <span className="text-[#10E698]">Nombre</span>
            <input
              className="w-full text-gray-500 focus:outline-none px-1"
              placeholder="Nombre"
            ></input>
          </div>

          <div className="flex-1 flex flex-col">
            <span className="text-[#10E698]">Apellido</span>
            <input
              className="w-full text-gray-500 focus:outline-none px-1"
              placeholder="Apellido"
            ></input>
          </div>
        </div>

        <div className="flex flex-col w-full">
          <span className="text-[#10E698]">Email</span>
          <input
            className="w-full font-light text-gray-500 focus:outline-none px-1"
            placeholder="Email"
          ></input>
        </div>

        <button className="w-full py-1 xl:py-2 mt-4 rounded-sm font-medium bg-[#10e698] hover:bg-[#10e69870] hover:text-neutral-100 transition-all ease-in-out duration-300">
          Send
        </button>
      </div>
    </div>
  );
};

export default Form;
