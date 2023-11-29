import locationSVG from '../../assets/images/location.svg'
import locationIMG from '../../assets/images/location-img.webp'

export default function LocationSection() {
    return (
        <div className=" bg-prime-brown md:flex md:items-center ">
            <div className="flex flex-col gap-9 py-5 md:w-2/4 ">
                <div className="flex flex-col gap-7 items-center w-[85%] m-auto md:items-start md:mx-[20%] md:my-2">
                    <div className=" flex flex-col items-center gap-7 md:flex-row md:items-start">
                        <img src={locationSVG} className=' w-10 md:order-last md:w-9 ' alt="location icon" />
                        <h2 className='font-bebas text-off-white text-4xl text-center md:text-6xl'>Lokoationer</h2>
                    </div>
                    <div className=" flex flex-col gap-2 ">
                        <p className='font-mont text-off-white text-sm text-center md:text-base'>Find vores café og bageri i hjertet af Aarhus </p>
                    </div>
                </div>
                <div className=" flex gap-5 w-[85%] m-auto md:flex-col md:mx-[20%] md:my-2">
                    <div className=" flex flex-col gap-2 items-center w-[50%] md:items-start md:w-auto">
                        <h3 className='font-bebas text-3xl text-off-white md:text-4xl'>Bageri</h3>
                        <p className='font-mont text-off-white text-sm italic md:text-base' >Mindet 4D, 8000 Aarhus C</p>
                    </div>
                    <div className=" flex flex-col gap-2 items-center w-[50%] md:items-start md:w-auto">
                        <h3 className=' font-bebas text-3xl text-off-white md:text-4xl'>Café</h3>
                        <p className='font-mont text-off-white text-sm italic md:text-base '>Ankersgade 12B, 8000 Aarhus C</p>
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