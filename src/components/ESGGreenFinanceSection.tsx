import { esgContent } from '../data/esg'
import { siteImages } from '../data/images'
import { SovereignContainer } from './SovereignContainer'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'
import { ImagePanel } from './ImagePanel'

/** القسم 13 — ESG والتمويل المستدام */
export function ESGGreenFinanceSection() {
  return (
    <SovereignContainer id="esg" tone="ivory">
      <SectionHeader
        index="13"
        title={esgContent.titleAr}
        headline={esgContent.headlineAr}
      />

      <div className="grid items-start gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div className="mb-6 flex flex-wrap gap-2.5">
            {esgContent.framingAr.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-gold-600/40 bg-ivory-50 px-3.5 py-1.5 text-xs font-semibold text-forest-900"
              >
                {chip}
              </span>
            ))}
          </div>
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
        <p className="mt-12 max-w-3xl rounded-lg border border-gold-600/40 bg-ivory-100 p-5 text-sm font-medium leading-loose text-charcoal-800">
          {esgContent.cautionAr}
        </p>
      </Reveal>
    </SovereignContainer>
  )
}
