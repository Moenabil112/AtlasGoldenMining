import { phasedInvestment } from '../data/investmentOffer'
import { SovereignContainer } from './SovereignContainer'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'

/** القسم 8 — الهيكل الاستثماري المرحلي المرتبط بنقاط تحقق */
export function PhasedInvestmentSection() {
  return (
    <SovereignContainer id="phased" tone="ivory">
      <SectionHeader
        index="08"
        title={phasedInvestment.titleAr}
        headline={phasedInvestment.headlineAr}
      />
      <Reveal>
        <p className="max-w-3xl leading-loose text-charcoal-700">
          {phasedInvestment.bodyAr}
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {phasedInvestment.phases.map((phase, i) => (
          <Reveal key={phase.titleAr} delayMs={i * 80}>
            <div className="flex h-full flex-col rounded-lg border border-ivory-200 bg-ivory-50 p-6">
              <span className="tabular-nums-latn mb-4 flex h-9 w-9 items-center justify-center rounded-full border-2 border-gold-600 text-sm font-bold text-forest-900">
                {i + 1}
              </span>
              <h3 className="mb-4 text-sm font-bold text-forest-900">{phase.titleAr}</h3>
              <ul className="space-y-2.5">
                {phase.itemsAr.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-charcoal-700"
                  >
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-600"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </SovereignContainer>
  )
}
