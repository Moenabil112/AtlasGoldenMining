import { capitalDeployment } from '../data/investmentOffer'
import { SovereignContainer } from './SovereignContainer'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'

/** القسم 7 — منطق توظيف رأس المال (مسارات دون نسب أو قيم رقمية) */
export function CapitalDeploymentSection() {
  return (
    <SovereignContainer id="capital-deployment">
      <SectionHeader
        index="07"
        title={capitalDeployment.titleAr}
        headline={capitalDeployment.headlineAr}
      />
      <Reveal>
        <p className="max-w-3xl leading-loose text-charcoal-700">
          {capitalDeployment.bodyAr}
        </p>
      </Reveal>

      <Reveal delayMs={140}>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capitalDeployment.pathwaysAr.map((pathway, i) => (
            <li
              key={pathway}
              className="flex items-center gap-4 rounded-lg border border-ivory-200 bg-ivory-100 p-5"
            >
              <span className="tabular-nums-latn flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest-950 text-sm font-bold text-gold-400">
                {i + 1}
              </span>
              <span className="text-sm font-semibold leading-relaxed text-forest-900">
                {pathway}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delayMs={200}>
        <p className="mt-10 rounded-lg border border-gold-600/40 bg-ivory-100 p-5 text-sm leading-loose text-charcoal-800">
          {capitalDeployment.ndaNoteAr}
        </p>
      </Reveal>
    </SovereignContainer>
  )
}
