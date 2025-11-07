'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollManager() {
  const pathname = usePathname();

  useEffect(() => {
    const main = document.getElementById('main');
    const top = main ? main.offsetTop : 0;
    window.scrollTo({ top, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return null;
}
