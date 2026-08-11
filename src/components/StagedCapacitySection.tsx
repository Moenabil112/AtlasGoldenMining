import { stagedCapacity } from '../data/atlasCopper'
import { SovereignContainer } from './SovereignContainer'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'

/** النافذة 07 — القدرة المرحلية للمصنع */
export function StagedCapacitySection() {
  return (
    <SovereignContainer id="staged-capacity">
      <SectionHeader
        index="07"
        title={stagedCapacity.titleAr}
        headline={stagedCapacity.headlineAr}
      />
      <Reveal>
        <p className="max-w-3xl leading-loose text-charcoal-700">{stagedCapacity.bodyAr}</p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {stagedCapacity.stages.map((stage, i) => (
          <Reveal key={stage.tagAr} delayMs={i * 120}>
            <div className="flex h-full flex-col rounded-lg bg-forest-950 p-8 text-ivory-50">
              <span className="mb-4 inline-block w-fit rounded bg-gold-500/15 px-2.5 py-1 text-xs font-semibold text-gold-300">
                {stage.tagAr}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="tabular-nums-latn text-4xl font-bold text-ivory-50">
                  {stage.valueAr}
                </span>
                <span className="text-sm font-medium text-gold-400">{stage.unitAr}</span>
              </div>
              <p className="mt-4 text-sm leading-loose text-ivory-50/75">{stage.bodyAr}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delayMs={200}>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {stagedCapacity.pointsAr.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 rounded-lg border border-ivory-200 bg-ivory-100 p-5 text-sm leading-relaxed text-charcoal-800"
            >
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-600"
                aria-hidden="true"
              />
              {point}
            </li>
          ))}
        </ul>
      </Reveal>
    </SovereignContainer>
  )
}
