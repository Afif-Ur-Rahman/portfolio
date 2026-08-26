"use client";

import { Avatar } from "@radix-ui/themes";
import { AnimatePresence, motion, type Transition } from "framer-motion";
import { MessageSquareText, ChevronDown } from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";

import { EmptyComponent } from "@/components";
import type { Suggestion } from "@/hooks";
import { getInitials } from "@/utils";

import { ActionButtons } from "./action-buttons";
import { AdminControls } from "./admin-controls";
import { SuggestionCardSkeleton } from "./skeleton";

const VISIBLE_COUNT = 3;

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

const cardTransition: Transition = { duration: 0.35, ease: "easeInOut" };

type SuggestionListProps = {
  suggestions: Suggestion[];
  visibleSuggestions: Suggestion[];
  hasMore: boolean;
  isLoading: boolean;
  isAdmin: boolean;
  visitorId: string | null;
  activeId: string | null;
  setActiveId: (id: string | null) => void;
  startEdit: (suggestion: Suggestion) => void;
  showAll: boolean;
  toggleShowAll: () => void;
  onReply: (id: string, reply: string) => void;
  onDelete: (id: string) => void;
};

export const SuggestionList = ({
  suggestions,
  visibleSuggestions,
  hasMore,
  isLoading,
  isAdmin,
  visitorId,
  activeId,
  setActiveId,
  startEdit,
  showAll,
  toggleShowAll,
  onReply,
  onDelete,
}: SuggestionListProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | "auto">("auto");

  useLayoutEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const updateHeight = () => {
      const last = el.lastElementChild as HTMLElement | null;
      setHeight(last ? last.offsetTop + last.offsetHeight : 0);
    };
    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(el);

    return () => observer.disconnect();
  }, [isLoading, visibleSuggestions, hasMore, activeId]);

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

  return (
    <motion.div animate={{ height }} transition={cardTransition} className="overflow-hidden">
      <div ref={contentRef} className="relative space-y-4">
        <AnimatePresence initial={false} mode="popLayout">
          {visibleSuggestions.map(s => {
            const isOwner = !!visitorId && s.visitorId === visitorId;

            return (
              <motion.div
                key={s._id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={cardTransition}
                id={`suggestion-${s._id}`}
                className="rounded-xl border border-gray-200 bg-white p-4 transition-colors duration-300 hover:border-[#DAB025]"
              >
                <div className="flex items-center gap-3">
                  <Avatar size="4" radius="full" fallback={getInitials(s.name)} />

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm font-semibold text-[#0A4A8A]">{s.name}</span>
                    </div>

                    <p className="mt-1.5 text-sm text-gray-600">{s.message}</p>
                  </div>
                  <div className="flex flex-col items-center gap-3 sm:flex-row">
                    {isOwner && (
                      <ActionButtons onEdit={() => startEdit(s)} onDelete={() => onDelete(s._id)} />
                    )}
                    <span className="shrink-0 text-xs text-gray-400">
                      {new Date(s.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {s.reply && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden rounded-lg border-l-2 border-[#DAB025] bg-[#DAB025]/5 px-3 py-2"
                    >
                      <span className="text-xs font-semibold text-[#DAB025]">Owner:</span>
                      <p className="mt-1 text-sm text-[#09113F]">{s.reply}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {isAdmin && (
                  <AdminControls
                    suggestionId={s._id}
                    isOpen={activeId === s._id}
                    onToggle={() => setActiveId(activeId === s._id ? null : s._id)}
                    onReply={onReply}
                    onDelete={onDelete}
                  />
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>

        {hasMore && (
          <button
            type="button"
            onClick={toggleShowAll}
            className="mx-auto flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-[#0A4A8A] transition-all hover:border-[#DAB025] hover:text-[#DAB025]"
          >
            {showAll ? "Show less" : `See more (${suggestions.length - VISIBLE_COUNT})`}
            <ChevronDown
              size={15}
              className={`transition-transform duration-300 ease-in-out ${showAll ? "rotate-180" : ""}`}
            />
          </button>
        )}
      </div>
    </motion.div>
  );
};
