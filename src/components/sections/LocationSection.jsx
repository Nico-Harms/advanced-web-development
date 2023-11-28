import locationSVG from '../../assets/images/location.svg'
import locationIMG from '../../assets/images/location-img.webp'

export default function LocationSection() {
    return (
        <div className=" bg-prime-brown my-10 md:flex ">
            <div className="flex flex-col gap-9 py-5 md:w-2/4 ">
                <div className="flex flex-col gap-7 items-center w-[85%] m-auto">
                    <img src={locationSVG} className=' w-10 ' alt="location icon" />
                    <div className=" flex flex-col gap-2 ">
                        <h2 className='font-bebas text-off-white text-4xl text-center'>Lokoationer</h2>
                        <p className='font-mont text-off-white text-sm text-center'>Find vores café og bageri i hjertet af Aarhus </p>
                    </div>
                </div>
                <div className=" flex gap-5 w-[85%] m-auto ">
                    <div className=" flex flex-col gap-2 items-center w-[50%] ">
                        <h3 className='font-bebas text-3xl text-off-white'>Bageri</h3>
                        <p className='font-mont text-off-white text-sm italic ' >Mindet 4D, 8000 Aarhus C</p>
                    </div>
                    <div className=" flex flex-col gap-2 items-center w-[50%] ">
                        <h3 className=' font-bebas text-3xl text-off-white'>Café</h3>
                        <p className='font-mont text-off-white text-sm italic'>Ankersgade 12B, 8000 Aarhus C</p>
                    </div>
                </div>
            </div>
            <div className="hidden md:block md:w-2/4 relative">
                <div className="gradient-overlay hidden md:block"></div>
                <img src={locationIMG} className='hidden md:block md:w-[100%] md:h-[100%]  ' alt="Billede af brød display" />
            </div>


        </div>
    )
}