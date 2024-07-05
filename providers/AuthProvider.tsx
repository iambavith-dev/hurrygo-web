import Auth from "@/pages/exec/admin/login"
import { useEffect, useState } from "react"

export default function AuthProvider({ children }: any) {
    
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const res = localStorage.getItem(btoa('user'))
        setUser(res)
    }, [])

    if(!user) {
        return (
            <Auth/>
        )
    }

    return children
}