"use client";

import { useSuggestions } from "@/hooks";
import { SuggestionForm, SuggestionList } from "./blocks";

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

  return (
    <section id="suggestions" className="scroll-mt-8 w-full bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col gap-4">
          <span className="w-fit inline-block rounded-full bg-[#DAB025]/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-[#DAB025]">
            Suggestions
          </span>

          <h2 className="text-2xl font-bold leading-tight text-[#003B73] md:text-5xl">
            Got feedback on the portfolio?
          </h2>

          <p className="text-lg leading-8 text-gray-600">
            Drop a suggestion below —{" "}
            <span className="font-semibold text-[#003B73]">
              I read every one
            </span>{" "}
            and reply right here, so feel free to check back.
          </p>

          <SuggestionForm
            editingSuggestion={editingSuggestion}
            onSubmit={submitSuggestion}
            onUpdate={updateSuggestion}
            onCancel={cancelEdit}
          />

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
            onDelete={deleteSuggestion}
          />
        </div>
      </div>
    </section>
  );
};
