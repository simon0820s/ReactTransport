export default function MisionVision() {
  return (
    <section
      id="mv"
      className="flex flex-col items-center justify-center h-screen bg-orange-800 bg-opacity-20"
    >
      <div className="flex flex-col gap-4 sm:gap-40 md:gap-20 lg:gap-10 px-4 py-8 mt-10 md:mr-4 lg:mr-0">
        <div className="flex flex-col items-center justify-center lg:h-60 lg:mr-4 bg-neutral-100 rounded-xl shadow-lg shadow-gray-500">
          <h1 className="text-3xl sm:text-5xl lg:text-4xl font-medium sm:font-semibold text-[#2f4a69] mt-1">
            Misión
          </h1>
          <div className="flex flex-col items-center gap-2 text-center px-2 py-1">
            <p className="text-justify text-xs sm:text-2xl md:text-xl lg:text-lg">
              Buscamos conectar las personas que necesitan transportar todo tipo
              de cosas con aquellos que pueden prestar el servicio de
              transporte, buscando siempre que el usuario tenga la mejor
              experiencia. De esta manera lograr que sea más fácil y rápido la
              búsqueda de un transporte para llevar materiales de construcción,
              mudanzas, acarreos, entre otros, el principal objetivo es resolver
              el problema más común de las personas a la hora de comprar algo,
              no saber en qué llevar hasta el lugar en que las necesitan, lo que
              ha comprado. Además, se busca que las personas que necesitan el
              servicio lo adquieran a un precio justo y que éste a su vez sea
              justo para quien lo presta.<br/><br/>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center lg:h-72 lg:mr-4 bg-neutral-100 rounded-xl shadow-lg shadow-gray-500">
          <h1 className="text-3xl sm:text-5xl lg:text-4xl font-medium sm:font-semibold text-[#2f4a69] mt-1">
            Visión
          </h1>
          <div className="flex flex-col items-center gap-2 text-center px-2 py-1">
            <p className="text-justify text-xs sm:text-2xl md:text-xl lg:text-lg">
              Nuestra misión de ayudar a las personas a conectarse y transportar
              sus cosas más fácil, es la que no permite que nos detengamos en
              seguir trabajando para ustedes, ese es nuestro motivo todos los
              días para levantarnos de la cama y brindarles un mejor servicio, y
              así, puedan ustedes cada día encontrar mas facil y rapido un
              transporte para llevar lo que necesitan. Ésta idea nació en una
              tarde de lluvia, desde ahí hemos venido trabajando cada día para
              brindarles el mejor servicio. Así, lograr que todo lo que parecía
              un dolor de cabeza a la hora de cambiar de casa, de querer
              remodelar la casa, de hacer una construcción por no saber en que
              llevar los materiales o cosas del hogar, ya no lo sea, pues es
              nuestro motor darles soluciones a sus problemas.<br/><br/>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
