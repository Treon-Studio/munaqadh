"use client";

import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SignInPage() {
    const router = useRouter();
    const params = useSearchParams();
    const [whatsapp, setWhatsapp] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        // Pre-fill from register redirect
        if (params.get("whatsapp")) setWhatsapp(params.get("whatsapp") || "");
        if (params.get("password")) setPassword(params.get("password") || "");
    }, [params]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        const res = await signIn("credentials", {
            redirect: false,
            whatsapp,
            password,
        });
        if (res?.ok) {
            // Redirection handled by middleware
            return;
        } else {
            setError("Invalid WhatsApp or password");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <Card>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm" onSubmit={handleLogin}>
                    <h2 className="text-2xl font-bold mb-6 text-center">Login (Mock)</h2>
                    <div className="mb-4">
                        <Label className="block text-gray-700 text-sm font-bold mb-2">WhatsApp</Label>
                        <Input
                            type="tel"
                            value={whatsapp}
                            onChange={e => setWhatsapp(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <Label className="block text-gray-700 text-sm font-bold mb-2">Password</Label>
                        <Input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}
                    <Button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                        type="submit"
                    >
                        Login
                    </Button>
                    <div className="mt-4 text-center">
                        <span>Don't have an account? </span>
                        <a className="text-blue-600 hover:underline" href="/register">Register</a>
                    </div>
                </form>
            </Card>
            <div className="mt-8 p-6 bg-gray-100 border-2 border-gray-300 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Akun Demo:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base text-gray-700">
                    <div>
                        <p className="font-medium">Admin:</p>
                        <p>08123456789 / mockpassword</p>
                    </div>
                    <div>
                        <p className="font-medium">User:</p>
                        <p>08129876543 / mockuser</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
