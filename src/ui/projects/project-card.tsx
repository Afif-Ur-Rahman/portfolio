"use client";

import { ExternalLink, FileText, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { FaGooglePlay, FaAppStore } from "react-icons/fa";

import { Skeleton } from "@/components";

type ProjectCardProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
};

export const ProjectCard = ({
  id,
  title,
  description,
  image,
  tags,
  liveUrl,
  playStoreUrl,
  appStoreUrl,
}: ProjectCardProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isNavigating, startTransition] = useTransition();

  const handleCardClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("a")) return;

    startTransition(() => {
      router.push(`/project/${id}`);
    });
  };

  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#DAB025] hover:shadow-lg ${
        isNavigating ? "pointer-events-none cursor-wait" : "cursor-pointer"
      }`}
      onClick={handleCardClick}
    >
      {isNavigating && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#09113F]/60">
          <Loader2 className="h-8 w-8 animate-spin text-[#DAB025]" />
        </div>
      )}

      <div className="relative aspect-16/10 w-full overflow-hidden border-b border-gray-200 bg-[#09113F] transition-all duration-300 group-hover:border-[#DAB025]">
        {isLoading && <Skeleton />}

        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className={`object-cover transition-transform duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setIsLoading(false)}
        />

        {(playStoreUrl || appStoreUrl) && (
          <div className="absolute top-2 right-2 flex gap-1.5">
            {playStoreUrl && (
              <Link
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white shadow-[0_0_8px_2px_#DAB025]"
                aria-label="Google Play"
                onClick={e => e.stopPropagation()}
              >
                <FaGooglePlay size={16} />
              </Link>
            )}
            {appStoreUrl && (
              <Link
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white shadow-[0_0_8px_2px_#DAB025]"
                aria-label="App Store"
                onClick={e => e.stopPropagation()}
              >
                <FaAppStore size={20} />
              </Link>
            )}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-1 text-base font-bold text-[#003B73]">{title}</h3>

        <p className="mt-1.5 line-clamp-3 text-xs leading-5 text-gray-600">{description}</p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.map(tag => (
            <span
              key={tag}
              className="rounded-full bg-[#DAB025]/10 px-2 py-0.5 text-[10px] font-semibold text-[#DAB025]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-2 flex items-center justify-between gap-3">
          <Link
            href={`/project/${id}`}
            className="flex w-fit items-center gap-1 text-xs font-semibold text-[#0A4A8A] hover:text-[#DAB025] hover:underline"
            onClick={e => e.stopPropagation()}
          >
            <FileText size={13} />
            View Details
          </Link>
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-1 text-xs font-semibold text-[#0A4A8A] hover:text-[#DAB025] hover:underline"
              onClick={e => e.stopPropagation()}
            >
              <ExternalLink size={13} />
              Live Website
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
