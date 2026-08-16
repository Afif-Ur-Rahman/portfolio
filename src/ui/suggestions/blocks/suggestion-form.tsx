"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";

type SuggestionFormProps = {
  onSubmit: (
    name: string,
    message: string,
  ) => Promise<{ success: boolean; message: string }>;
};

export const SuggestionForm = ({ onSubmit }: SuggestionFormProps) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!message.trim()) return;
    setIsSubmitting(true);
    setStatus(null);

    const res = await onSubmit(name.trim(), message.trim());

    setIsSubmitting(false);
    setStatus(
      res.success ? "Thanks! Your suggestion has been posted." : res.message,
    );

    if (res.success) {
      setName("");
      setMessage("");
    }
  };

  return (
    <div className="rounded-xl border border-[#DAB025]/30 bg-white/5 p-6">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name (optional)"
        maxLength={80}
        className="w-full rounded-lg border border-[#DAB025]/30 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-gray-400 focus:border-[#DAB025] focus:outline-none"
      />

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Got a suggestion or spotted something off? Let me know..."
        rows={4}
        maxLength={1000}
        className="mt-3 w-full resize-none rounded-lg border border-[#DAB025]/30 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-gray-400 focus:border-[#DAB025] focus:outline-none"
      />

      <div className="mt-3 flex items-center justify-between">
        <span className="text-xs text-gray-400">{message.length}/1000</span>

        <button
          onClick={handleSubmit}
          disabled={isSubmitting || !message.trim()}
          className="inline-flex items-center gap-2 rounded-full bg-[#DAB025] px-5 py-2 text-sm font-bold text-[#09113F] transition-transform hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0"
        >
          {isSubmitting ? (
            <Loader2 size={15} className="animate-spin" />
          ) : (
            <Send size={15} />
          )}
          Submit
        </button>
      </div>

      {status && <p className="mt-3 text-xs text-[#DAB025]">{status}</p>}
    </div>
  );
};
