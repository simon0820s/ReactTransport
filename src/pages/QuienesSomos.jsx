import { CiBeaker1 } from "react-icons/ci";

export default function QuienesSomos() {
  return (
    <section
      id="quienes_somos"
      className="h-screen flex flex-col items-center justify-center"
    >
      <div className="flex flex-col justify-center sm:justify-start h-4/5 bg-neutral-100 md:mr-8">
        <div className="flex flex-col items-center sm:mt-20">
          <h2 className="text-[#2f4a69] text-3xl sm:text-5xl lg:text-6xl">
            Quieres saber ?
          </h2>
          <h1 className="text-[#2f4a69] text-4xl sm:text-7xl lg:text-9xl text-center">
            Quienes somos ?
          </h1>
        </div>

        <div className="flex justify-evenly w-screen h-auto bg-opacity-50 px-1 xl:px-60 gap-1 sm:mt-20 md:mt-10 lg:mt-5">
          <div className="flex flex-col items-center w-60 mt-5 px-1">
            <span className="w-16 sm:w-32 h-16 sm:h-32 border-4 border-[#10E698] absolute mr-8"></span>
            <span className="w-16 sm:w-32 h-16 sm:h-32 bg-[#0d1926] mt-4 z-10">
              <CiBeaker1 className="text-[#10E698] text-5xl sm:text-8xl mt-2 ml-2 sm:ml-4 sm:mt-4" />
            </span>
            <h3 className="mt-4 text-xl text-center sm:text-4xl md:text-3xl lg:text-2xl sm:font-normal">
              Una empresa segura
            </h3>
            <p className="text-center text-xs sm:text-base md:text-xs mt-2 sm:mt-4 px-4">
              Tu seguridad, nuestra prioridad. En Acarreos JH, nos comprometemos
              a brindarte un servicio de acarreos confiable y seguro. Con
              conductores expertos y una atención meticulosa, puedes estar
              tranquilo sabiendo que tus pertenencias estarán en las mejores
              manos. Confía en nosotros para un transporte sin preocupaciones y
              disfruta de la tranquilidad que mereces.
            </p>
          </div>

          <div className="hidden md:flex md:flex-col md:items-center md:w-60 md:mt-5 md:px-1">
            <span className="w-16 sm:w-32 h-16 sm:h-32 border-4 border-[#10E698] absolute mr-8"></span>
            <span className="w-16 sm:w-32 h-16 sm:h-32 bg-[#0d1926] mt-4 z-10">
              <CiBeaker1 className="text-[#10E698] text-5xl sm:text-8xl mt-2 ml-2 sm:ml-4 sm:mt-4" />
            </span>
            <h3 className="mt-4 text-xl sm:text-4xl md:text-3xl text-center lg:text-2xl sm:font-normal">
              Una empresa Rapica
            </h3>
            <p className="text-center text-xs sm:text-xs mt-2 sm:mt-4 px-4">
              ¡Rapidez garantizada! En Acarreos JH, nos destacamos por nuestra
              eficiencia en cada acarreo. Nuestro equipo altamente capacitado y
              nuestra flota moderna nos permiten responder rápidamente a tus
              necesidades de transporte. Confía en nosotros para un servicio
              veloz y confiable.
            </p>
          </div>

          <div className="hidden md:flex md:flex-col md:items-center md:w-60 md:mt-5 md:px-1">
            <span className="w-16 sm:w-32 h-16 sm:h-32 border-4 border-[#10E698] absolute mr-8"></span>
            <span className="w-16 sm:w-32 h-16 sm:h-32 bg-[#0d1926] mt-4 z-10">
              <CiBeaker1 className="text-[#10E698] text-5xl sm:text-8xl mt-2 ml-2 sm:ml-4 sm:mt-4" />
            </span>
            <h3 className="mt-4 text-xl sm:text-4xl md:text-3xl lg:text-2xl text-center sm:font-normal">
              Una empresa Eficaz
            </h3>
            <p className="text-center text-xs sm:text-base md:text-xs mt-2 sm:mt-4 px-4">
              La eficacia que necesitas. En Acarreos JH, nos
              enorgullece ofrecerte un servicio de acarreo altamente eficaz.
              Nuestro equipo capacitado y nuestra atención meticulosa a los
              detalles garantizan una ejecución eficiente en cada traslado.
              Confía en nosotros para un servicio de acarreo que cumpla tus
              expectativas y te brinde tranquilidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
