import { database } from "@/config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react"

export default function RequestComponent() {

    const [requests, setRequests] = useState<any[]>([]);

    const getData = async () => {
        let arr:any[] = []
        const docsRef = query(collection(database, 'drivers'), where('verified', '==', false))
        const data = await getDocs(docsRef)
        data.forEach((item) => {
            arr?.push({
                ...item.data(),
                id: item?.id
            })
        })

        setRequests(arr)

    }

    useEffect(() => {
        getData()
    }, [])
    
    return (
        <div className="mt-6" >
            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="border rounded-2xl shadow-lg shadow-slate-100 mb-10 overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-5 text-start text-xs font-medium text-gray-500 uppercase" >Name</th>
                                        <th scope="col" className="px-6 py-5 text-start text-xs font-medium text-gray-500 uppercase">Phone Number</th>
                                        <th scope="col" className="px-6 py-5 text-start text-xs font-medium text-gray-500 uppercase">Gender</th>
                                        <th scope="col" className="px-6 py-5 text-start text-xs font-medium text-gray-500 uppercase">Joined at</th>
                                        <th scope="col" className="px-6 py-5 text-start text-xs font-medium text-gray-500 uppercase">Documents</th>
                                        <th scope="col" className="px-6 py-5 text-end text-xs font-medium text-gray-500 uppercase">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {
                                        requests?.map((item, index) => {
                                            return (
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{item?.name}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{item?.phoneNumber}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{item?.gender}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{new Date(item?.createdAt).getDate()}-{new Date(item?.createdAt).getMonth()}-{new Date(item?.createdAt).getFullYear()}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                        <button
                                                            type="button"
                                                            className="inline-flex items-center gap-x-2 text-xs font-regular rounded-lg border border-transparent bg-blue-500 px-2.5 py-1.5 text-white disabled:opacity-50 disabled:pointer-events-none"
                                                        >
                                                            View
                                                        </button>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium gap-2 flex flex-row justify-end">
                                                        <button
                                                            type="button"
                                                            className="inline-flex items-center gap-x-2 text-xs font-regular rounded-lg border border-transparent bg-red-500 px-2.5 py-1.5 text-white disabled:opacity-50 disabled:pointer-events-none"
                                                        >
                                                            Reject
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="inline-flex items-center gap-x-2 text-xs font-regular rounded-lg border border-transparent bg-green-500 px-2.5 py-1.5 text-white disabled:opacity-50 disabled:pointer-events-none"
                                                        >
                                                            Approve
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}