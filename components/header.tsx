import Link from "next/link";

export default function Header() {
    return (
        <nav className="w-full flex flex-col items-center border-b fixed bg-white px-6 z-10" >
            <div className="max-w-screen-xl w-full py-3 flex-row flex items-center justify-between" >
                <img src="/img/header.png" className="h-8" />
                <div className="gap-8 flex flex-row" >
                    <Link href={'/'} className="hover:text-blue-500 cursor-pointer font-normal hover:font-medium" >Home</Link>
                    <Link href={'/'} className="font-normal hover:font-medium hover:text-blue-500 cursor-pointer" >About us</Link>
                    <Link href={'/'} className="font-normal hover:font-medium hover:text-blue-500 cursor-pointer" >Contact us</Link>
                </div>
                <div>
                    <button className="bg-blue-500 px-5 py-2.5 rounded-full text-white text-sm font-medium" >Download now</button>
                </div>
            </div>
        </nav>
    )
}