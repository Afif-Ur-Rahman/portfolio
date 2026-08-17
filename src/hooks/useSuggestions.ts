"use client";

import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { useAdminStore, useVisitorStore } from "@/store";
import { ADMIN_ACCESS } from "@/constants";

export type Suggestion = {
  _id: string;
  name?: string;
  message: string;
  visitorId: string;
  reply?: string;
  repliedAt?: string;
  createdAt: string;
};

const VISIBLE_COUNT = 3;

export const useSuggestions = () => {
  const { visitorId } = useVisitorStore();
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [editingSuggestion, setEditingSuggestion] = useState<Suggestion | null>(
    null,
  );
  const [showAll, setShowAll] = useState(false);

  const { secret } = useAdminStore();
  const searchParams = useSearchParams();
  const isAdmin = searchParams.has(ADMIN_ACCESS);

  const fetchSuggestions = useCallback(async () => {
    try {
      const res = await fetch("/api/suggestions");
      const json = await res.json();
      if (json.success) setSuggestions(json.data);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSuggestions();
  }, [fetchSuggestions]);

  const submitSuggestion = async (name: string, message: string) => {
    const res = await fetch("/api/suggestions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, message }),
    });
    const json = await res.json();
    if (json.success) {
      setSuggestions((prev) => [json.data, ...prev]);
    }
    return json;
  };

  const replyToSuggestion = async (id: string, reply: string) => {
    const res = await fetch(`/api/suggestions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "x-admin-secret": secret || "",
      },
      body: JSON.stringify({ reply }),
    });
    const json = await res.json();
    if (json.success) {
      setSuggestions((prev) =>
        prev.map((s) =>
          s._id === id
            ? { ...s, reply, repliedAt: new Date().toISOString() }
            : s,
        ),
      );
      setActiveId(null);
    }
    return json;
  };

  const updateSuggestion = async (id: string, message: string) => {
    const res = await fetch(`/api/suggestions/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
    const json = await res.json();
    if (json.success) {
      setSuggestions((prev) =>
        prev.map((s) => (s._id === id ? { ...s, message } : s)),
      );
      setEditingSuggestion(null);
    }
    return json;
  };

  const deleteSuggestion = async (id: string) => {
    const res = await fetch(`/api/suggestions/${id}`, {
      method: "DELETE",
      headers: { "x-admin-secret": secret || "" },
    });
    const json = await res.json();
    if (json.success) {
      setSuggestions((prev) => prev.filter((s) => s._id !== id));
      if (editingSuggestion?._id === id) setEditingSuggestion(null);
    }
    return json;
  };

  const startEdit = (suggestion: Suggestion) =>
    setEditingSuggestion(suggestion);
  const cancelEdit = () => setEditingSuggestion(null);

  const toggleShowAll = () => setShowAll((prev) => !prev);

  const visibleSuggestions = showAll
    ? suggestions
    : suggestions.slice(0, VISIBLE_COUNT);
  const hasMore = suggestions.length > VISIBLE_COUNT;

  return {
    suggestions,
    visibleSuggestions,
    hasMore,
    isLoading,
    isAdmin,
    visitorId,
    activeId,
    setActiveId,
    editingSuggestion,
    startEdit,
    cancelEdit,
    showAll,
    toggleShowAll,
    submitSuggestion,
    updateSuggestion,
    replyToSuggestion,
    deleteSuggestion,
  };
};
