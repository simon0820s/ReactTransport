import { WiMoonAltWaxingCrescent5 } from "react-icons/wi";
import { ImgsGrid } from "../components/ImgsGrid";

export default function TrabajaConNosotros() {
  return (
    <section
      id="trabaja_con_nosotros"
      className="h-screen flex flex-col justify-start items-center bg-orange-500 bg-opacity-20"
    >
      <div className="flex flex-col items-center justify-center sm:justify-start bg-neutral-100 w-full h-2/4 rounded-b-full">
        <div className="flex flex-col items-center gap-1 sm:gap-4 px-16 lg:px-36 mt-2 sm:mt-20 lg:mt-28">
          <h2 className="text-[#2f4a69] font-bold text-xl sm:text-3xl lg:text-5xl underline">
            Unete!
          </h2>
          <p className="text-center text-sm sm:text-xl lg:mt-8">
            ¡Únete a nosotros en Acarreos JH y forma parte de un
            equipo comprometido con ofrecer servicios de acarreo excepcionales!
            Estamos buscando personas apasionadas y talentosas. ¡Envía tu
            solicitud hoy mismo!
          </p>
        </div>
      </div>
      <ImgsGrid/>
    </section>
  );
}
