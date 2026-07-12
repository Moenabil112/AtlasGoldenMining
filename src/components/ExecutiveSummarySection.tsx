import { executiveSummary } from '../data/companyProfile'
import { SovereignContainer } from './SovereignContainer'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'

/** القسم 2 — الملخص التنفيذي */
export function ExecutiveSummarySection() {
  return (
    <SovereignContainer id="executive-summary" tone="ivory">
      <SectionHeader
        index="02"
        title={executiveSummary.titleAr}
        headline={executiveSummary.headlineAr}
      />
      <Reveal>
        <div className="max-w-3xl space-y-6">
          {executiveSummary.bodyAr.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="leading-loose text-charcoal-700">
              {paragraph}
            </p>
          ))}
        </div>
      </Reveal>
      <Reveal delayMs={150}>
        <p className="mt-10 max-w-3xl border-s-2 border-gold-600 ps-5 text-base font-semibold leading-loose text-forest-900">
          {executiveSummary.highlightAr}
        </p>
      </Reveal>
    </SovereignContainer>
  )
}
