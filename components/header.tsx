import Link from "next/link";

export default function Header() {
    return (
        <nav className="w-full flex flex-col items-center border-b fixed bg-white px-3 lg:px-6 z-10" >
            <div className="max-w-screen-xl w-full py-2 lg:py-3 flex-row flex items-center justify-between" >
                <img src="/img/header.png" className="h-5 lg:h-8" />
                <div className="gap-8 flex flex-row" >
                    <Link href={'/'} className="hover:text-blue-500 text-xs lg:text-base cursor-pointer font-normal hover:font-medium hidden lg:visible" >Home</Link>
                    <Link href={'/'} className="font-normal hover:font-medium text-xs lg:text-base hover:text-blue-500 cursor-pointer hidden lg:visible" >About us</Link>
                    <Link href={'/'} className="font-normal hover:font-medium text-xs lg:text-base hover:text-blue-500 cursor-pointer hidden lg:visible" >Contact us</Link>
                </div>
                <div>
                    <button className="bg-blue-500 px-3 lg:px-5 py-2 lg:py-2.5 rounded-full text-white text-xs lg:text-sm font-light lg:font-medium" >Download</button>
                </div>
            </div>
        </nav>
    )
}