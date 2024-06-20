import Link from "next/link";

export default function Hero() {
    return (
        <div className="hero w-full py-1 lg:py-12 mt-14 lg:mt-20 flex flex-col items-center" >
            <div className="max-w-screen-lg w-full flex flex-col gap-1" >
                <div className="max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20 lg:items-start px-2 md:px-8 py-8" >
                    <div>
                        <h1 className="text-base lg:text-lg font-regular flex flex-row items-center gap-3" > <div className="h-1 w-4 lg:w-6 bg-blue-500" /> Get a Ride in Minutes with HurryGo</h1>
                        <div className="mt-6 gap-3 flex flex-col md:gap-6" >
                            <h1 className="text-3xl font-semibold md:text-5xl" >Reliable, and affordable</h1>
                            <h1 className="text-3xl font-semibold md:text-5xl" > <span className="text-white px-2 bg-blue-500" >Auto services</span> </h1>
                            <h1 className="text-3xl font-semibold md:text-5xl" >at your fingertips.</h1>
                        </div>
                        <div className="w-36" >
                            <Link href="https://play.google.com/store/apps/details?id=in.hurrygo.driver" target="_blank" >
                                <img src="/img/get-on-play.png" className="h-16 -ml-3 md:h-24" />
                            </Link>
                        </div>
                    </div>
                    <div>
                        {/* <img src="/img/home/hero.png" className="w-96 drop-shadow-2xl -z-10 -mb-24" /> */}
                        <img src="/img/home/hero-bk.png" className="w-56 drop-shadow-2xl -z-10" />
                    </div>
                </div>
            </div>
        </div>
    )
}