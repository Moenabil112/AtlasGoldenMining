import { economics } from '../data/atlasCopper'
import { SovereignContainer } from './SovereignContainer'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'
import { MetricCard } from './MetricCard'

/** النافذة 11 — اقتصاديات الحالة الأساسية */
export function EconomicsSection() {
  return (
    <SovereignContainer id="economics" tone="dark">
      <SectionHeader
        index="11"
        title={economics.titleAr}
        headline={economics.headlineAr}
        dark
      />

      <Reveal>
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {economics.metrics.map((m) => (
            <MetricCard
              key={m.labelAr}
              value={m.value}
              unit={m.unitAr}
              label={m.labelAr}
              dark
            />
          ))}
        </div>
      </Reveal>

      <Reveal delayMs={160}>
        <div className="mt-12 rounded-lg border border-gold-500/40 bg-gold-500/5 p-7">
          <p className="text-sm font-semibold leading-loose text-ivory-50">
            {economics.qualificationAr}
          </p>
          <p className="mt-4 border-t border-ivory-50/10 pt-4 text-sm leading-loose text-ivory-50/75">
            {economics.priceNoteAr}
          </p>
        </div>
      </Reveal>
    </SovereignContainer>
  )
}
