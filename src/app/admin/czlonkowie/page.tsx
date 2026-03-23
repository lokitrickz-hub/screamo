"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft, Plus, Search, X, Edit2, Trash2, UserCheck, UserX,
} from "lucide-react";
import Link from "next/link";

interface Group {
  id: string;
  name: string;
  age_range: string;
}

interface Member {
  id: string;
  first_name: string;
  last_name: string;
  group_id: string;
  parent_name: string | null;
  parent_email: string | null;
  parent_phone: string | null;
  is_active: boolean;
  groups: { name: string; age_range: string };
}

const EMPTY_FORM = {
  first_name: "",
  last_name: "",
  group_id: "",
  parent_name: "",
  parent_email: "",
  parent_phone: "",
};

export default function CzlonkowiePage() {
  const [members, setMembers] = useState<Member[]>([]);
  const [groups, setGroups] = useState<Group[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterGroup, setFilterGroup] = useState("all");
  const [showInactive, setShowInactive] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  const fetchData = useCallback(async () => {
    const [membersRes, groupsRes] = await Promise.all([
      fetch("/api/admin/members"),
      fetch("/api/admin/groups"),
    ]);

    if (membersRes.status === 401) {
      router.push("/admin/login");
      return;
    }

    const membersData = await membersRes.json();
    setMembers(Array.isArray(membersData) ? membersData : []);

    if (groupsRes.ok) {
      const groupsData = await groupsRes.json();
      setGroups(Array.isArray(groupsData) ? groupsData : []);
    }

    setLoading(false);
  }, [router]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  function openAdd() {
    setEditingId(null);
    setForm(EMPTY_FORM);
    setModalOpen(true);
  }

  function openEdit(m: Member) {
    setEditingId(m.id);
    setForm({
      first_name: m.first_name,
      last_name: m.last_name,
      group_id: m.group_id,
      parent_name: m.parent_name || "",
      parent_email: m.parent_email || "",
      parent_phone: m.parent_phone || "",
    });
    setModalOpen(true);
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);

    const url = editingId ? `/api/admin/members/${editingId}` : "/api/admin/members";
    const method = editingId ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setSaving(false);
    setModalOpen(false);
    fetchData();
  }

  async function handleDelete(id: string, name: string) {
    if (!confirm(`Dezaktywować ${name}?`)) return;
    await fetch(`/api/admin/members/${id}`, { method: "DELETE" });
    fetchData();
  }

  async function handleReactivate(id: string) {
    await fetch(`/api/admin/members/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ is_active: true }),
    });
    fetchData();
  }

  const filtered = members.filter((m) => {
    if (!showInactive && !m.is_active) return false;
    if (filterGroup !== "all" && m.group_id !== filterGroup) return false;
    if (search) {
      const q = search.toLowerCase();
      return (
        m.first_name.toLowerCase().includes(q) ||
        m.last_name.toLowerCase().includes(q) ||
        (m.parent_name && m.parent_name.toLowerCase().includes(q))
      );
    }
    return true;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--color-navy)] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[var(--color-yellow)] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-navy)]">
      {/* Top bar */}
      <div className="bg-[var(--color-navy-light)] border-b border-[var(--color-purple)]/20 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/admin" className="text-[var(--color-gray-400)] hover:text-[var(--color-yellow)] transition-colors">
              <ArrowLeft size={18} />
            </Link>
            <span className="font-[var(--font-heading)] text-base text-white">Członkowie</span>
          </div>
          <button
            onClick={openAdd}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-yellow)]
                     text-[var(--color-navy)] font-[var(--font-accent)] text-xs font-bold tracking-wider
                     hover:bg-[var(--color-yellow-dark)] transition-colors"
          >
            <Plus size={14} />
            Dodaj
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-6">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-gray-500)]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Szukaj..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[var(--color-navy-light)] border-2 border-[var(--color-purple)]/20
                       text-white font-[var(--font-body)] text-sm focus:border-[var(--color-yellow)] focus:outline-none
                       transition-colors placeholder:text-[var(--color-gray-500)]"
            />
          </div>
          <select
            value={filterGroup}
            onChange={(e) => setFilterGroup(e.target.value)}
            className="px-4 py-2.5 rounded-xl bg-[var(--color-navy-light)] border-2 border-[var(--color-purple)]/20
                     text-white font-[var(--font-body)] text-sm focus:border-[var(--color-yellow)] focus:outline-none"
          >
            <option value="all">Wszystkie grupy</option>
            {groups.map((g) => (
              <option key={g.id} value={g.id}>{g.name}</option>
            ))}
          </select>
          <label className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--color-navy-light)]
                          border-2 border-[var(--color-purple)]/20 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={showInactive}
              onChange={(e) => setShowInactive(e.target.checked)}
              className="accent-[var(--color-yellow)]"
            />
            <span className="font-[var(--font-body)] text-xs text-[var(--color-gray-400)]">Nieaktywni</span>
          </label>
        </div>

        {/* Count */}
        <p className="font-[var(--font-accent)] text-[11px] text-[var(--color-gray-500)] tracking-wider uppercase mb-4">
          {filtered.length} {filtered.length === 1 ? "członek" : "członków"}
        </p>

        {/* Members list */}
        <div className="rounded-2xl bg-[var(--color-navy-light)] border-2 border-[var(--color-purple)]/20 overflow-hidden">
          {filtered.length > 0 ? (
            <div className="divide-y divide-[var(--color-purple)]/10">
              {filtered.map((m) => (
                <div key={m.id} className={`flex items-center justify-between px-5 py-4 ${!m.is_active ? "opacity-50" : ""}`}>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-[var(--font-body)] text-sm text-white font-medium">
                        {m.first_name} {m.last_name}
                      </span>
                      {!m.is_active && (
                        <span className="font-[var(--font-accent)] text-[9px] px-1.5 py-0.5 rounded bg-red-500/20 text-red-400 uppercase">
                          Nieaktywny
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 mt-0.5">
                      <span className="font-[var(--font-accent)] text-[10px] tracking-wider uppercase text-[var(--color-purple-light)]">
                        {m.groups?.name}
                      </span>
                      {m.parent_phone && (
                        <span className="font-[var(--font-body)] text-[11px] text-[var(--color-gray-500)]">
                          {m.parent_phone}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {!m.is_active ? (
                      <button
                        onClick={() => handleReactivate(m.id)}
                        className="p-2 rounded-lg text-green-400 hover:bg-green-500/10 transition-colors"
                        title="Reaktywuj"
                      >
                        <UserCheck size={16} />
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={() => openEdit(m)}
                          className="p-2 rounded-lg text-[var(--color-gray-400)] hover:text-[var(--color-yellow)]
                                   hover:bg-[var(--color-yellow)]/10 transition-colors"
                          title="Edytuj"
                        >
                          <Edit2 size={14} />
                        </button>
                        <button
                          onClick={() => handleDelete(m.id, `${m.first_name} ${m.last_name}`)}
                          className="p-2 rounded-lg text-[var(--color-gray-400)] hover:text-red-400
                                   hover:bg-red-500/10 transition-colors"
                          title="Dezaktywuj"
                        >
                          <UserX size={14} />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="px-5 py-10 text-center">
              <span className="font-[var(--font-body)] text-sm text-[var(--color-gray-500)]">
                {search ? "Brak wyników wyszukiwania" : "Brak członków. Kliknij \"Dodaj\" aby rozpocząć."}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-6">
          <div className="w-full max-w-md bg-[var(--color-navy-light)] border-2 border-[var(--color-purple)]/30
                        rounded-2xl p-6 relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-[var(--color-gray-400)] hover:text-white transition-colors"
            >
              <X size={18} />
            </button>

            <h3 className="font-[var(--font-heading)] text-lg text-white mb-6">
              {editingId ? "Edytuj członka" : "Nowy członek"}
            </h3>

            <form onSubmit={handleSave} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  value={form.first_name}
                  onChange={(e) => setForm({ ...form, first_name: e.target.value })}
                  placeholder="Imię *"
                  required
                  className="px-3 py-2.5 rounded-xl bg-[var(--color-navy)] border-2 border-[var(--color-purple)]/20
                           text-white font-[var(--font-body)] text-sm focus:border-[var(--color-yellow)] focus:outline-none
                           placeholder:text-[var(--color-gray-500)]"
                />
                <input
                  type="text"
                  value={form.last_name}
                  onChange={(e) => setForm({ ...form, last_name: e.target.value })}
                  placeholder="Nazwisko *"
                  required
                  className="px-3 py-2.5 rounded-xl bg-[var(--color-navy)] border-2 border-[var(--color-purple)]/20
                           text-white font-[var(--font-body)] text-sm focus:border-[var(--color-yellow)] focus:outline-none
                           placeholder:text-[var(--color-gray-500)]"
                />
              </div>

              <select
                value={form.group_id}
                onChange={(e) => setForm({ ...form, group_id: e.target.value })}
                required
                className="w-full px-3 py-2.5 rounded-xl bg-[var(--color-navy)] border-2 border-[var(--color-purple)]/20
                         text-white font-[var(--font-body)] text-sm focus:border-[var(--color-yellow)] focus:outline-none"
              >
                <option value="">Wybierz grupę *</option>
                {groups.map((g) => (
                  <option key={g.id} value={g.id}>{g.name} ({g.age_range})</option>
                ))}
              </select>

              <div className="border-t border-[var(--color-purple)]/10 pt-4">
                <p className="font-[var(--font-accent)] text-[10px] tracking-wider uppercase text-[var(--color-gray-500)] mb-3">
                  Dane rodzica / opiekuna
                </p>
                <div className="space-y-3">
                  <input
                    type="text"
                    value={form.parent_name}
                    onChange={(e) => setForm({ ...form, parent_name: e.target.value })}
                    placeholder="Imię i nazwisko rodzica"
                    className="w-full px-3 py-2.5 rounded-xl bg-[var(--color-navy)] border-2 border-[var(--color-purple)]/20
                             text-white font-[var(--font-body)] text-sm focus:border-[var(--color-yellow)] focus:outline-none
                             placeholder:text-[var(--color-gray-500)]"
                  />
                  <input
                    type="email"
                    value={form.parent_email}
                    onChange={(e) => setForm({ ...form, parent_email: e.target.value })}
                    placeholder="Email rodzica"
                    className="w-full px-3 py-2.5 rounded-xl bg-[var(--color-navy)] border-2 border-[var(--color-purple)]/20
                             text-white font-[var(--font-body)] text-sm focus:border-[var(--color-yellow)] focus:outline-none
                             placeholder:text-[var(--color-gray-500)]"
                  />
                  <input
                    type="tel"
                    value={form.parent_phone}
                    onChange={(e) => setForm({ ...form, parent_phone: e.target.value })}
                    placeholder="Telefon rodzica"
                    className="w-full px-3 py-2.5 rounded-xl bg-[var(--color-navy)] border-2 border-[var(--color-purple)]/20
                             text-white font-[var(--font-body)] text-sm focus:border-[var(--color-yellow)] focus:outline-none
                             placeholder:text-[var(--color-gray-500)]"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={saving || !form.first_name || !form.last_name || !form.group_id}
                className="w-full py-3 rounded-xl bg-[var(--color-yellow)] text-[var(--color-navy)]
                         font-[var(--font-heading)] text-sm tracking-wider
                         hover:bg-[var(--color-yellow-dark)] disabled:opacity-50 transition-all"
              >
                {saving ? "Zapisywanie..." : editingId ? "ZAPISZ ZMIANY" : "DODAJ CZŁONKA"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
