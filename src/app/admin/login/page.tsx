"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, AlertCircle } from "lucide-react";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok) {
        router.push("/admin");
      } else {
        setError(data.error || "Błąd logowania");
      }
    } catch {
      setError("Błąd połączenia z serwerem");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[var(--color-navy)] flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full
                        bg-[var(--color-purple)]/20 border-2 border-[var(--color-purple)]/40 mb-4">
            <Lock size={28} className="text-[var(--color-yellow)]" />
          </div>
          <h1 className="font-[var(--font-heading)] text-2xl text-white">
            PANEL <span className="text-[var(--color-yellow)]">ADMINA</span>
          </h1>
          <p className="font-[var(--font-body)] text-sm text-[var(--color-gray-400)] mt-2">
            UKS ScreamoTrickz
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Hasło"
              className="w-full px-4 py-3 rounded-xl bg-[var(--color-navy-light)] border-2 border-[var(--color-purple)]/30
                       text-white font-[var(--font-body)] text-sm
                       focus:border-[var(--color-yellow)] focus:outline-none transition-colors
                       placeholder:text-[var(--color-gray-500)]"
              autoFocus
            />
          </div>

          {error && (
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/30">
              <AlertCircle size={14} className="text-red-400 flex-shrink-0" />
              <span className="font-[var(--font-body)] text-sm text-red-400">{error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !password}
            className="w-full py-3 rounded-xl bg-[var(--color-yellow)] text-[var(--color-navy)]
                     font-[var(--font-heading)] text-sm tracking-wider
                     hover:bg-[var(--color-yellow-dark)] disabled:opacity-50
                     transition-all duration-300"
          >
            {loading ? "Logowanie..." : "ZALOGUJ"}
          </button>
        </form>
      </div>
    </div>
  );
}
