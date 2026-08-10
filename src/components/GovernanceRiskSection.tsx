import { governance } from '../data/atlasCopper'
import { SovereignContainer } from './SovereignContainer'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'

/** النافذة 13 — الحوكمة وحماية المستثمر */
export function GovernanceRiskSection() {
  return (
    <SovereignContainer id="governance">
      <SectionHeader
        index="13"
        title={governance.titleAr}
        headline={governance.headlineAr}
      />

      <Reveal>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {governance.itemsAr.map((item) => (
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
        <p className="mt-10 max-w-3xl rounded-lg border border-gold-600/40 bg-ivory-100 p-6 text-sm font-semibold leading-loose text-charcoal-800">
          {governance.legalNoteAr}
        </p>
      </Reveal>
    </SovereignContainer>
  )
}
