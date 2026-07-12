import { offtake } from '../data/digitalPartners'
import { siteImages } from '../data/images'
import { SovereignContainer } from './SovereignContainer'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'
import { ImagePanel } from './ImagePanel'

/** القسم 10 — عقود الأوفتيك كأداة للتمويل والتوريد */
export function OfftakeSection() {
  return (
    <SovereignContainer id="offtake" tone="ivory">
      <SectionHeader index="10" title={offtake.titleAr} headline={offtake.headlineAr} />

      <div className="grid items-start gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <p className="leading-loose text-charcoal-700">{offtake.bodyAr}</p>
          <ul className="mt-8 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
            {offtake.functionsAr.map((fn) => (
              <li
                key={fn}
                className="flex items-start gap-3 text-sm leading-relaxed text-charcoal-800"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-600"
                  aria-hidden="true"
                />
                {fn}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delayMs={150} className="lg:col-span-2">
          <ImagePanel
            image={siteImages.offtake}
            labelAr="عقود الأوفتيك وسلاسل الإمداد"
            heightClass="h-64 md:h-80"
          />
        </Reveal>
      </div>
    </SovereignContainer>
  )
}
