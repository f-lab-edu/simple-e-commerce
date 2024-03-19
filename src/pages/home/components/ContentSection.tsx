import { ReactNode } from 'react';

interface ContentSectionProps {
  children: ReactNode;
}

export function ContentSection({ children }: ContentSectionProps) {
  return <section className="py-2.5">{children}</section>;
}
