"use client";

import { useSearchParams } from "next/navigation";
import { MessageSquareText } from "lucide-react";
import { Skeleton, EmptyComponent } from "@/components";
import type { Suggestion } from "@/hooks";
import { AdminControls } from "./admin-controls";

type SuggestionListProps = {
  suggestions: Suggestion[];
  isLoading: boolean;
  activeId: string | null;
  setActiveId: (id: string | null) => void;
  onReply: (id: string, reply: string) => void;
  onDelete: (id: string) => void;
};

export const SuggestionList = ({
  suggestions,
  isLoading,
  activeId,
  setActiveId,
  onReply,
  onDelete,
}: SuggestionListProps) => {
  const searchParams = useSearchParams();
  const isAdmin = searchParams.has("admin");

  if (isLoading) {
    return (
      <div className="space-y-3">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} />
        ))}
      </div>
    );
  }

  if (!suggestions.length) {
    return (
      <EmptyComponent
        icon={MessageSquareText}
        heading="No suggestions yet"
        description="Be the first to share your feedback."
        variant="light"
      />
    );
  }

  return (
    <div className="space-y-4">
      {suggestions.map((s) => (
        <div
          key={s._id}
          id={`suggestion-${s._id}`}
          className="rounded-xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:border-[#DAB025]"
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-[#0A4A8A]">
              {s.name || "Anonymous"}
            </span>
            <span className="text-xs text-gray-400">
              {new Date(s.createdAt).toLocaleDateString()}
            </span>
          </div>

          <p className="mt-1.5 text-sm text-gray-600">{s.message}</p>

          {s.reply && (
            <div className="mt-3 rounded-lg border-l-2 border-[#DAB025] bg-[#DAB025]/5 px-3 py-2">
              <span className="text-xs font-semibold text-[#DAB025]">
                Afif replied:
              </span>
              <p className="mt-1 text-sm text-[#09113F]">{s.reply}</p>
            </div>
          )}

          {isAdmin && (
            <AdminControls
              suggestionId={s._id}
              isOpen={activeId === s._id}
              onToggle={() => setActiveId(activeId === s._id ? null : s._id)}
              onReply={onReply}
              onDelete={onDelete}
            />
          )}
        </div>
      ))}
    </div>
  );
};
