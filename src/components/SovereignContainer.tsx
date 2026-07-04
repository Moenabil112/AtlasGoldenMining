import type { ReactNode } from 'react'

interface SovereignContainerProps {
  id?: string
  children: ReactNode
  /** خلفية القسم: فاتحة عاجية أو داكنة خضراء */
  tone?: 'light' | 'dark' | 'ivory'
  className?: string
}

/** حاوية قسم موحدة: شبكة عرض قصوى وهوامش متسقة */
export function SovereignContainer({
  id,
  children,
  tone = 'light',
  className = '',
}: SovereignContainerProps) {
  const toneClasses =
    tone === 'dark'
      ? 'bg-forest-950 text-ivory-50'
      : tone === 'ivory'
        ? 'bg-ivory-100 text-charcoal-900'
        : 'bg-ivory-50 text-charcoal-900'

  return (
    <section id={id} className={`${toneClasses} ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        {children}
      </div>
    </section>
  )
}
