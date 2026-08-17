"use client";

import { useEffect, useState, useCallback } from "react";
import { useAdminStore } from "@/store";

export type Suggestion = {
  _id: string;
  name?: string;
  message: string;
  visitorId: string;
  reply?: string;
  repliedAt?: string;
  createdAt: string;
};

export const useSuggestions = () => {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeId, setActiveId] = useState<string | null>(null);
  const { secret } = useAdminStore();

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
    }
    return json;
  };

  return {
    suggestions,
    isLoading,
    activeId,
    setActiveId,
    submitSuggestion,
    replyToSuggestion,
    updateSuggestion,
    deleteSuggestion,
  };
};
