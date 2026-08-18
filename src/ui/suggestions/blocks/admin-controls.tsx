"use client";

import { useState } from "react";
import { useAdminStore } from "@/store";
import { Loader2 } from "lucide-react";
import { ActionButtons } from "./action-buttons";

type AdminControlsProps = {
  suggestionId: string;
  isOpen: boolean;
  onToggle: () => void;
  onReply: (id: string, reply: string) => void;
  onDelete: (id: string) => void;
};

export const AdminControls = ({
  suggestionId,
  isOpen,
  onToggle,
  onReply,
  onDelete,
}: AdminControlsProps) => {
  const { secret, setSecret } = useAdminStore();
  const [secretInput, setSecretInput] = useState("");
  const [replyText, setReplyText] = useState("");
  const [isSending, setIsSending] = useState(false);

  if (!secret) {
    return (
      <div className="mt-3 flex items-center gap-2">
        <input
          type="password"
          value={secretInput}
          onChange={(e) => setSecretInput(e.target.value)}
          placeholder="Admin secret"
          className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs text-[#09113F] focus:border-[#DAB025] focus:outline-none"
        />
        <button
          onClick={() => setSecret(secretInput)}
          className="rounded-full bg-[#DAB025]/10 px-3 py-1.5 text-xs font-semibold text-[#DAB025]"
        >
          Unlock
        </button>
      </div>
    );
  }

  const handleSend = async () => {
    if (!replyText.trim()) return;
    setIsSending(true);
    try {
      await onReply(suggestionId, replyText);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="mt-3 border-t border-gray-100 pt-3">
      <ActionButtons
        onToggle={onToggle}
        onDelete={() => onDelete(suggestionId)}
      />

      {isOpen && (
        <div className="mt-2 flex gap-2">
          <input
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write a reply..."
            disabled={isSending}
            className="flex-1 rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs text-[#09113F] focus:border-[#DAB025] focus:outline-none disabled:opacity-50"
          />
          <button
            onClick={handleSend}
            disabled={!replyText.trim() || isSending}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#DAB025] px-3 py-1.5 text-xs font-bold text-[#09113F] disabled:opacity-50 cursor-pointer"
          >
            {isSending && <Loader2 size={12} className="animate-spin" />}
            {isSending ? "Sending..." : "Send"}
          </button>
        </div>
      )}
    </div>
  );
};
