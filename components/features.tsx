export default function Features() {
    return (
        <div className="py-10 bg-blue-50 w-full flex flex-col items-center" >
            <div className="max-w-screen-lg w-full flex flex-col items-center" >
                <h1 className="text-2xl font-medium flex flex-row items-center gap-3" >Why choose <span className="text-blue-500 font-semibold underline" >HurryGo?</span> </h1>

                <div className="grid grig-cols-1 lg:grid-cols-3 w-full gap-3 mt-10" >
                    {
                        features?.map((item, index) => {
                            return (
                                <div className="p-4 flex items-center rounded-2xl flex-col gap-1" key={`feature_${index}`} >
                                    <div className="h-16 w-16 bg-blue-500 rounded-full flex items-center justify-center" >
                                        {item?.icon}
                                    </div>
                                    <div className="mt-3 gap-1 flex flex-col" >
                                        <h2 className="text-xl text-slate-800 font-semibold text-center" >{item?.title}</h2>
                                        <h6 className="text-slate-500 text-center text-sm" >{item?.content}</h6>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const features = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" className="size-10">
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
      </svg>,
        title: 'Easy Booking',
        content: "Book a ride in just a few taps. Enter your destination, choose your driver, and done."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" className="size-10">
        <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
      </svg>,
        title: 'Choose Your Driver',
        content: 'Select your preferred driver by viewing rates before ride.'
    },
    // {
    //     icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" className="size-6">
    //     <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
    //   </svg>,
    //     title: 'Safe & Secure',
    //     content: "All rides are monitored for safety. Our drivers are vetted and vehicles regularly inspected."
    // },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" className="size-10">
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9 7.5A.75.75 0 0 0 9 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 0 0 9 12h3.622a2.251 2.251 0 0 1-2.122 1.5H9a.75.75 0 0 0-.53 1.28l3 3a.75.75 0 1 0 1.06-1.06L10.8 14.988A3.752 3.752 0 0 0 14.175 12H15a.75.75 0 0 0 0-1.5h-.825A3.733 3.733 0 0 0 13.5 9H15a.75.75 0 0 0 0-1.5H9Z" clipRule="evenodd" />
      </svg>,
        title: 'Affordable Prices',
        content: 'Transparent pricing with no hidden fees. Pay via the upi or in cash.'
    }
]