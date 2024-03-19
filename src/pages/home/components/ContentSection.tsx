import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function ContentSection({ children }: Props) {
  return <section className="py-2.5">{children}</section>;
}
