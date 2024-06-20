export default function HowItWorks() {
    return (
        <div className="w-full min-h-[625px]" >
            <div className="pt-16 bg-slate-900 w-full max-h-[450px] pb-16 flex flex-col items-center" >
                <div className="max-w-screen-lg w-full flex flex-col items-center px-10" >
                    <div className="flex justify-between gap-20 items-end" >
                        <div className="flex flex-col gap-2 w-full" >
                            <h1 className="text-base lg:text-base font-regular flex flex-row items-center gap-2 text-white" > <div className="h-0.5 w-4 lg:w-3 bg-blue-500" />Easy Booking Process</h1>
                            <h1 className="text-base lg:text-3xl font-medium flex flex-row items-center gap-3 text-white" >How to Book a ride on</h1>
                            <h1 className="text-base lg:text-3xl font-medium flex flex-row items-center gap-3 text-white" ><span className="text-blue-500" >HurryGo</span> app?</h1>
                        </div>
                        <h1 className="text-white text-xs font-light border-l-2 border-l-blue-500 pl-2" >You can book your auto ride in HurryGo application within 3 simple steps without hustle.</h1>
                    </div>
                    <div className="mt-10 flex gap-4" >
                        {
                            contents?.map((item, index) => {
                                return (
                                    <div 
                                        className={`bg-white flex flex-col items-center justify-center shadow-[0px_20px_20px_10px_#00000008] rounded-xl ${index == 1 && 'flex-col-reverse'} gap-1`}
                                    >
                                        <img src={item?.image} className="w-56 mx-5" />
                                        <div className={`p-3 flex items-center justify-center flex-col ${index === 1 ? 'mt-5' : 'mb-5'}`} >
                                            <h1 className="text-lg font-semibold" >{item?.title}</h1>
                                            <p className="text-xs font-normal text-center text-slate-500" >{item?.content}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

const contents = [
    {
        image: '/img/home/home.png',
        title: 'Choose Loaction',
        content: 'Choose your pickup and destination'
    },
    {
        image: '/img/home/choose-driver.png',
        title: 'Choose Driver',
        content: 'Choose your nearby drivers'
    },
    {
        image: '/img/home/order.png',
        title: 'Start Ride',
        content: 'You are all set for a ride.'
    }
]