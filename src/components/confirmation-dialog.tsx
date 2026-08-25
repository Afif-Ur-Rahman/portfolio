"use client";

import { Button, Dialog, Flex, Text } from "@radix-ui/themes";
import { AlertTriangle, Trash2, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { showToast } from "@/utils/toast";

import { CloseDialogIcon } from "./dialog";

interface ConfirmationDialogProps<T = { state: string; error?: string }> {
  trigger: React.ReactElement;
  onCancel?: () => void;
  onSuccess?: () => void;
  confirmAction: () => Promise<T>;
  title: string;
  saveButtonTitle: string;
  cancelButtonTitle?: string;
  description: string;
}

const ConfirmationDialog = <T extends { state: boolean; message?: string; error?: string }>({
  trigger,
  onCancel,
  onSuccess,
  confirmAction,
  title,
  saveButtonTitle,
  cancelButtonTitle,
  description,
}: ConfirmationDialogProps<T>) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const onConfrim = async () => {
    setLoading(true);

    const result = await confirmAction();

    if (result.state === false) {
      showToast("error", result?.error || "An error occurred. Please try again.");
      setLoading(false);
      return;
    }

    if (result.state === true && result.message) showToast("success", result?.message || "");

    router.refresh();
    setOpen(false);
    setLoading(false);
    onSuccess?.();
  };

  const hasRemoveOrDelete = /remove|delete/i.test(title);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Flex align="start" className="group cursor-pointer">
        <Dialog.Trigger>{trigger}</Dialog.Trigger>
      </Flex>
      <Dialog.Content className="relative max-w-md border! border-[#DAB025]/10! bg-[#09113F]!">
        <CloseDialogIcon />

        <Flex justify="center" className="mb-4">
          <div
            className={`rounded-full p-4 ${
              hasRemoveOrDelete ? "bg-red-500/15" : "bg-[#DAB025]/15"
            }`}
          >
            {hasRemoveOrDelete ? (
              <Trash2 className="h-8 w-8 text-red-400" />
            ) : (
              <CheckCircle className="h-8 w-8 text-[#DAB025]" />
            )}
          </div>
        </Flex>

        <Dialog.Title className="mb-3 text-center font-sans text-xl font-bold tracking-[-0.25px] text-white">
          {title}
        </Dialog.Title>

        <Dialog.Description size="3" className="mb-6 text-center text-slate-300">
          {description}
        </Dialog.Description>

        {hasRemoveOrDelete && (
          <Flex
            align="center"
            gap="2"
            className="mb-4 rounded-lg border border-amber-500/30 bg-amber-500/10 p-3"
          >
            <AlertTriangle className="h-5 w-5 shrink-0 text-amber-400" />
            <Text size="2" className="text-amber-200">
              This action cannot be undone. Please confirm to proceed.
            </Text>
          </Flex>
        )}

        <Flex gap="3" mt="4" justify="end" className="flex-col sm:flex-row">
          {/* Cancel Button - Secondary Theme */}
          <Dialog.Close className="w-full sm:w-auto">
            <Button
              variant="outline"
              color="gray"
              highContrast
              onClick={onCancel}
              className="w-full cursor-pointer border-[#DAB025]/40! px-6 py-3 text-[#DAB025]! transition-all duration-200 hover:border-[#DAB025]! hover:bg-[#DAB025]/10! sm:w-auto"
              disabled={loading}
            >
              {cancelButtonTitle ?? "Cancel"}
            </Button>
          </Dialog.Close>

          {/* Action Button - Primary or Delete Theme */}
          <Button
            color={hasRemoveOrDelete ? "red" : "amber"}
            highContrast={!hasRemoveOrDelete}
            onClick={onConfrim}
            disabled={loading}
            className={`w-full cursor-pointer px-6 py-3 font-semibold transition-all duration-200 sm:w-auto ${
              loading ? "cursor-not-allowed opacity-50" : ""
            } ${
              hasRemoveOrDelete
                ? // Delete button - Danger variant with theme accents
                  "border-red-600! bg-red-600! text-white! hover:bg-red-700! hover:shadow-lg hover:shadow-red-600/30!"
                : // Update/Save button - Primary theme
                  "bg-[#DAB025]! text-[#09113F]! hover:bg-[#C49C1E]! hover:shadow-lg hover:shadow-[#DAB025]/40! active:scale-[0.98]!"
            }`}
          >
            {loading ? (
              <Flex align="center" gap="2">
                <span className="animate-spin">⏳</span>
                <span>Processing...</span>
              </Flex>
            ) : (
              saveButtonTitle
            )}
          </Button>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export { ConfirmationDialog };
