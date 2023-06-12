import { WiMoonAltWaxingCrescent5 } from "react-icons/wi";

export default function TrabajaConNosotros() {
  return (
    <section
      id="trabaja_con_nosotros"
      className="h-screen flex flex-col justify-start items-center bg-orange-500 bg-opacity-20"
    >
      <div className="flex flex-col items-center justify-center bg-neutral-100 w-full h-2/4 rounded-b-full">
        <div className="flex flex-col items-center gap-1 px-16 mt-2">
          <h2 className="text-[#2f4a69] font-bold text-xl underline">Unete!</h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing
          </p>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt it
            amet consectetur adipisicing elit. Nesciunt
          </p>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ne
          </p>
        </div>
      </div>
      <WiMoonAltWaxingCrescent5 className="text-7xl mt-20 text-[#2f4a69] "/>
    </section>
  );
}
