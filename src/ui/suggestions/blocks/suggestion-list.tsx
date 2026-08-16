"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { MessageSquareText, ChevronDown } from "lucide-react";
import { Avatar } from "@radix-ui/themes";
import { EmptyComponent } from "@/components";
import type { Suggestion } from "@/hooks";
import { AdminControls } from "./admin-controls";
import { getInitials } from "@/utils";
import { SuggestionCardSkeleton } from "./skeleton";

type SuggestionListProps = {
  suggestions: Suggestion[];
  isLoading: boolean;
  activeId: string | null;
  setActiveId: (id: string | null) => void;
  onReply: (id: string, reply: string) => void;
  onDelete: (id: string) => void;
};

const VISIBLE_COUNT = 3;

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
  const [showAll, setShowAll] = useState(false);

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(VISIBLE_COUNT)].map((_, i) => (
          <SuggestionCardSkeleton key={i} withReply={i % 2 === 1} />
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

  const visibleSuggestions = showAll
    ? suggestions
    : suggestions.slice(0, VISIBLE_COUNT);
  const hasMore = suggestions.length > VISIBLE_COUNT;

  return (
    <div className="space-y-4">
      {visibleSuggestions.map((s) => (
        <div
          key={s._id}
          id={`suggestion-${s._id}`}
          className="rounded-xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:border-[#DAB025]"
        >
          <div className="flex items-center gap-3">
            <Avatar
              size="4"
              radius="full"
              fallback={getInitials(s.name)}
              color="gold"
              variant="soft"
            />

            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-semibold text-[#0A4A8A]">
                  {s.name}
                </span>
                <span className="shrink-0 text-xs text-gray-400">
                  {new Date(s.createdAt).toLocaleDateString()}
                </span>
              </div>

              <p className="mt-1.5 text-sm text-gray-600">{s.message}</p>
            </div>
          </div>

          {s.reply && (
            <div className="mt-3 rounded-lg border-l-2 border-[#DAB025] bg-[#DAB025]/5 px-3 py-2">
              <span className="text-xs font-semibold text-[#DAB025]">
                Owner:
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

      {hasMore && (
        <button
          type="button"
          onClick={() => setShowAll((prev) => !prev)}
          className="mx-auto flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-[#0A4A8A] transition-all hover:border-[#DAB025] hover:text-[#DAB025]"
        >
          {showAll
            ? "Show less"
            : `See more (${suggestions.length - VISIBLE_COUNT})`}
          <ChevronDown
            size={15}
            className={`transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
          />
        </button>
      )}
    </div>
  );
};
