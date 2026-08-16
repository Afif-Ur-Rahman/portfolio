"use client";

import { useState } from "react";
import { useAdminStore } from "@/store";
import { Trash2, CornerDownRight } from "lucide-react";

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

  return (
    <div className="mt-3 border-t border-gray-100 pt-3">
      <div className="flex gap-3">
        <button
          onClick={onToggle}
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#0A4A8A] hover:text-[#DAB025] hover:underline"
        >
          <CornerDownRight size={13} />
          Reply
        </button>
        <button
          onClick={() => onDelete(suggestionId)}
          className="inline-flex items-center gap-1 text-xs font-semibold text-red-500 hover:underline"
        >
          <Trash2 size={13} />
          Delete
        </button>
      </div>

      {isOpen && (
        <div className="mt-2 flex gap-2">
          <input
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write a reply..."
            className="flex-1 rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs text-[#09113F] focus:border-[#DAB025] focus:outline-none"
          />
          <button
            onClick={() => onReply(suggestionId, replyText)}
            disabled={!replyText.trim()}
            className="rounded-full bg-[#DAB025] px-3 py-1.5 text-xs font-bold text-[#09113F] disabled:opacity-50"
          >
            Send
          </button>
        </div>
      )}
    </div>
  );
};
