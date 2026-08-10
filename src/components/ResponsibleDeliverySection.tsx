import { responsible } from '../data/atlasCopper'
import { siteImages } from '../data/images'
import { SovereignContainer } from './SovereignContainer'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'
import { ImagePanel } from './ImagePanel'

/** النافذة 15 — التنفيذ المسؤول للمشروع (ESG) */
export function ResponsibleDeliverySection() {
  return (
    <SovereignContainer id="responsible">
      <SectionHeader
        index="15"
        title={responsible.titleAr}
        headline={responsible.headlineAr}
      />

      <div className="grid items-start gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <p className="leading-loose text-charcoal-700">{responsible.bodyAr}</p>
          <ul className="mt-8 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
            {responsible.itemsAr.map((point) => (
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
            labelAr="إدارة المياه والسلامة وإعادة التأهيل"
            heightClass="h-64 md:h-80"
          />
        </Reveal>
      </div>

      <Reveal delayMs={200}>
        <p className="mt-12 max-w-3xl rounded-lg border border-gold-600/40 bg-ivory-100 p-5 text-sm font-medium leading-loose text-charcoal-800">
          {responsible.closureNoteAr}
        </p>
      </Reveal>
    </SovereignContainer>
  )
}
