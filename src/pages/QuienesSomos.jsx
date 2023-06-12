import { CiBeaker1 } from "react-icons/ci";

export default function QuienesSomos() {
  return (
    <section id="quienes_somos" className="h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col justify-center sm:justify-start h-4/5 bg-neutral-100 md:mr-8">
        <div className="flex flex-col items-center sm:mt-20">
          <h2 className="text-[#2f4a69] text-3xl sm:text-5xl lg:text-6xl">People are strange</h2>
          <h1 className="text-[#2f4a69] text-6xl sm:text-8xl lg:text-9xl">Who are</h1>
        </div>

        <div className="flex justify-evenly w-screen h-auto bg-opacity-50 px-1 gap-1 sm:mt-20">
          <div className="flex flex-col items-center w-60 mt-5 px-1">
            <span className="w-16 sm:w-32 lg:w-48 h-16 sm:h-32 lg:h-48 border-4 border-[#10E698] absolute mr-8"></span>
            <span className="w-16 sm:w-32 lg:w-48 h-16 sm:h-32 lg:h-48 bg-[#0d1926] mt-4 z-10">
              <CiBeaker1 className="text-[#10E698] text-5xl sm:text-8xl lg:text-9xl mt-2 ml-2 sm:ml-4 lg:ml-8 sm:mt-4 lg:mt-8" />
            </span>
            <h3 className="mt-4 text-xl sm:text-4xl lg:text-6xl sm:font-normal">Quality</h3>
            <p className="text-center text-xs sm:text-base lg:text-2xl mt-2 sm:mt-4 px-1">
              Lorem ipsum dolor sit amet consect
            </p>
          </div>

          <div className="flex flex-col items-center w-60 mt-5 px-1">
            <span className="w-16 sm:w-32 lg:w-48 h-16 sm:h-32 lg:h-48 border-4 border-[#10E698] absolute mr-8"></span>
            <span className="w-16 sm:w-32 lg:w-48 h-16 sm:h-32 lg:h-48 bg-[#0d1926] mt-4 z-10">
              <CiBeaker1 className="text-[#10E698] text-5xl sm:text-8xl lg:text-9xl mt-2 ml-2 sm:ml-4 lg:ml-8 sm:mt-4 lg:mt-8" />
            </span>
            <h3 className="mt-4 text-xl sm:text-4xl lg:text-6xl sm:font-normal">Quality</h3>
            <p className="text-center text-xs sm:text-base lg:text-2xl mt-2 sm:mt-4 px-1">
              Lorem ipsum dolo Lorem ipsum dolor sit amet consectetur adip
            </p>
          </div>

          <div className="flex flex-col items-center w-60 mt-5 px-1">
            <span className="w-16 sm:w-32 lg:w-48 h-16 sm:h-32 lg:h-48 border-4 border-[#10E698] absolute mr-8"></span>
            <span className="w-16 sm:w-32 lg:w-48 h-16 sm:h-32 lg:h-48 bg-[#0d1926] mt-4 z-10">
              <CiBeaker1 className="text-[#10E698] text-5xl sm:text-8xl lg:text-9xl mt-2 ml-2 sm:ml-4 lg:ml-8 sm:mt-4 lg:mt-8" />
            </span>
            <h3 className="mt-4 text-xl sm:text-4xl lg:text-6xl sm:font-normal">Quality</h3>
            <p className="text-center text-xs sm:text-base lg:text-2xl mt-2 sm:mt-4 px-1">
              Lorem ipsum dolor sit amet consectetur adip
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
