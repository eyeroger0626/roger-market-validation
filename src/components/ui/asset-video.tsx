"use client";

import type { ReactNode } from "react";
import { useState } from "react";

type AssetVideoProps = {
  src: string;
  className?: string;
  fallback: ReactNode;
  poster?: string;
};

export function AssetVideo({
  src,
  className = "",
  fallback,
  poster,
}: AssetVideoProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <>{fallback}</>;
  }

  return (
    <video
      className={className}
      controls
      onError={() => setHasError(true)}
      playsInline
      poster={poster}
      preload="metadata"
      src={src}
    />
  );
}
