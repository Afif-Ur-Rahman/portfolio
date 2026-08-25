"use client";

import { Send, Loader2, X } from "lucide-react";
import { useEffect, useState } from "react";
import { FormProvider, useForm, useWatch } from "react-hook-form";

import { FormInput } from "@/components";
import type { Suggestion } from "@/hooks";

type SuggestionFormValues = {
  name: string;
  message: string;
};

type SuggestionFormProps = {
  editingSuggestion: Suggestion | null;
  onSubmit: (name: string, message: string) => Promise<{ success: boolean; message: string }>;
  onUpdate: (
    id: string,
    data: { name: string; message: string },
  ) => Promise<{ success: boolean; message: string }>;
  onCancel: () => void;
};

export const SuggestionForm = ({
  editingSuggestion,
  onSubmit,
  onUpdate,
  onCancel,
}: SuggestionFormProps) => {
  const methods = useForm<SuggestionFormValues>({
    defaultValues: { name: "", message: "" },
  });

  const { handleSubmit, control, reset } = methods;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const messageValue = useWatch({ control, name: "message" }) || "";
  const isEditing = !!editingSuggestion;

  useEffect(() => {
    reset({
      name: editingSuggestion?.name ?? "",
      message: editingSuggestion?.message ?? "",
    });
  }, [editingSuggestion, reset]);

  const onFormSubmit = async (values: SuggestionFormValues) => {
    setIsSubmitting(true);

    const res = isEditing
      ? await onUpdate(editingSuggestion._id, {
          name: values.name.trim(),
          message: values.message.trim(),
        })
      : await onSubmit(values.name.trim(), values.message.trim());

    setIsSubmitting(false);

    if (res.success && !isEditing) {
      reset();
    }
  };

  const handleCancel = () => {
    reset({ name: "", message: "" });
    onCancel();
  };

  return (
    <FormProvider {...methods}>
      <div className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-6">
        <FormInput
          field="name"
          label="Name"
          placeholder="Your name (optional)"
          variant="light"
          rules={{
            maxLength: {
              value: 80,
              message: "Name is too long",
            },
          }}
        />

        <FormInput
          field="message"
          label="Message"
          type="textarea"
          required
          variant="light"
          placeholder="Got a suggestion or spotted something off? Let me know..."
          rows={4}
          maxLength={1000}
          rules={{
            required: "Please write a message",
            maxLength: {
              value: 1000,
              message: "Message is too long",
            },
          }}
        />

        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">{messageValue.length}/1000</span>

          <div className="flex items-center gap-2">
            {isEditing && (
              <button
                type="button"
                onClick={handleCancel}
                aria-label="Cancel"
                title="Cancel"
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-500 transition-colors hover:border-gray-300 sm:px-5"
              >
                <X size={15} />
                <span className="hidden sm:inline">Cancel</span>
              </button>
            )}

            <button
              type="button"
              onClick={handleSubmit(onFormSubmit)}
              disabled={isSubmitting || !messageValue.trim()}
              aria-label={isEditing ? "Update" : "Submit"}
              title={isEditing ? "Update" : "Submit"}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#DAB025] px-4 py-2 text-sm font-bold text-[#09113F] transition-transform hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0 sm:px-5"
            >
              {isSubmitting ? <Loader2 size={15} className="animate-spin" /> : <Send size={15} />}

              <span className="hidden sm:inline">{isEditing ? "Update" : "Submit"}</span>
            </button>
          </div>
        </div>
      </div>
    </FormProvider>
  );
};
