"use client";
import Composer from "@/features/composer";
import { AnimatePresence, motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useRef } from "react";
import ons from "onsenui"
import { AlertDialog } from "react-onsenui";
const ComposerModalNewPost = () => {

    const overlayref = useRef<HTMLDivElement>(null);
    const modalRef = useRef<HTMLDivElement>(null)
    const router = useRouter()

    useLayoutEffect(() => {
        if (!overlayref.current) return;
        function triggerOutside(e: MouseEvent) {
            if (overlayref.current && modalRef.current && !modalRef.current?.contains(e.target as Node)) {
               ons.notification.confirm("Apakah anda yakin? semua post yang telah di tulis hilang").then((val)=>{
                    if( val ){
                        router.back();
                    }
               })
            };

        }

        overlayref.current.addEventListener("click", triggerOutside)
        return () => {
            overlayref.current?.removeEventListener("click", triggerOutside);
        }
    }, [modalRef, overlayref])
    return <>
        <AnimatePresence>
            <div ref={overlayref} className="max-w-screen py-3  min-h-screen mx-auto bg-beetweet-dark-backdrop-background fixed top-0 left-0 right-0 bottom-0">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 50 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    ref={modalRef}
                    className="max-w-sm lg:max-w-md lg:min-w-sm min-w-xs border border-primary-outline rounded-md bg-background  mx-auto">
                    <div className="flex border-b border-primary-outline items-center  px-4 py-2">
                        <button className="bg-background-messenger text-sm cursor-pointer">Cancel</button>
                        <div className="font-semibold text-sm md:text-md text-text-secondary mx-auto">New Post</div>
                        <button className="bg-background-messenger text-sm cursor-pointer">Save</button>
                    </div>
                    <Composer />
                </motion.div>
            </div>
        </AnimatePresence>
        <AlertDialog  />
    </>
}
export default ComposerModalNewPost;