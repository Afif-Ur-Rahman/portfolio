"use client";

import { ConfirmDialog } from "@/components";
import { useSuggestions } from "@/hooks";

import { SuggestionForm, SuggestionList } from "./blocks";
import { useConfirmDelete } from "./blocks/useConfirmDelete";

export const Suggestions = () => {
  const {
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
  } = useSuggestions();

  const { isConfirmOpen, isDeleting, requestDelete, cancelDelete, confirmDelete } =
    useConfirmDelete(deleteSuggestion);

  return (
    <section id="suggestions" className="w-full scroll-mt-8 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col gap-4">
          <span className="inline-block w-fit rounded-full bg-[#DAB025]/10 px-4 py-2 text-sm font-semibold tracking-wider text-[#DAB025] uppercase">
            Suggestions
          </span>

          <h2 className="text-2xl leading-tight font-bold text-[#003B73] md:text-5xl">
            Got feedback on the portfolio?
          </h2>

          <p className="text-lg leading-8 text-gray-600">
            Drop a suggestion below —{" "}
            <span className="font-semibold text-[#003B73]">I read every one</span> and reply right
            here, so feel free to check back.
          </p>

          <div id="suggestion-form" className="scroll-mt-20">
            <SuggestionForm
              editingSuggestion={editingSuggestion}
              onSubmit={submitSuggestion}
              onUpdate={updateSuggestion}
              onCancel={cancelEdit}
            />
          </div>

          <SuggestionList
            suggestions={suggestions}
            visibleSuggestions={visibleSuggestions}
            hasMore={hasMore}
            isLoading={isLoading}
            isAdmin={isAdmin}
            visitorId={visitorId}
            activeId={activeId}
            setActiveId={setActiveId}
            startEdit={startEdit}
            showAll={showAll}
            toggleShowAll={toggleShowAll}
            onReply={replyToSuggestion}
            onDelete={requestDelete}
          />
        </div>
      </div>

      <ConfirmDialog
        open={isConfirmOpen}
        isLoading={isDeleting}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    </section>
  );
};
