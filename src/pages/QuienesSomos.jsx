import { CiBeaker1 } from "react-icons/ci";

export default function QuienesSomos() {
  return (
    <section id="quienes_somos" className="h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col justify-center h-4/5 bg-neutral-100">
        <div className="flex flex-col items-center mt-8">
          <h2 className="text-[#2f4a69] text-3xl">People are strange</h2>
          <h1 className="text-[#2f4a69] text-6xl">Who are</h1>
        </div>

        <div className="flex justify-evenly w-screen h-auto bg-opacity-50 px-1 gap-1">
          <div className="flex flex-col items-center w-60 mt-5 px-1">
            <span className="w-16 h-16 border-4 border-[#10E698] absolute mr-8"></span>
            <span className="w-16 h-16 bg-[#0d1926] mt-4 z-10">
              <CiBeaker1 className="text-[#10E698] text-5xl mt-2 ml-2" />
            </span>
            <h3 className="mt-4 text-xl">Quality</h3>
            <p className="text-center text-xs mt-2 px-1">
              Lorem ipsum dolor sit amet consect
            </p>
          </div>

          <div className="flex flex-col items-center w-60 mt-5 px-1">
            <span className="w-16 h-16 border-4 border-[#10E698] absolute mr-8"></span>
            <span className="w-16 h-16 bg-[#0d1926] mt-4 z-10">
              <CiBeaker1 className="text-[#10E698] text-5xl mt-2 ml-2" />
            </span>
            <h3 className="mt-4 text-xl">Quality</h3>
            <p className="text-center text-xs mt-2 px-1">
              Lorem ipsum dolo Lorem ipsum dolor sit amet consectetur adip
            </p>
          </div>

          <div className="flex flex-col items-center w-60 mt-5 px-1">
            <span className="w-16 h-16 border-4 border-[#10E698] absolute mr-8"></span>
            <span className="w-16 h-16 bg-[#0d1926] mt-4 z-10">
              <CiBeaker1 className="text-[#10E698] text-5xl mt-2 ml-2" />
            </span>
            <h3 className="mt-4 text-xl">Quality</h3>
            <p className="text-center text-xs mt-2 px-1">
              Lorem ipsum dolor sit amet consectetur adip
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
