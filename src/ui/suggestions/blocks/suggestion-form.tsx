"use client";

import { useState } from "react";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import { Send, Loader2 } from "lucide-react";
import { FormInput } from "@/components";

type SuggestionFormValues = {
  name: string;
  message: string;
};

type SuggestionFormProps = {
  onSubmit: (
    name: string,
    message: string,
  ) => Promise<{ success: boolean; message: string }>;
};

export const SuggestionForm = ({ onSubmit }: SuggestionFormProps) => {
  const methods = useForm<SuggestionFormValues>({
    defaultValues: { name: "", message: "" },
  });

  const { handleSubmit, control, reset } = methods;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const messageValue = useWatch({ control, name: "message" }) || "";

  const onFormSubmit = async (values: SuggestionFormValues) => {
    setIsSubmitting(true);
    const res = await onSubmit(values.name.trim(), values.message.trim());
    setIsSubmitting(false);
    if (res.success) reset();
  };

  return (
    <FormProvider {...methods}>
      <div className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-6">
        <FormInput
          field="name"
          label="Name"
          placeholder="Your name (optional)"
          variant="light"
          rules={{ maxLength: { value: 80, message: "Name is too long" } }}
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
            maxLength: { value: 1000, message: "Message is too long" },
          }}
        />

        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">
            {messageValue.length}/1000
          </span>

          <button
            type="button"
            onClick={handleSubmit(onFormSubmit)}
            disabled={isSubmitting || !messageValue.trim()}
            className="inline-flex items-center gap-2 rounded-full bg-[#DAB025] px-5 py-2 text-sm font-bold text-[#09113F] transition-transform hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0 cursor-pointer"
          >
            {isSubmitting ? (
              <Loader2 size={15} className="animate-spin" />
            ) : (
              <Send size={15} />
            )}
            Submit
          </button>
        </div>
      </div>
    </FormProvider>
  );
};
