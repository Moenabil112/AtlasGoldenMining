import { proposition } from '../data/atlasCopper'
import { SovereignContainer } from './SovereignContainer'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'

/** النافذة 08 — المقترح الاستثماري */
export function PropositionSection() {
  return (
    <SovereignContainer id="proposition" tone="dark">
      <SectionHeader
        index="08"
        title={proposition.titleAr}
        headline={proposition.headlineAr}
        dark
      />

      <Reveal>
        <p className="max-w-3xl rounded-lg border border-gold-500/30 bg-gold-500/5 p-7 text-base font-semibold leading-loose text-ivory-50">
          {proposition.statementAr}
        </p>
      </Reveal>

      <Reveal delayMs={140}>
        <dl className="mt-12 overflow-hidden rounded-lg border border-gold-500/25">
          {proposition.rows.map((row, i) => (
            <div
              key={row.labelAr}
              className={`flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 ${
                i % 2 === 0 ? 'bg-forest-900' : 'bg-forest-950'
              }`}
            >
              <dt className="shrink-0 text-sm text-ivory-50/55">{row.labelAr}</dt>
              <dd className="tabular-nums-latn text-sm font-semibold text-ivory-50 sm:text-end">
                {row.valueAr}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal delayMs={200}>
        <p className="mt-8 max-w-3xl leading-loose text-ivory-50/70">
          {proposition.clarificationAr}
        </p>
      </Reveal>
    </SovereignContainer>
  )
}
