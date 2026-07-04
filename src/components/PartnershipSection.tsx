import { partnership } from '../data/investmentWindow'
import { SovereignContainer } from './SovereignContainer'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'

/** القسم 5 — هيكل الشراكة: المساهمة مقابل المشاركة الإنتاجية */
export function PartnershipSection() {
  const columns = [partnership.contribution, partnership.participation]

  return (
    <SovereignContainer id="partnership" tone="ivory">
      <SectionHeader
        index="05"
        title={partnership.titleAr}
        headline={partnership.headlineAr}
      />
      <Reveal>
        <p className="max-w-3xl leading-loose text-charcoal-700">{partnership.bodyAr}</p>
      </Reveal>

      {/* عمودان: المساهمة / المشاركة الإنتاجية */}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {columns.map((col, i) => (
          <Reveal key={col.titleAr} delayMs={i * 120}>
            <div className="flex h-full flex-col rounded-lg border border-ivory-200 bg-ivory-50 p-8">
              <h3 className="mb-3 text-sm font-bold tracking-wide text-gold-600">
                {col.titleAr}
              </h3>
              <p className="tabular-nums-latn mb-6 text-2xl font-bold leading-snug text-forest-900">
                {col.valueAr}
              </p>
              <ul className="mt-auto space-y-3">
                {col.pointsAr.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-charcoal-700">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-600"
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      {/* حدود الشراكة */}
      <Reveal delayMs={200}>
        <div className="mt-10 flex flex-wrap gap-3">
          {partnership.boundariesAr.map((boundary) => (
            <span
              key={boundary}
              className="rounded-full border border-forest-800/25 bg-ivory-50 px-4 py-2 text-sm font-semibold text-forest-900"
            >
              {boundary}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal delayMs={260}>
        <p className="mt-8 max-w-3xl leading-loose text-charcoal-700">
          {partnership.clarificationAr}
        </p>
        <div className="mt-8 rounded-lg bg-forest-950 p-7 text-ivory-50">
          <h3 className="mb-4 text-sm font-bold text-gold-400">
            ما تحتفظ به أطلس الذهبية للتعدين
          </h3>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {partnership.atlasRetainsAr.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm font-medium">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </SovereignContainer>
  )
}
