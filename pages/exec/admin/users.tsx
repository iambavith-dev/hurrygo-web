import RequestComponent from "@/components/admin/requests";
import Users from "@/components/admin/users";
import AdminLayout from "@/providers/AdminLayout";
import AuthProvider from "@/providers/AuthProvider";

export default function Requests() {
    return (
        <AuthProvider>
            <AdminLayout>
                <h1 className="text-3xl font-semibold" >Users</h1>
                <Users/>
            </AdminLayout>
        </AuthProvider>
    )
}