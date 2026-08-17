"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  MessageSquareText,
  ChevronDown,
  Pencil,
  Trash2,
  Check,
  X,
} from "lucide-react";
import { Avatar } from "@radix-ui/themes";
import { EmptyComponent } from "@/components";
import type { Suggestion } from "@/hooks";
import { AdminControls } from "./admin-controls";
import { getInitials } from "@/utils";
import { SuggestionCardSkeleton } from "./skeleton";
import { ADMIN_ACCESS } from "@/constants";
import { resolveVisitorId } from "@/services/shared-service";

type SuggestionListProps = {
  suggestions: Suggestion[];
  isLoading: boolean;
  activeId: string | null;
  setActiveId: (id: string | null) => void;
  onReply: (id: string, reply: string) => void;
  onUpdate: (id: string, message: string) => void;
  onDelete: (id: string) => void;
};

const VISIBLE_COUNT = 3;
const { visitorId } = resolveVisitorId();
console.log("visitorId", visitorId);

export const SuggestionList = ({
  suggestions,
  isLoading,
  activeId,
  setActiveId,
  onReply,
  onUpdate,
  onDelete,
}: SuggestionListProps) => {
  const searchParams = useSearchParams();
  const isAdmin = searchParams.has(ADMIN_ACCESS);
  const [showAll, setShowAll] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState("");

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

  const startEdit = (s: Suggestion) => {
    setEditingId(s._id);
    setDraft(s.message);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setDraft("");
  };

  const saveEdit = (id: string) => {
    if (!draft.trim()) return;
    onUpdate(id, draft.trim());
    setEditingId(null);
    setDraft("");
  };

  return (
    <div className="space-y-4">
      {visibleSuggestions.map((s) => {
        const isOwner = !!visitorId && s.visitorId === visitorId;
        const isEditing = editingId === s._id;

        return (
          <div
            key={s._id}
            id={`suggestion-${s._id}`}
            className="rounded-xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:border-[#DAB025]"
          >
            <div className="flex items-center gap-3">
              <Avatar size="4" radius="full" fallback={getInitials(s.name)} />

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-[#0A4A8A]">
                    {s.name}
                  </span>
                  <span className="shrink-0 text-xs text-gray-400">
                    {new Date(s.createdAt).toLocaleDateString()}
                  </span>
                </div>

                {isEditing ? (
                  <div className="mt-1.5 space-y-2">
                    <textarea
                      value={draft}
                      onChange={(e) => setDraft(e.target.value)}
                      rows={3}
                      className="w-full resize-none rounded-lg border border-gray-200 p-2 text-sm text-gray-700 outline-none focus:border-[#DAB025]"
                    />
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => saveEdit(s._id)}
                        className="flex items-center gap-1 rounded-full bg-[#09113F] px-3 py-1 text-xs font-semibold text-white hover:bg-[#0A4A8A]"
                      >
                        <Check size={13} /> Save
                      </button>
                      <button
                        type="button"
                        onClick={cancelEdit}
                        className="flex items-center gap-1 rounded-full border border-gray-200 px-3 py-1 text-xs font-semibold text-gray-500 hover:border-gray-300"
                      >
                        <X size={13} /> Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className="mt-1.5 text-sm text-gray-600">{s.message}</p>
                )}
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

            {!isAdmin && isOwner && !isEditing && (
              <div className="mt-3 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => startEdit(s)}
                  className="flex items-center gap-1 text-xs font-semibold text-[#0A4A8A] hover:text-[#DAB025]"
                >
                  <Pencil size={13} /> Edit
                </button>
                <button
                  type="button"
                  onClick={() => onDelete(s._id)}
                  className="flex items-center gap-1 text-xs font-semibold text-rose-500 hover:text-rose-600"
                >
                  <Trash2 size={13} /> Delete
                </button>
              </div>
            )}
          </div>
        );
      })}

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
