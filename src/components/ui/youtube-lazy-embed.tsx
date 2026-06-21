"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { Play } from "lucide-react";

type YoutubeLazyEmbedProps = {
  embedUrl: string;
  title: string;
  className?: string;
  fallback: ReactNode;
};

export function YoutubeLazyEmbed({
  embedUrl,
  title,
  className = "",
  fallback,
}: YoutubeLazyEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className={className}
        src={`${embedUrl}?autoplay=1`}
        title={title}
      />
    );
  }

  return (
    <button
      aria-label={`播放${title}`}
      className={`group relative block ${className}`}
      onClick={() => setIsPlaying(true)}
      type="button"
    >
      {fallback}
      <span className="absolute inset-0 grid place-items-center bg-black/18 transition group-hover:bg-black/26">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-white/92 text-primary shadow-[0_18px_50px_rgba(0,0,0,0.28)] transition group-hover:scale-105">
          <Play aria-hidden="true" className="ml-1 h-7 w-7 fill-current" />
        </span>
      </span>
    </button>
  );
}
