"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useState } from "react";

type AssetImageProps = {
  src: string;
  alt: string;
  className?: string;
  fallback: ReactNode;
  fill?: boolean;
  height?: number;
  width?: number;
};

export function AssetImage({
  src,
  alt,
  className = "",
  fallback,
  fill = true,
  height,
  width,
}: AssetImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <>{fallback}</>;
  }

  if (!fill && width && height) {
    return (
      <Image
        alt={alt}
        className={className}
        height={height}
        onError={() => setHasError(true)}
        sizes="(min-width: 1024px) 55vw, 100vw"
        src={src}
        width={width}
      />
    );
  }

  return (
    <Image
      alt={alt}
      className={className}
      fill
      onError={() => setHasError(true)}
      sizes="(min-width: 1024px) 45vw, 100vw"
      src={src}
    />
  );
}
