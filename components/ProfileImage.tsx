"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

export interface ProfileImageProps {
  src?: string | StaticImageData;
  alt?: string;
  size?: number; // px
  priority?: boolean;
}

export default function ProfileImage({
  src,
  alt = 'Profile image',
  size = 256,
  priority = false,
}: ProfileImageProps) {
  const dim = `${size}px`;
  return (
    <motion.div
      className="relative"
      style={{ width: dim, height: dim }}
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      {/* Glow */}
      <div
        aria-hidden
        className="absolute -inset-8 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_60%)]"
      />
      {/* Background circle */}
      <div className="absolute inset-0 rounded-full bg-surface ring-1 ring-white/10 shadow-lg" />

      {/* Image mask or placeholder initials */}
      {src ? (
        <div className="relative z-10 h-full w-full rounded-full overflow-hidden">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 70vw, 320px"
            priority={priority}
            loading={priority ? undefined : 'lazy'}
            className="object-cover"
          />
        </div>
      ) : (
        <div className="relative z-10 h-full w-full rounded-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
          <span className="text-5xl font-semibold text-primary/90">FR</span>
        </div>
      )}
    </motion.div>
  );
}
