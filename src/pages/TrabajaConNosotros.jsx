import { ImgsGrid } from "../components/ImgsGrid";
import { IoMdTrain } from 'react-icons/io'
export default function TrabajaConNosotros() {
  return (
    <section
      id="trabaja_con_nosotros"
      className="h-screen flex flex-col justify-start items-center bg-orange-500 bg-opacity-20"
    >
      <div className="flex flex-col gap-4 items-center justify-center sm:justify-start bg-neutral-100 w-full h-2/4 rounded-b-full shadow-lg shadow-gray-500">
        <div className="flex flex-col items-center gap-4 2xl:gap-8 px-16 lg:px-36 2xl:px-80 mt-2 sm:mt-16">
          <h2 className="text-[#2f4a69] font-bold text-xl sm:text-3xl lg:text-5xl underline">
            Unete!
          </h2>
          <p className="text-center leading-5 text-sm sm:text-xl lg:mt-8">
            ¡Únete a nosotros en Acarreos JH y forma parte de un
            equipo comprometido con ofrecer servicios de acarreo excepcionales!
            Estamos buscando personas apasionadas y talentosas. ¡Envía tu
            solicitud hoy mismo!
          </p>
          <IoMdTrain className="text-zinc-900 text-5xl lg:text-6xl 2xl:text-7xl" />
        </div>
      </div>
      <ImgsGrid />
    </section>
  );
}
