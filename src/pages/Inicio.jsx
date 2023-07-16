import Form from "../components/Form";

export default function Inicio() {
  return (
    <section
      id="inicio"
      className="flex items-center h-screen bg-orange-900 bg-opacity-20"
    >
      <article className="flex-1 flex items-center justify-center w-20 ml-4 sm:ml-10 md:ml-10 lg:ml-20 sm:mr-48">
        <div className="">
          <p className="text-[#10E698] text-lg md:text-2xl font-bold ml-1">short</p>
          <h1 className="font-bold text-6xl sm:text-8xl md:text-9xl lg:text-8xl text-white">Acarreos</h1>
          <h1 className="font-bold text-6xl sm:text-8xl md:text-9xl lg:text-8xl text-white">JH</h1>
          <p className="text-white mt-4 ml-1 sm:ml-2 md:ml-4 font-normal sm:font-medium sm:text-xl">
          ¡Acarreos eficientes, llegamos a tiempo a tu destino!
          </p>
          <button className="flex-1 w-1/2 h-8 sm:h-10 py-1 mt-4 rounded-sm font-medium md:font-bold md:text-xl md:mt-8 lg:ml-4 bg-[#10e698] hover:bg-[#10e69870] hover:text-neutral-100 transition-all ease-in-out duration-300">
            Unete
          </button>
        </div>
      </article>
      <Form/>
    </section>
  );
}
