import Form from "../components/Form";
export default function TrabajaConNosotros() {
  return (
    <section
      id="trabaja_con_nosotros"
      className="h-screen flex justify-center items-center bg-orange-500 bg-opacity-20 gap-10"
    >
      <div className="flex flex-col items-center justify-center bg-neutral-100 w-1/2 h-3/4 p-4 rounded-r-full">
        <div className="flex flex-col items-center gap-4 pr-36">
          <h2 className="text-[#2f4a69] font-bold text-5xl mt-8 underline">
            Unete!
          </h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            aperiam amet commodi possimus. Praesentium vel repellat delectus,
            cum dolores corporis cumque! Architecto quasi sequi quidem dicta in
            est placeat impedit!
          </p>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            aperiam amet commodi possimus. Praesentium vel repellat delectus,
            cum dolores corporis cumque! Architecto quasi sequi quidem dicta in
            est placeat impedit!
          </p>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            aperiam amet commodi possimus. Praesentium vel repellat delectus,
            cum dolores corporis cumque! Architecto quasi sequi quidem dicta in
            est placeat impedit!
          </p>
        </div>
      </div>
      <Form />
    </section>
  );
}
