"use client";
import { UserAddIcon } from "@/components/icon";
import { Sidebar } from "@/features/sidebar";
import { NewPostIcon } from "@/features/sidebar/assets/icons/Pencil";
import ErrorBoundaryProvider from "@/providers/ErrorBoundary";
import Link from "next/link";
import { ReactNode, useEffect, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

export default function AppLayout({
    children,
    modal
}: Readonly<{
    children: React.ReactNode;
    modal: ReactNode
}>) {
    const [ons, setOns] = useState<any>(null)

    useEffect(() => {
        (async () => {
            const mod = await import("onsenui");
            mod?.platform?.select("ios");
            setOns(mod);
        })();
    }, [])
    return (
        <>
            <div className="2xl:container xl:px-8 mx-auto">
                <div className="lg:grid transition-all grid-cols-(--template-layout-xs) md:grid-cols-(--template-layout-md) xl:grid-cols-(--template-layout)">
                    <ErrorBoundaryProvider>
                        <Sidebar />
                    </ErrorBoundaryProvider>
                    <ErrorBoundaryProvider>
                        {children}
                    </ErrorBoundaryProvider>
                </div>
            </div>
            <Link className="fixed hover:bg-button-primary-pressed bottom-0 right-4 text-button-primary-text bg-button-primary-background p-3 rounded-full" href={'/new-post/composer'}>
                <NewPostIcon width={19} height={19} />
            </Link>
            {
                typeof window != 'undefined' && modal && createPortal(modal, document.body)
            }
        </>
    );
}