import { company } from '../data/investmentWindow'
import { SovereignContainer } from './SovereignContainer'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'

/** القسم 2 — من هي أطلس الذهبية للتعدين؟ */
export function CompanySection() {
  return (
    <SovereignContainer id="company">
      <SectionHeader
        index="02"
        title={company.titleAr}
        headline={company.headlineAr}
      />
      <div className="grid gap-12 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div className="space-y-6">
            {company.bodyAr.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="leading-loose text-charcoal-700">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
        <Reveal delayMs={150} className="lg:col-span-2">
          <ul className="space-y-4 rounded-lg border border-ivory-200 bg-ivory-100 p-7">
            {company.pointsAr.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm leading-relaxed">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-600"
                  aria-hidden="true"
                />
                <span className="font-medium text-forest-900">{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </SovereignContainer>
  )
}
