import { governanceRisk } from '../data/investmentOffer'
import { SovereignContainer } from './SovereignContainer'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'

/** القسم 14 — حوكمة مؤسسية وإدارة مرحلية للمخاطر */
export function GovernanceRiskSection() {
  return (
    <SovereignContainer id="governance-risk">
      <SectionHeader
        index="14"
        title={governanceRisk.titleAr}
        headline={governanceRisk.headlineAr}
      />

      <Reveal>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {governanceRisk.itemsAr.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-lg border border-ivory-200 bg-ivory-100 p-5 text-sm font-medium leading-relaxed text-forest-900"
            >
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-600"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delayMs={160}>
        <p className="mt-10 max-w-3xl border-s-2 border-gold-600 ps-5 text-base font-semibold leading-loose text-forest-900">
          {governanceRisk.highlightAr}
        </p>
      </Reveal>
    </SovereignContainer>
  )
}
