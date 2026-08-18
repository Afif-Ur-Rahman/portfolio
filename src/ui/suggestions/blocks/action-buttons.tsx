"use client";

import { Trash2, CornerDownRight, Pencil } from "lucide-react";

type ActionButtonsProps = {
  onToggle?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
};

export const ActionButtons = ({
  onToggle,
  onEdit,
  onDelete,
}: ActionButtonsProps) => {
  return (
    <div className="flex gap-3">
      {onToggle && (
        <button
          onClick={onToggle}
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#0A4A8A] hover:text-[#DAB025] hover:underline cursor-pointer"
        >
          <CornerDownRight size={13} />
          Reply
        </button>
      )}
      {onEdit && (
        <button
          onClick={onEdit}
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#0A4A8A] hover:text-[#DAB025] hover:underline cursor-pointer"
        >
          <Pencil size={13} />
          Edit
        </button>
      )}
      {onDelete && (
        <button
          onClick={onDelete}
          className="inline-flex items-center gap-1 text-xs font-semibold text-red-500 hover:underline cursor-pointer"
        >
          <Trash2 size={13} />
          Delete
        </button>
      )}
    </div>
  );
};
