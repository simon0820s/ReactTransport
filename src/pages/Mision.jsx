import { AiOutlineGitlab } from "react-icons/ai";
export default function MisionVision() {
  return (
    <section
      id="mv"
      className="flex flex-col items-center h-screen bg-green-500 bg-opacity-20"
    >
      <AiOutlineGitlab className="text-8xl text-[#2f4a69]"/>
      <div className="flex-1 flex justify-between gap-60 pb-20">

        <div className="flex flex-col items-center justify-center mb-10 bg-neutral-100 w-1/2 py-40 rounded-r-3xl">
          <h1 className="text-4xl font-medium text-[#2f4a69]">Misión</h1>
          <div className="flex flex-col items-center gap-4 text-center px-8 mt-4">
            <p className="font-medium">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
              optio fugiat voluptates non eligendi quae consequuntur repellat
              suscipit praesentium, ipsa voluptas itaque perferendis cumque
              architecto maiores nesciunt laboriosam facere tempore!
            </p>

            <p className="font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              iure molestias est perferendis ullam explicabo ad rerum vero culpa
              quasi. Ipsa incidunt, tenetur quam consequatur in esse dolorem
              impedit cumque!
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mb-10 bg-neutral-100 w-1/2 py-40 rounded-l-3xl">
          <h1 className=" text-4xl font-medium text-[#2f4a69]">Visión</h1>
          <div className="flex flex-col items-center gap-4 text-center px-8 mt-4">
            <p className="font-medium">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
              optio fugiat voluptates non eligendi quae consequuntur repellat
              suscipit praesentium, ipsa voluptas itaque perferendis cumque
              architecto maiores nesciunt laboriosam facere tempore!
            </p>

            <p className="font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              iure molestias est perferendis ullam explicabo ad rerum vero culpa
              quasi. Ipsa incidunt, tenetur quam consequatur in esse dolorem
              impedit cumque!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
