type SuggestionCardSkeletonProps = {
  withReply?: boolean;
};

export const SuggestionCardSkeleton = ({ withReply = false }: SuggestionCardSkeletonProps) => {
  return (
    <div className="animate-pulse rounded-xl border border-gray-200 bg-white p-4">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 shrink-0 rounded-full bg-gray-200" />

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3">
            <div className="h-3.5 w-24 rounded bg-gray-200" />
            <div className="h-3 w-16 shrink-0 rounded bg-gray-200" />
          </div>

          <div className="mt-2.5 space-y-1.5">
            <div className="h-3 w-full rounded bg-gray-200" />
            <div className="h-3 w-4/5 rounded bg-gray-200" />
          </div>
        </div>
      </div>

      {withReply && (
        <div className="mt-3 rounded-lg border-l-2 border-gray-200 bg-gray-50 px-3 py-2">
          <div className="h-3 w-14 rounded bg-gray-200" />
          <div className="mt-2 space-y-1.5">
            <div className="h-3 w-full rounded bg-gray-200" />
            <div className="h-3 w-3/5 rounded bg-gray-200" />
          </div>
        </div>
      )}
    </div>
  );
};
