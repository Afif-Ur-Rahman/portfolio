"use client";

import React, { useEffect, useRef, useState } from "react";
import toast, { Toast } from "react-hot-toast";
import { CheckCircle2, XCircle, AlertTriangle, Info, X } from "lucide-react";
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
    icon: <CheckCircle2 className="w-5 h-5 text-[#DAB025]" />,
    accent: "border-l-[#DAB025]",
    iconBg: "bg-[#DAB025]/10",
    bar: "bg-[#DAB025]",
  },
  error: {
    icon: <XCircle className="w-5 h-5 text-red-400" />,
    accent: "border-l-red-500",
    iconBg: "bg-red-500/10",
    bar: "bg-red-500",
  },
  warning: {
    icon: <AlertTriangle className="w-5 h-5 text-amber-400" />,
    accent: "border-l-amber-400",
    iconBg: "bg-amber-400/10",
    bar: "bg-amber-400",
  },
  info: {
    icon: <Info className="w-5 h-5 text-slate-300" />,
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
      className={`
        relative flex items-start gap-3
        w-85 rounded-2xl border border-white/10 border-l-4 ${accent}
        bg-[#09113F]/95 shadow-2xl shadow-black/30 backdrop-blur-xl
        px-4 py-3.5 overflow-hidden
        cursor-pointer transition-all duration-200
        ${t.visible ? "animate-enter" : "animate-leave"}
        ${onClick ? "hover:bg-[#09113F] hover:-translate-y-0.5" : ""}
      `}
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
        className={`relative z-10 w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${image ? "" : iconBg}`}
      >
        {image ? <ProfileImage size={36} imageUrl={image} /> : icon}
      </div>

      {/* Text */}
      <div className="relative z-10 flex-1 min-w-0 pt-0.5">
        {title && <p className="text-sm font-bold text-white">{title}</p>}
        {message && (
          <p className="text-xs text-slate-400 mt-0.5 leading-relaxed line-clamp-2">
            {message}
          </p>
        )}
      </div>

      {/* Dismiss */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          toast.dismiss(t.id);
        }}
        className="relative z-10 shrink-0 w-6 h-6 flex items-center justify-center rounded-lg text-slate-500 hover:text-white hover:bg-white/10 transition-colors mt-0.5"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
