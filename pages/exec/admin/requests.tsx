import RequestComponent from "@/components/admin/requests";
import AdminLayout from "@/providers/AdminLayout";
import AuthProvider from "@/providers/AuthProvider";

export default function Requests() {
    return (
        <AuthProvider>
            <AdminLayout>
                <h1 className="text-3xl font-semibold" >Driver Requests</h1>
                <RequestComponent/>
            </AdminLayout>
        </AuthProvider>
    )
}