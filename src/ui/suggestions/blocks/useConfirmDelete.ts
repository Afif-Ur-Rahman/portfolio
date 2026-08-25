"use client";

import { useState } from "react";

export const useConfirmDelete = (onDelete: (id: string) => Promise<unknown>) => {
  const [pendingId, setPendingId] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const requestDelete = (id: string) => setPendingId(id);
  const cancelDelete = () => setPendingId(null);

  const confirmDelete = async () => {
    if (!pendingId) return;
    setIsDeleting(true);
    try {
      await onDelete(pendingId);
    } finally {
      setIsDeleting(false);
      setPendingId(null);
    }
  };

  return {
    isConfirmOpen: !!pendingId,
    isDeleting,
    requestDelete,
    cancelDelete,
    confirmDelete,
  };
};
