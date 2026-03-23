"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  Users, CreditCard, AlertTriangle, TrendingUp,
  UserPlus, Receipt, LogOut, ChevronRight,
} from "lucide-react";
import Link from "next/link";

interface Stats {
  totalMembers: number;
  currentMonth: {
    month: number;
    year: number;
    paid: number;
    unpaid: number;
    totalPaidAmount: number;
  };
  recentPayments: Array<{
    id: string;
    amount: number;
    paid_at: string;
    members: { first_name: string; last_name: string; groups: { name: string } };
  }>;
}

const MONTH_NAMES = [
  "", "Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec",
  "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień",
];

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchStats = useCallback(async () => {
    const res = await fetch("/api/admin/stats");
    if (res.status === 401) {
      router.push("/admin/login");
      return;
    }
    const data = await res.json();
    setStats(data);
    setLoading(false);
  }, [router]);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--color-navy)] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[var(--color-yellow)] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const cm = stats?.currentMonth;

  return (
    <div className="min-h-screen bg-[var(--color-navy)]">
      {/* Top bar */}
      <div className="bg-[var(--color-navy-light)] border-b border-[var(--color-purple)]/20 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-[var(--font-heading)] text-sm text-white">
              SCREAMO<span className="text-[var(--color-yellow)]">TRICKZ</span>
            </span>
            <span className="font-[var(--font-accent)] text-[10px] tracking-wider uppercase
                           bg-[var(--color-purple)]/20 text-[var(--color-purple-light)] px-2 py-0.5 rounded-full">
              Admin
            </span>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 font-[var(--font-accent)] text-xs text-[var(--color-gray-400)]
                     hover:text-[var(--color-yellow)] transition-colors"
          >
            <LogOut size={14} />
            Wyloguj
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Navigation cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <Link
            href="/admin/czlonkowie"
            className="flex items-center justify-between p-5 rounded-2xl bg-[var(--color-navy-light)]
                     border-2 border-[var(--color-purple)]/30 hover:border-[var(--color-yellow)]
                     transition-all duration-300 group"
          >
            <div className="flex items-center gap-3">
              <UserPlus size={20} className="text-[var(--color-yellow)]" />
              <div>
                <span className="font-[var(--font-heading)] text-base text-white block">Członkowie</span>
                <span className="font-[var(--font-body)] text-xs text-[var(--color-gray-400)]">
                  Zarządzaj zawodnikami
                </span>
              </div>
            </div>
            <ChevronRight size={18} className="text-[var(--color-gray-500)] group-hover:text-[var(--color-yellow)] transition-colors" />
          </Link>

          <Link
            href="/admin/platnosci"
            className="flex items-center justify-between p-5 rounded-2xl bg-[var(--color-navy-light)]
                     border-2 border-[var(--color-purple)]/30 hover:border-[var(--color-yellow)]
                     transition-all duration-300 group"
          >
            <div className="flex items-center gap-3">
              <Receipt size={20} className="text-[var(--color-yellow)]" />
              <div>
                <span className="font-[var(--font-heading)] text-base text-white block">Płatności</span>
                <span className="font-[var(--font-body)] text-xs text-[var(--color-gray-400)]">
                  Kontroluj opłaty
                </span>
              </div>
            </div>
            <ChevronRight size={18} className="text-[var(--color-gray-500)] group-hover:text-[var(--color-yellow)] transition-colors" />
          </Link>
        </div>

        {/* Stats */}
        <h2 className="font-[var(--font-heading)] text-lg text-white mb-4">
          {MONTH_NAMES[cm?.month || 1]} {cm?.year}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="p-5 rounded-2xl bg-[var(--color-navy-light)] border-2 border-[var(--color-purple)]/20">
            <Users size={18} className="text-[var(--color-purple-light)] mb-2" />
            <div className="font-[var(--font-heading)] text-3xl text-white">{stats?.totalMembers || 0}</div>
            <div className="font-[var(--font-accent)] text-[10px] tracking-wider uppercase text-[var(--color-gray-400)]">
              Aktywnych członków
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[var(--color-navy-light)] border-2 border-green-500/20">
            <CreditCard size={18} className="text-green-400 mb-2" />
            <div className="font-[var(--font-heading)] text-3xl text-green-400">{cm?.paid || 0}</div>
            <div className="font-[var(--font-accent)] text-[10px] tracking-wider uppercase text-[var(--color-gray-400)]">
              Opłaconych
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[var(--color-navy-light)] border-2 border-red-500/20">
            <AlertTriangle size={18} className="text-red-400 mb-2" />
            <div className="font-[var(--font-heading)] text-3xl text-red-400">{cm?.unpaid || 0}</div>
            <div className="font-[var(--font-accent)] text-[10px] tracking-wider uppercase text-[var(--color-gray-400)]">
              Zalegających
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[var(--color-navy-light)] border-2 border-[var(--color-yellow)]/20">
            <TrendingUp size={18} className="text-[var(--color-yellow)] mb-2" />
            <div className="font-[var(--font-heading)] text-3xl text-[var(--color-yellow)]">
              {((cm?.totalPaidAmount || 0) / 100).toFixed(0)} zł
            </div>
            <div className="font-[var(--font-accent)] text-[10px] tracking-wider uppercase text-[var(--color-gray-400)]">
              Wpływy w miesiącu
            </div>
          </div>
        </div>

        {/* Recent payments */}
        <h2 className="font-[var(--font-heading)] text-lg text-white mb-4">Ostatnie wpłaty</h2>
        <div className="rounded-2xl bg-[var(--color-navy-light)] border-2 border-[var(--color-purple)]/20 overflow-hidden">
          {stats?.recentPayments && stats.recentPayments.length > 0 ? (
            <div className="divide-y divide-[var(--color-purple)]/10">
              {stats.recentPayments.map((p) => (
                <div key={p.id} className="flex items-center justify-between px-5 py-3">
                  <div>
                    <span className="font-[var(--font-body)] text-sm text-white">
                      {p.members.first_name} {p.members.last_name}
                    </span>
                    <span className="font-[var(--font-accent)] text-[10px] text-[var(--color-gray-500)] ml-2">
                      {p.members.groups.name}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-[var(--font-heading)] text-sm text-green-400">
                      {(p.amount / 100).toFixed(0)} zł
                    </span>
                    <span className="font-[var(--font-body)] text-[10px] text-[var(--color-gray-500)] block">
                      {new Date(p.paid_at).toLocaleDateString("pl-PL")}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="px-5 py-8 text-center">
              <span className="font-[var(--font-body)] text-sm text-[var(--color-gray-500)]">
                Brak wpłat w tym miesiącu
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
