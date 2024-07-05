import Sidebar from "@/components/admin/sidebar";

export default function AdminLayout({ children }: any) {
    return (
        <div className="h-screen w-full min-h-screen flex flex-row items-center overflow-hidden" >
            <div className='h-full bg-white w-1/4 px-5 py-10 border-r border-dashed border-slate-200 overflow-hidden' >
                <Sidebar/>
            </div>
            <div className="w-full h-full bg-white" >
                <div className="w-full bg-white bg-opacity-75 px-8 h-20 flex flex-row items-center fixed backdrop-blur" >
                    {/* <p className="font-medium" >Welcome back!</p> */}
                </div>
                <div className="px-6 pt-24 overflow-y-auto pb-10 h-[100vh]" >
                    {children}
                </div>
            </div>
        </div>
    )
}