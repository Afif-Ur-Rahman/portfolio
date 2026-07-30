"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, FileText } from "lucide-react";
import { FaGooglePlay, FaAppStore } from "react-icons/fa";
import { useState } from "react";
import { Skeleton } from "./skeleton";

type ProjectCardProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  details?: boolean;
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
  details = false,
}: ProjectCardProps) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#DAB025] hover:shadow-lg">
      <div className="relative aspect-16/10 w-full overflow-hidden bg-[#09113F] border-b border-gray-200 transition-all duration-300 hover:border-[#DAB025]">
        {isLoading && <Skeleton />}

        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className={`object-cover transition-transform duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoadingComplete={() => setIsLoading(false)}
        />

        {(playStoreUrl || appStoreUrl) && (
          <div className="absolute right-2 top-2 flex gap-1.5">
            {playStoreUrl && (
              <Link
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white shadow-[0_0_8px_2px_#DAB025]"
                aria-label="Google Play"
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
              >
                <FaAppStore size={20} />
              </Link>
            )}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-1 text-base font-bold text-[#003B73]">
          {title}
        </h3>

        <p className="mt-1.5 line-clamp-3 text-xs leading-5 text-gray-600">
          {description}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#DAB025]/10 px-2 py-0.5 text-[10px] font-semibold text-[#DAB025]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-2 flex items-center justify-between gap-3">
          {details && (
            <Link
              href={`/project/${id}`}
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-1 text-xs font-semibold text-[#0A4A8A] hover:text-[#DAB025] hover:underline"
            >
              <FileText size={13} />
              View Details
            </Link>
          )}
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-1 text-xs font-semibold text-[#0A4A8A] hover:text-[#DAB025] hover:underline"
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
