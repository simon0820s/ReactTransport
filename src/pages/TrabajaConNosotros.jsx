import { ImgsGrid } from "../components/ImgsGrid";
import { IoMdTrain } from 'react-icons/io'
import { motion } from "framer-motion";
export default function TrabajaConNosotros() {
  return (
    <section
      id="trabaja_con_nosotros"
      className="h-screen flex flex-col justify-start items-center bg-orange-500 bg-opacity-20"
    >
      <div className="flex flex-col gap-4 items-center justify-center sm:justify-start bg-neutral-100 w-full h-2/4 rounded-b-full shadow-lg shadow-gray-500">
        <div className="flex flex-col items-center gap-1 sm:gap-4 px-16 lg:px-36 mt-2 sm:mt-20 lg:mt-28">
          <h2 className="text-[#2f4a69] font-bold text-xl sm:text-3xl lg:text-5xl underline">
            Unete!
          </h2>
          <p className="text-center leading-5 text-sm sm:text-xl lg:mt-8">
            ¡Únete a nosotros en Acarreos JH y forma parte de un
            equipo comprometido con ofrecer servicios de acarreo excepcionales!
            Estamos buscando personas apasionadas y talentosas. ¡Envía tu
            solicitud hoy mismo!
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <IoMdTrain className="text-zinc-900 text-5xl" />
        </motion.div>
      </div>
      <ImgsGrid />
    </section>
  );
}
