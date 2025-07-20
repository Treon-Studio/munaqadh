"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [whatsapp, setWhatsapp] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    // Mock registration: just redirect to login with pre-filled creds
    if (!whatsapp || !password) {
      setError("WhatsApp and password are required");
      return;
    }
    // In real app, save to DB. Here, just go to login
    router.push(`/sign-in?whatsapp=${encodeURIComponent(whatsapp)}&password=${encodeURIComponent(password)}&role=${role}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm" onSubmit={handleRegister}>
        <h2 className="text-2xl font-bold mb-6 text-center">Register (Mock)</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">WhatsApp</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            type="tel"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Role</label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            value={role}
            onChange={e => setRole(e.target.value)}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          type="submit"
        >
          Register
        </button>
        <div className="mt-4 text-center">
          <span>Already have an account? </span>
          <a className="text-blue-600 hover:underline" href="/sign-in">Login</a>
        </div>
      </form>
    </div>
  );
}
