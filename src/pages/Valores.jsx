import { motion } from "framer-motion";
export default function Valores() {
  return (
    <section
      id="valores"
      className="flex items-center justify-center h-screen bg-orange-800 bg-opacity-20"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-neutral-100 2xl:w-1/2 bg-opacity-80 rounded-2xl shadow-lg shadow-gray-500 pb-10 m-4 md:m-8 lg:m-16 2xl:m-32 px-4 md:px-4 lg:px-16 2xl-px-32">
        <div className="flex flex-col items-center gap-2 md:gap-4 px-4">
          <h1 className="text-2xl sm:text-4xl mt-2 md:mt-4 text-[#2f4a69] font-bold underline">
            Valores
          </h1>
          <p className="text-justify leading-6 text-xs sm:text-medium md:text-base lg:text-xl">
            En Acarreos JH, nuestros valores fundamentales son:
            Excelencia: Nos esforzamos por superar las expectativas y entregar
            un servicio de acarreo excepcional en cada ocasión. Nos enfocamos en
            la calidad, la eficiencia y la atención meticulosa a los detalles.
            Integridad: Actuamos con honestidad, transparencia y ética en todas
            nuestras interacciones. Valoramos la confianza de nuestros clientes
            y nos comprometemos a mantener relaciones basadas en la confianza
            mutua. Compromiso con los clientes: Nos preocupamos por entender tus
            necesidades individuales y adaptar nuestros servicios para
            satisfacerlas. Tu satisfacción es nuestra prioridad y nos esforzamos
            por brindarte una atención personalizada y un servicio de calidad en
            cada momento. En Acarreos JH, estos valores nos guían en
            cada paso y nos aseguramos de cumplir con ellos en todos los
            aspectos de nuestro negocio. Confía en nosotros para tus necesidades
            de acarreo y experimenta la diferencia de trabajar con una empresa
            comprometida con la excelencia, la integridad y la satisfacción del
            cliente.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
