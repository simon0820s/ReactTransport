import { WiMoonAltWaxingCrescent5 } from "react-icons/wi";

export default function TrabajaConNosotros() {
  return (
    <section
      id="trabaja_con_nosotros"
      className="h-screen flex flex-col justify-start items-center bg-orange-500 bg-opacity-20"
    >
      <div className="flex flex-col items-center justify-center sm:justify-start bg-neutral-100 w-full h-2/4 rounded-b-full">
        <div className="flex flex-col items-center gap-1 sm:gap-4 px-16 lg:px-36 mt-2 sm:mt-20 lg:mt-28">
          <h2 className="text-[#2f4a69] font-bold text-xl sm:text-3xl lg:text-5xl underline">Unete!</h2>
          <p className="text-center text-sm sm:text-xl lg:mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing
          </p>
          <p className="text-center text-sm sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt it
            amet consectetur adipisicing elit. Nesciunt
          </p>
          <p className="text-center text-sm sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ne
          </p>
        </div>
      </div>
      <WiMoonAltWaxingCrescent5 className="text-7xl sm:text-8xl lg:text-9xl mt-20 lg:mt-40 text-[#2f4a69] "/>
    </section>
  );
}
