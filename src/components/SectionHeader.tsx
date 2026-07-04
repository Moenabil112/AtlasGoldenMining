import { Reveal } from './Reveal'

interface SectionHeaderProps {
  index: string
  title: string
  headline: string
  /** ألوان مناسبة للأقسام الداكنة */
  dark?: boolean
}

/** ترويسة قسم: رقم تسلسلي، عنوان قصير، وخلاصة قوية من سطر واحد */
export function SectionHeader({ index, title, headline, dark = false }: SectionHeaderProps) {
  return (
    <Reveal>
      <div className="mb-12 md:mb-16">
        <div className="mb-4 flex items-center gap-4">
          <span
            className={`tabular-nums-latn text-sm font-semibold tracking-widest ${
              dark ? 'text-gold-400' : 'text-gold-600'
            }`}
          >
            {index}
          </span>
          <span
            className={`h-px w-16 ${dark ? 'bg-gold-400/50' : 'bg-gold-600/50'}`}
            aria-hidden="true"
          />
          <span
            className={`text-sm font-medium ${
              dark ? 'text-ivory-50/60' : 'text-charcoal-700/70'
            }`}
          >
            {title}
          </span>
        </div>
        <h2
          className={`max-w-3xl text-3xl font-bold leading-snug md:text-4xl ${
            dark ? 'text-ivory-50' : 'text-forest-900'
          }`}
        >
          {headline}
        </h2>
      </div>
    </Reveal>
  )
}
