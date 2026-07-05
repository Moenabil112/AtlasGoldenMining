import { saudiBridge, closingStatement } from '../data/companyProfile'
import { brand } from '../data/investmentWindow'
import { SovereignContainer } from './SovereignContainer'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'

/** القسم 10 — الجسر المغربي–السعودي، تأهيل الكوادر، والإغلاق المؤسسي */
export function BridgeClosingSection() {
  return (
    <SovereignContainer id="bridge" tone="dark">
      <SectionHeader
        index="10"
        title={saudiBridge.titleAr}
        headline={saudiBridge.headlineAr}
        dark
      />

      <div className="grid gap-12 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div className="space-y-6">
            {saudiBridge.bodyAr.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="leading-loose text-ivory-50/75">
                {paragraph}
              </p>
            ))}
          </div>
          <ul className="mt-7 space-y-3">
            {saudiBridge.alignmentPointsAr.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-sm leading-relaxed text-ivory-50/85"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400"
                  aria-hidden="true"
                />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delayMs={150} className="lg:col-span-2">
          <div className="rounded-lg border border-gold-500/30 bg-gold-500/5 p-7">
            <span className="mb-4 block h-px w-10 bg-gold-400" aria-hidden="true" />
            <h3 className="mb-3 text-lg font-bold text-gold-300">
              {saudiBridge.talentCard.titleAr}
            </h3>
            <p className="text-sm leading-loose text-ivory-50/80">
              {saudiBridge.talentCard.bodyAr}
            </p>
          </div>
        </Reveal>
      </div>

      {/* الإغلاق المؤسسي */}
      <Reveal delayMs={250}>
        <div className="mt-20 border-t border-ivory-50/10 pt-14">
          <h3 className="mx-auto max-w-3xl text-center text-2xl font-bold leading-snug text-ivory-50 md:text-3xl">
            {closingStatement.titleAr}
          </h3>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-center">
            {closingStatement.bodyAr.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="leading-loose text-ivory-50/75"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl rounded-lg border border-ivory-50/15 bg-forest-900 p-6 text-center text-sm leading-loose text-ivory-50/70">
            {closingStatement.finalDisclaimerAr}
          </p>
          <p className="mt-10 text-center text-sm font-medium tracking-wide text-gold-400">
            {brand.nameAr} — {brand.taglineAr}
          </p>
        </div>
      </Reveal>
    </SovereignContainer>
  )
}
