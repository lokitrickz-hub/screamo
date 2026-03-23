"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft, ChevronLeft, ChevronRight, RefreshCw, CheckCircle2, XCircle, Clock, Loader2,
} from "lucide-react";
import Link from "next/link";

interface Payment {
  id: string;
  member_id: string;
  month: number;
  year: number;
  amount: number;
  status: "unpaid" | "pending" | "paid" | "failed";
  paid_at: string | null;
  members: {
    first_name: string;
    last_name: string;
    groups: { name: string };
  };
}

const MONTH_NAMES = [
  "", "Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec",
  "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień",
];

const STATUS_CONFIG = {
  paid: { label: "Opłacone", icon: CheckCircle2, color: "text-green-400", bg: "bg-green-500/10 border-green-500/30" },
  unpaid: { label: "Nieopłacone", icon: XCircle, color: "text-red-400", bg: "bg-red-500/10 border-red-500/30" },
  pending: { label: "W trakcie", icon: Clock, color: "text-yellow-400", bg: "bg-yellow-500/10 border-yellow-500/30" },
  failed: { label: "Błąd", icon: XCircle, color: "text-red-400", bg: "bg-red-500/10 border-red-500/30" },
};

export default function PlatnosciPage() {
  const now = new Date();
  const [month, setMonth] = useState(now.getMonth() + 1);
  const [year, setYear] = useState(now.getFullYear());
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const router = useRouter();

  const fetchPayments = useCallback(async () => {
    setLoading(true);
    const res = await fetch(`/api/admin/payments?month=${month}&year=${year}`);
    if (res.status === 401) {
      router.push("/admin/login");
      return;
    }
    const data = await res.json();
    setPayments(Array.isArray(data) ? data : []);
    setLoading(false);
  }, [month, year, router]);

  useEffect(() => {
    fetchPayments();
  }, [fetchPayments]);

  function prevMonth() {
    if (month === 1) { setMonth(12); setYear(year - 1); }
    else setMonth(month - 1);
  }

  function nextMonth() {
    if (month === 12) { setMonth(1); setYear(year + 1); }
    else setMonth(month + 1);
  }

  async function generatePayments() {
    if (!confirm(`Wygenerować płatności na ${MONTH_NAMES[month]} ${year} dla wszystkich aktywnych członków?`)) return;
    setGenerating(true);
    await fetch("/api/admin/payments/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ month, year }),
    });
    setGenerating(false);
    fetchPayments();
  }

  const paid = payments.filter((p) => p.status === "paid");
  const unpaid = payments.filter((p) => p.status === "unpaid");
  const pending = payments.filter((p) => p.status === "pending");

  return (
    <div className="min-h-screen bg-[var(--color-navy)]">
      {/* Top bar */}
      <div className="bg-[var(--color-navy-light)] border-b border-[var(--color-purple)]/20 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/admin" className="text-[var(--color-gray-400)] hover:text-[var(--color-yellow)] transition-colors">
              <ArrowLeft size={18} />
            </Link>
            <span className="font-[var(--font-heading)] text-base text-white">Płatności</span>
          </div>
          <button
            onClick={generatePayments}
            disabled={generating}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-purple)]
                     text-white font-[var(--font-accent)] text-xs font-bold tracking-wider
                     hover:bg-[var(--color-purple-light)] disabled:opacity-50 transition-colors"
          >
            {generating ? <Loader2 size={14} className="animate-spin" /> : <RefreshCw size={14} />}
            Generuj miesiąc
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-6">
        {/* Month selector */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button onClick={prevMonth} className="p-2 rounded-lg text-[var(--color-gray-400)] hover:text-white transition-colors">
            <ChevronLeft size={20} />
          </button>
          <h2 className="font-[var(--font-heading)] text-xl text-white min-w-[200px] text-center">
            {MONTH_NAMES[month]} {year}
          </h2>
          <button onClick={nextMonth} className="p-2 rounded-lg text-[var(--color-gray-400)] hover:text-white transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-center">
            <div className="font-[var(--font-heading)] text-2xl text-green-400">{paid.length}</div>
            <div className="font-[var(--font-accent)] text-[10px] tracking-wider uppercase text-green-400/70">Opłacone</div>
          </div>
          <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-center">
            <div className="font-[var(--font-heading)] text-2xl text-red-400">{unpaid.length}</div>
            <div className="font-[var(--font-accent)] text-[10px] tracking-wider uppercase text-red-400/70">Nieopłacone</div>
          </div>
          <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-center">
            <div className="font-[var(--font-heading)] text-2xl text-yellow-400">{pending.length}</div>
            <div className="font-[var(--font-accent)] text-[10px] tracking-wider uppercase text-yellow-400/70">W trakcie</div>
          </div>
        </div>

        {/* Payment list */}
        {loading ? (
          <div className="flex justify-center py-16">
            <div className="w-8 h-8 border-2 border-[var(--color-yellow)] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : payments.length > 0 ? (
          <div className="rounded-2xl bg-[var(--color-navy-light)] border-2 border-[var(--color-purple)]/20 overflow-hidden">
            <div className="divide-y divide-[var(--color-purple)]/10">
              {payments.map((p) => {
                const cfg = STATUS_CONFIG[p.status];
                const StatusIcon = cfg.icon;
                return (
                  <div key={p.id} className="flex items-center justify-between px-5 py-4">
                    <div className="min-w-0">
                      <span className="font-[var(--font-body)] text-sm text-white font-medium">
                        {p.members.first_name} {p.members.last_name}
                      </span>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="font-[var(--font-accent)] text-[10px] tracking-wider uppercase text-[var(--color-purple-light)]">
                          {p.members.groups.name}
                        </span>
                        {p.paid_at && (
                          <span className="font-[var(--font-body)] text-[10px] text-[var(--color-gray-500)]">
                            {new Date(p.paid_at).toLocaleDateString("pl-PL")}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {p.amount > 0 && (
                        <span className="font-[var(--font-heading)] text-sm text-white">
                          {(p.amount / 100).toFixed(0)} zł
                        </span>
                      )}
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px]
                                      font-[var(--font-accent)] font-bold tracking-wider uppercase ${cfg.bg} ${cfg.color}`}>
                        <StatusIcon size={12} />
                        {cfg.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="rounded-2xl bg-[var(--color-navy-light)] border-2 border-[var(--color-purple)]/20 px-5 py-16 text-center">
            <p className="font-[var(--font-body)] text-sm text-[var(--color-gray-500)] mb-4">
              Brak płatności na {MONTH_NAMES[month]} {year}
            </p>
            <button
              onClick={generatePayments}
              disabled={generating}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[var(--color-yellow)]
                       text-[var(--color-navy)] font-[var(--font-accent)] text-xs font-bold
                       hover:bg-[var(--color-yellow-dark)] transition-colors"
            >
              Wygeneruj płatności na ten miesiąc
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
