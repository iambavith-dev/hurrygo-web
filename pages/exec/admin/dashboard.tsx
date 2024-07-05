import AdminLayout from "@/providers/AdminLayout";
import AuthProvider from "@/providers/AuthProvider";

export default function Dashboard() {
    return (
        <AuthProvider>
            <AdminLayout>
                <div>juvuv</div>
            </AdminLayout>
        </AuthProvider>
    )
}