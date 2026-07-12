import { closingStatement, institutional } from '../data/companyProfile'
import { brand } from '../data/investmentWindow'
import { SovereignContainer } from './SovereignContainer'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'

/** القسم 16 — الإغلاق المؤسسي وإخلاء المسؤولية للمستثمر المؤهل */
export function ClosingSection() {
  return (
    <SovereignContainer id="closing" tone="dark">
      <SectionHeader
        index="16"
        title={brand.nameAr}
        headline={closingStatement.titleAr}
        dark
      />
      <Reveal>
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          {closingStatement.bodyAr.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="leading-loose text-ivory-50/80">
              {paragraph}
            </p>
          ))}
        </div>
      </Reveal>

      <Reveal delayMs={180}>
        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-4">
          <a
            href="#data-room"
            className="rounded border border-gold-500 bg-gold-500/10 px-6 py-3 text-sm font-semibold text-gold-300 transition-colors hover:bg-gold-500/20"
          >
            {institutional.ndaCtaAr}
          </a>
        </div>
        <p className="mx-auto mt-10 max-w-3xl rounded-lg border border-ivory-50/15 bg-forest-900 p-6 text-center text-sm leading-loose text-ivory-50/70">
          {closingStatement.finalDisclaimerAr}
        </p>
        <p className="mt-8 text-center text-sm font-medium tracking-wide text-gold-400">
          {institutional.eyebrowAr}
        </p>
      </Reveal>
    </SovereignContainer>
  )
}
