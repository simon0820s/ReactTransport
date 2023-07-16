export const ImgsGrid = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
        <h2 className="text-[#2f4a69] font-bold text-md text-center sm:text-2xl lg:text-4xl ">Tenemos vehiculos de primera calidad</h2>
        <div className="relative flex md:grid md:grid-rows-2 md:grid-cols-3 md:gap-2 w-40 md:w-auto h-60 md:h-auto overflow-scroll md:overflow-hidden scroll-snap-type-x scroll-snap-mandatory">
          <img className="w-full md:w-52 md:h-56 left-0 sticky object-cover rounded-md scroll scroll-snap-center" src="public/img/IMG_20210517_131336.jpg" alt="moto1" />
          <img className="w-full md:w-52 md:h-56 left-0 sticky object-cover rounded-md scroll scroll-snap-center" src="public/img/IMG_20210531_160530.jpg" alt="moto3" />
          <img className="w-full md:w-52 md:h-56 left-0 sticky object-cover rounded-md scroll scroll-snap-center" src="public/img/IMG_20210918_104403.jpg" alt="moto4" />
          <img className="w-full md:w-52 md:h-56 left-0 sticky object-cover rounded-md scroll scroll-snap-center" src="public/img/IMG_20211007_173343.jpg" alt="moto5" />
          <img className="w-full md:w-52 md:h-56 left-0 sticky object-cover rounded-md scroll scroll-snap-center" src="public/img/Screenshot_2022-05-14-12-22-10-040_com.whatsapp.jpg" alt="moto6" />
          <img className="w-full md:w-52 md:h-56 left-0 sticky object-cover rounded-md scroll scroll-snap-center" src="public/img/IMG_20210531_160521.jpg" alt="moto2" />
        </div>
        
    </div>
  )
}
