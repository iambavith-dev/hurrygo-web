import { database } from "@/config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react"

export default function Users() {

    const [requests, setRequests] = useState<any[]>([]);

    const getData = async () => {
        let arr:any[] = []
        const docsRef = query(collection(database, 'users'))
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
        <div>
            <div>
                <h1>{requests?.length} Users</h1>
            </div>
            <div className="flex flex-col mt-6">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="border rounded-lg overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase" >Name</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Phone Number</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Gender</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Joined at</th>
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