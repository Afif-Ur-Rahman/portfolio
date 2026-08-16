"use client";

import { useSuggestions } from "@/hooks";
import { SuggestionForm, SuggestionList } from "./blocks";

export const Suggestions = () => {
  const {
    suggestions,
    isLoading,
    activeId,
    setActiveId,
    submitSuggestion,
    replyToSuggestion,
    deleteSuggestion,
  } = useSuggestions();

  return (
    <section id="suggestions" className="w-full bg-[#09113F] px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <span className="inline-block rounded-full bg-[#DAB025]/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-[#DAB025]">
          Suggestions
        </span>
        <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
          Got feedback on the portfolio?
        </h2>
        <p className="mt-2 text-gray-300">
          Drop a suggestion below — I read every one and reply here.
        </p>

        <div className="mt-8">
          <SuggestionForm onSubmit={submitSuggestion} />
        </div>

        <div className="mt-10">
          <SuggestionList
            suggestions={suggestions}
            isLoading={isLoading}
            activeId={activeId}
            setActiveId={setActiveId}
            onReply={replyToSuggestion}
            onDelete={deleteSuggestion}
          />
        </div>
      </div>
    </section>
  );
};
