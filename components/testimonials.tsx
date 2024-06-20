export default function Testimonials() {
    return (
        <div className="hero w-full py-14 flex flex-col items-center" >
            <div className="max-w-screen-lg w-full flex flex-col items-center justify-center gap-2" >
                <h1 className="text-xs font-regular flex flex-row items-center gap-2" > <div className="h-0.5 w-3 lg:w-3 bg-blue-500" />Testimonials</h1>
                <h1 className="text-base lg:text-2xl font-medium flex flex-row items-center gap-2" >What Our <span className="text-blue-500" >Customer</span> Say</h1>

                <div className="grid grid-cols-3 gap-4 mt-6" >
                    {
                        allData?.map((item, index) => {
                            return (
                                <div className="p-3 border border-dashed hover border-slate-200 rounded-2xl bg-white shadow-2xl shadow-slate-100 flex flex-col gap-1 hover:shadow-slate-300 transition-all duration-300" >
                                    <div className="bg-slate-200 h-10 w-10 rounded-full flex items-center justify-center text-slate-500 font-semibold" >
                                        <span>{item?.avatar}</span>
                                    </div>
                                    <p className="text-lg font-medium text-slate-900" >{item?.name}</p>
                                    <p className="text-xs font-normal text-slate-600" >{item?.feedback}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const allData = [
    {
        avatar: 'J',
        name: 'John D',
        feedback: `Fantastic service! The app is user-friendly and the drivers are always professional.`
    },
    {
        avatar: 'S',
        name: 'Subi S',
        feedback: 'Reliable and affordable. I use it daily for my commute.'
    },
    {
        avatar: 'E',
        name: 'Emily R',
        feedback: 'I love being able to choose my driver. It makes the experience so much more personal.'
    },
    {
        avatar: 'K',
        name: 'Kumar M',
        feedback: "Great app! Easy to use and the drivers are always on time. I've never had a bad experience."
    },
    {
        avatar: 'J',
        name: 'Jessica T',
        feedback: "The pricing is very transparent. No hidden fees and I always know what to expect."
    }
]