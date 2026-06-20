"use client";

import { X } from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";
import { AssetImage } from "@/components/ui/asset-image";

type LightboxImageProps = {
  src: string;
  alt: string;
  className?: string;
  fallback: ReactNode;
};

export function LightboxImage({
  src,
  alt,
  className = "",
  fallback,
}: LightboxImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        aria-label={`放大檢視：${alt}`}
        className="relative h-full w-full cursor-zoom-in overflow-hidden text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        onClick={() => setIsOpen(true)}
        type="button"
      >
        <AssetImage
          alt={alt}
          className={className}
          fallback={fallback}
          src={src}
        />
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm sm:p-8"
          onClick={() => setIsOpen(false)}
          role="presentation"
        >
          <button
            aria-label="關閉放大圖片"
            className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white text-primary shadow-soft transition hover:bg-background focus:outline-none focus:ring-2 focus:ring-white sm:right-6 sm:top-6"
            onClick={() => setIsOpen(false)}
            type="button"
          >
            <X aria-hidden="true" className="h-5 w-5" />
          </button>
          <div
            className="relative h-[82vh] w-full max-w-6xl overflow-hidden rounded-[1.5rem] border border-white/15 bg-white p-3 shadow-[0_30px_90px_rgba(0,0,0,0.35)]"
            onClick={(event) => event.stopPropagation()}
          >
            <AssetImage
              alt={alt}
              className="object-contain"
              fallback={fallback}
              src={src}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
