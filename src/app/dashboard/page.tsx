"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Dashboard() {

    const router = useRouter();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (isLoggedIn !== "true") {
            router.replace("/"); // redirect to login
        }
    }, [router]);
    return (
        <div className="h-screen flex items-center justify-center bg-green-100">
            <h1 className="text-4xl font-bold text-gray-800">Hello 👋 You are logged in!</h1>
        </div>
    );
}
// src/app/dashboard/page.tsx  
