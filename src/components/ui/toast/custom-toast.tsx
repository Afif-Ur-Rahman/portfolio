"use client";

import { CheckCircle2, XCircle, AlertTriangle, Info, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import toast, { Toast } from "react-hot-toast";

import { ProfileImage } from "../profile-image";

export type ToastType = "success" | "error" | "warning" | "info";

interface CustomToastProps {
  t: Toast;
  type: ToastType;
  title?: string;
  message?: string;
  image?: string;
  onClick?: () => void;
}

const CONFIG: Record<
  ToastType,
  { icon: React.ReactNode; accent: string; iconBg: string; bar: string }
> = {
  success: {
    icon: <CheckCircle2 className="h-5 w-5 text-[#DAB025]" />,
    accent: "border-l-[#DAB025]",
    iconBg: "bg-[#DAB025]/10",
    bar: "bg-[#DAB025]",
  },
  error: {
    icon: <XCircle className="h-5 w-5 text-red-400" />,
    accent: "border-l-red-500",
    iconBg: "bg-red-500/10",
    bar: "bg-red-500",
  },
  warning: {
    icon: <AlertTriangle className="h-5 w-5 text-amber-400" />,
    accent: "border-l-amber-400",
    iconBg: "bg-amber-400/10",
    bar: "bg-amber-400",
  },
  info: {
    icon: <Info className="h-5 w-5 text-slate-300" />,
    accent: "border-l-white/20",
    iconBg: "bg-white/10",
    bar: "bg-slate-300",
  },
};

export const CustomToast: React.FC<CustomToastProps> = ({
  t,
  type,
  title,
  message,
  image,
  onClick,
}) => {
  const { icon, accent, iconBg, bar } = CONFIG[type];
  const duration = t.duration;

  const [barWidth, setBarWidth] = useState("0%");
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!t.visible) {
      return;
    }

    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = requestAnimationFrame(() => {
        setBarWidth("100%");
      });
    });

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [t.visible, t.id]);

  return (
    <div
      onClick={onClick}
      className={`relative flex w-85 items-start gap-3 rounded-2xl border border-l-4 border-white/10 ${accent} cursor-pointer overflow-hidden bg-[#09113F]/95 px-4 py-3.5 shadow-2xl shadow-black/30 backdrop-blur-xl transition-all duration-200 ${t.visible ? "animate-enter" : "animate-leave"} ${onClick ? "hover:-translate-y-0.5 hover:bg-[#09113F]" : ""} `}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(218,176,37,0.08),transparent_32%)]" />

      {/* Progress bar */}
      <div
        className={`absolute bottom-0 left-0 h-0.5 ${bar} opacity-40`}
        style={{
          width: barWidth,
          transition: t.visible ? `width ${duration}ms linear` : "none",
        }}
      />

      {/* Icon or avatar */}
      <div
        className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${image ? "" : iconBg}`}
      >
        {image ? <ProfileImage size={36} imageUrl={image} /> : icon}
      </div>

      {/* Text */}
      <div className="relative z-10 min-w-0 flex-1 pt-0.5">
        {title && <p className="text-sm font-bold text-white">{title}</p>}
        {message && (
          <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-slate-400">{message}</p>
        )}
      </div>

      {/* Dismiss */}
      <button
        onClick={e => {
          e.stopPropagation();
          toast.dismiss(t.id);
        }}
        className="relative z-10 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-white/10 hover:text-white"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
};
