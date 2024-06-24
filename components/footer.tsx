import Link from "next/link"

export default function Footer() {
    return (
        <div className="w-full flex flex-col items-center bg-white pt-3" >
            <div className="w-full max-w-screen-lg px-4" >
                <div className="bg-blue-500 pt-10 px-10 lg:px-0 w-full rounded-3xl items-center justify-center flex flex-col relative overflow-hidden shadow-2xl" >
                    <div className="flex flex-col items-center justify-center" >
                        <p className="text-white font-normal" >Unlock Your Dream Ride: Your Auto Booking Destination</p>
                        <p className="text-white font-semibold text-3xl mt-2" >Download the App Now!</p>
                    </div>
                    <Link href="https://play.google.com/store/apps/details?id=in.hurrygo" target="_blank" className="cursor-pointer z-10" >
                        <img src="/img/get-on-play.png" className="h-24" />
                    </Link>
                    <div className="h-full w-full hero absolute opacity-20 -mt-8 overflow-hidden " />
                </div>
            </div>
            <div className="py-2 bg-slate-900 w-full -mt-24 h-[450px] pt-40" >
                <div className="max-w-screen-lg w-full flex flex-col items-start px-10" >
                    <div>
                        <img src="/img/header.png" className="h-8" />
                        <p className="text-slate-400 mt-5 font-light text-xs" >Reliable, and affordable Auto services at your fingertips.</p>
                        <div className="text-white flex flex-row items-center gap-3 text-xl mt-5" >
                            {
                                socialLinks?.map((item, index) => {
                                    return (
                                        <div className="bg-slate-800 h-10 w-10 flex items-center justify-center rounded-xl" key={`social_${index}`} >
                                            <span className={`mdi mdi-${item.icon}`} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="h-[1px] w-full bg-slate-800 mt-10 mb-6" />

                    <div className="text-slate-200 font-light text-xs flex flex-col gap-4 lg:flex-row items-center justify-between w-full" >
                        <p>Copyright © {new Date().getFullYear()} hurrygo.in All Rights Reserved.</p>

                        <div className="flex items-center gap-2" >
                            <Link href={'/privacy'} className="underline" >Privacy Policy</Link>
                            <p>|</p>
                            <Link href={'/terms'} className="underline" >Terms & Conditions</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

const socialLinks = [
    {
        icon: 'facebook',
        link: ''
    },
    {
        icon: 'instagram',
        link: ''
    },
    {
        icon: 'twitter',
        link: ''
    },
    {
        icon: 'email',
        link: ''
    }
]