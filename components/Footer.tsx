"use client";
import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import PageNumber from './PageNumber';

const socials = [
  {
    icon: Mail,
    href: 'mailto:masih.azizpour@gmail.com',
    label: 'Email Masih Azizpour',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/masih-azizpour',
    label: 'LinkedIn',
  },
  {
    icon: Github,
    href: 'https://github.com/masih-azizpour',
    label: 'GitHub',
  },
];

interface FooterProps {
  pageNumber?: string;
}

export default function Footer({ pageNumber }: FooterProps) {
  return (
    <div className="hero-card__footer hero-card__footer--icons">
      <div className="social-links social-links--tight">
        {socials.map(({ icon: Icon, href, label }) => (
          <a key={href} href={href} target="_blank" rel="noreferrer" aria-label={label}>
            <Icon size={18} strokeWidth={1.6} />
          </a>
        ))}
      </div>
      {pageNumber && <PageNumber value={pageNumber} />}
    </div>
  );
}
