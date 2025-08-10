import { Sidebar } from "@/features/sidebar";
import ErrorBoundaryProvider from "@/providers/ErrorBoundary";

export default function AppLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="2xl:container xl:px-8 mx-auto">
            <div className="grid transition-all grid-cols-(--template-layout-xs) md:grid-cols-(--template-layout-md) xl:grid-cols-(--template-layout)">
                <ErrorBoundaryProvider>
                    <Sidebar />
                </ErrorBoundaryProvider>
                <ErrorBoundaryProvider>
                    {children}
                </ErrorBoundaryProvider>
            </div>
        </div>
    );
}