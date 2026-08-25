"use client";

import { Select } from "@radix-ui/themes";
import { format, parse, isValid } from "date-fns";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { Controller, RegisterOptions, useFormContext } from "react-hook-form";

import { FormFieldError } from "../form";

type FormInputVariant = "dark" | "light";

interface FormInputProps {
  field: string;
  label: string;
  type?: "text" | "number" | "password" | "email" | "select" | "date" | "textarea";
  placeholder: string;
  icon?: React.ElementType;
  rules?: RegisterOptions;
  options?: {
    label: string;
    value: string;
    disabled?: boolean;
  }[];
  required?: boolean;
  onValueChange?: (value: string) => void;
  max?: number;
  maxLength?: number;
  rows?: number;
  variant?: FormInputVariant;
}

const VARIANT_STYLES: Record<
  FormInputVariant,
  {
    label: string;
    container: string;
    text: string;
    icon: string;
    dropdown: string;
    dropdownItem: string;
    dropdownEmpty: string;
    scheme: string;
  }
> = {
  dark: {
    label: "text-[#DAB025]",
    container:
      "border-[#DAB025]/20 bg-[#09113F] focus-within:border-[#DAB025] focus-within:ring-[#DAB025]/10",
    text: "text-white placeholder:text-slate-400",
    icon: "text-slate-400",
    dropdown: "border-[#DAB025]/20! bg-[#09113F]!",
    dropdownItem:
      "text-white data-highlighted:bg-[#DAB025]/20! data-highlighted:text-[#DAB025]! data-[state=checked]:bg-[#DAB025]/15!",
    dropdownEmpty: "text-slate-500!",
    scheme: "scheme-dark",
  },
  light: {
    label: "text-[#003B73]",
    container:
      "border-gray-200 bg-gray-50 focus-within:border-[#DAB025] focus-within:ring-[#DAB025]/10",
    text: "text-[#09113F] placeholder:text-gray-400",
    icon: "text-gray-400",
    dropdown: "border-gray-200! bg-white!",
    dropdownItem:
      "text-[#09113F] data-highlighted:bg-[#DAB025]/10! data-highlighted:text-[#DAB025]! data-[state=checked]:bg-[#DAB025]/10!",
    dropdownEmpty: "text-gray-400!",
    scheme: "scheme-light",
  },
};

const FormInput = ({
  field,
  label,
  type = "text",
  placeholder,
  icon: Icon,
  rules,
  options = [],
  required = false,
  onValueChange,
  max,
  maxLength,
  rows = 4,
  variant = "dark",
}: FormInputProps) => {
  const { register, control } = useFormContext();
  const [show, setShow] = useState(false);

  const styles = VARIANT_STYLES[variant];

  const isPassword = type === "password";
  const isNumber = type === "number";
  const isSelect = type === "select";
  const isDate = type === "date";
  const isTextarea = type === "textarea";

  const inputType = isPassword ? (show ? "text" : "password") : type;

  const numberRules: RegisterOptions = isNumber
    ? {
        ...rules,
        min: rules?.min ?? {
          value: 0,
          message: `${label} cannot be negative`,
        },
        setValueAs: value => {
          const transformedValue = rules?.setValueAs ? rules.setValueAs(value) : value;

          if (
            transformedValue === "" ||
            transformedValue === null ||
            transformedValue === undefined
          ) {
            return "";
          }

          const numberValue = Number(transformedValue);

          if (Number.isNaN(numberValue)) {
            return "";
          }

          if (numberValue < 0) return 0;
          if (max !== undefined && numberValue > max) return max;

          return transformedValue;
        },
      }
    : (rules ?? {});

  const { onChange: registerOnChange, ...registerRest } = register(field, numberRules);

  return (
    <div className="flex flex-col gap-1.5">
      <label className={`text-[11px] font-semibold tracking-widest uppercase ${styles.label}`}>
        {label} {required && <span className="text-[14px] text-red-500">*</span>}
      </label>

      <div
        className={`flex items-center gap-2.5 rounded-lg border px-4 py-3 text-sm shadow-sm transition-all focus-within:ring-2 ${styles.container} ${isTextarea ? "items-start" : ""}`}
      >
        {Icon && <Icon className={`h-4 w-4 shrink-0 ${styles.icon} ${isTextarea ? "mt-1" : ""}`} />}

        {isSelect ? (
          <Controller
            name={field}
            control={control}
            rules={rules}
            render={({ field: controllerField }) => (
              <Select.Root
                value={controllerField.value}
                onValueChange={value => {
                  controllerField.onChange(value);
                  onValueChange?.(value);
                }}
              >
                <div className="flex min-w-0 flex-1 cursor-pointer">
                  <Select.Trigger
                    placeholder={placeholder}
                    className={`${variant === "dark" ? "text-white!" : "text-[#09113F]!"} h-auto! w-full! border-0! bg-transparent! p-0! shadow-none!`}
                  />
                </div>

                <Select.Content
                  position="popper"
                  className={`rounded-lg! border! shadow-xl! shadow-black/30! ${styles.dropdown}`}
                >
                  {options.length ? (
                    options.map(option => (
                      <Select.Item
                        key={option.value}
                        value={option.value}
                        disabled={option.disabled}
                        className={`cursor-pointer! rounded-md! transition-colors! ${styles.dropdownItem}`}
                      >
                        {option.label}
                      </Select.Item>
                    ))
                  ) : (
                    <Select.Item value="empty" disabled className={styles.dropdownEmpty}>
                      No data
                    </Select.Item>
                  )}
                </Select.Content>
              </Select.Root>
            )}
          />
        ) : isDate ? (
          <Controller
            name={field}
            control={control}
            rules={rules}
            render={({ field: controllerField }) => {
              const dateValue =
                controllerField.value instanceof Date && isValid(controllerField.value)
                  ? format(controllerField.value, "yyyy-MM-dd")
                  : "";

              return (
                <input
                  type="date"
                  value={dateValue}
                  onChange={e => {
                    const raw = e.target.value;
                    if (!raw) {
                      controllerField.onChange(undefined);
                      return;
                    }
                    const parsed = parse(raw, "yyyy-MM-dd", new Date());
                    controllerField.onChange(isValid(parsed) ? parsed : undefined);
                  }}
                  onBlur={controllerField.onBlur}
                  placeholder={placeholder}
                  className={`min-w-0 flex-1 bg-transparent text-sm outline-none ${styles.text} ${styles.scheme}`}
                />
              );
            }}
          />
        ) : isTextarea ? (
          <textarea
            {...registerRest}
            onChange={registerOnChange}
            placeholder={placeholder}
            rows={rows}
            maxLength={maxLength}
            className={`min-w-0 flex-1 resize-none bg-transparent text-sm outline-none ${styles.text}`}
          />
        ) : (
          <>
            <input
              {...registerRest}
              onChange={e => {
                if (isNumber && max !== undefined && e.target.value !== "") {
                  const numericValue = Number(e.target.value);
                  if (!Number.isNaN(numericValue) && numericValue > max) {
                    e.target.value = String(max);
                  }
                }
                registerOnChange(e);
              }}
              type={inputType}
              min={isNumber ? 0 : undefined}
              max={isNumber ? max : undefined}
              maxLength={maxLength}
              step={isNumber ? "any" : undefined}
              inputMode={isNumber ? "decimal" : undefined}
              placeholder={placeholder}
              onKeyDown={e => {
                if (isNumber && ["-", "+", "e", "E"].includes(e.key)) {
                  e.preventDefault();
                }
              }}
              onPaste={e => {
                if (!isNumber) return;

                const pastedValue = e.clipboardData.getData("text");
                const numericValue = Number(pastedValue);

                if (pastedValue.includes("-") || numericValue < 0) {
                  e.preventDefault();
                }
              }}
              className={`min-w-0 flex-1 bg-transparent text-sm outline-none ${styles.text} ${
                isNumber
                  ? "[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  : ""
              }`}
            />

            {isPassword && (
              <button
                type="button"
                onClick={() => setShow(s => !s)}
                className={`shrink-0 transition-colors hover:text-[#DAB025] ${styles.icon}`}
              >
                {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            )}
          </>
        )}
      </div>

      <FormFieldError name={field} className="text-xs text-red-500" />
    </div>
  );
};

export { FormInput };
