import { ReactNode } from 'react';

interface SectionCardProps {
  number: number;
  title: string;
  children: ReactNode;
}

export function SectionCard({ number, title, children }: SectionCardProps) {
  return (
    <article className="rounded-2xl border border-gray-100 bg-white p-4 shadow-card sm:p-6 md:p-8">
      <div className="mb-4 flex items-start gap-3 sm:mb-5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-blue-500 text-sm font-bold text-white sm:h-9 sm:w-9">
          {number}
        </div>
        <h2 className="min-w-0 flex-1 text-base font-bold leading-snug text-gray-900 sm:text-lg md:text-xl">
          {title}
        </h2>
      </div>
      {children}
    </article>
  );
}
