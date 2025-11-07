'use client';

import React from 'react';

interface CasePageNumberProps {
  current: string;
  parent: string;
}

export default function CasePageNumber({ current, parent }: CasePageNumberProps) {
  return (
    <div className="page-indicator" aria-hidden>
      <span className="page-indicator__line" />
      <span className="tabular-nums">
        {current} / {parent}
      </span>
      <span className="page-indicator__line page-indicator__line--long" />
    </div>
  );
}
