import { esgContent } from '../data/esg'
import { siteImages } from '../data/images'
import { SovereignContainer } from './SovereignContainer'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'
import { ImagePanel } from './ImagePanel'

/** القسم 9 — التعدين الأخضر، ESG، والتمويل الأخضر */
export function ESGGreenFinanceSection() {
  return (
    <SovereignContainer id="esg" tone="ivory">
      <SectionHeader
        index="09"
        title={esgContent.titleAr}
        headline={esgContent.headlineAr}
      />

      <div className="grid items-start gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <p className="leading-loose text-charcoal-700">{esgContent.bodyAr}</p>
          <ul className="mt-8 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
            {esgContent.pointsAr.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-sm leading-relaxed text-charcoal-800"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-600"
                  aria-hidden="true"
                />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delayMs={150} className="lg:col-span-2">
          <ImagePanel
            image={siteImages.greenMining}
            labelAr="طاقة متجددة وإدارة مياه وتأهيل موقع"
            heightClass="h-64 md:h-80"
          />
        </Reveal>
      </div>

      <Reveal delayMs={200}>
        <p className="mt-12 max-w-3xl border-s-2 border-gold-600 ps-5 text-base font-semibold leading-loose text-forest-900">
          {esgContent.highlightAr}
        </p>
      </Reveal>

      {/* التمويل الأخضر */}
      <Reveal delayMs={240}>
        <div className="mt-12 rounded-lg bg-forest-950 p-8 text-ivory-50">
          <h3 className="mb-4 text-lg font-bold text-gold-400">
            {esgContent.greenFinance.titleAr}
          </h3>
          <p className="max-w-3xl leading-loose text-ivory-50/80">
            {esgContent.greenFinance.bodyAr}
          </p>
          <p className="mt-6 border-t border-ivory-50/10 pt-4 text-sm leading-loose text-ivory-50/60">
            {esgContent.greenFinance.cautionAr}
          </p>
        </div>
      </Reveal>
    </SovereignContainer>
  )
}
