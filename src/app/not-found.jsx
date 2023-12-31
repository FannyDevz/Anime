"use client"
import {FileSearch} from "@phosphor-icons/react";
import Link from "next/link";
import {useRouter} from "next/navigation";

const NotFound = () => {
    const router = useRouter();

    return (
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-4">
                <FileSearch className="text-color-accent " size={120} />
                <h3 className="text-4xl font-bold text-color-accent "> NOT FOUND</h3>
                <button className="text-color-primary hover:text-color-accent transition-all underline"  onClick={() => router.back()}>
                    Back
                </button>
            </div>
        </div>
    )
}
export default NotFound