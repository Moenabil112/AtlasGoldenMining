import { capabilities } from '../data/companyProfile'
import { siteImages } from '../data/images'
import { SovereignContainer } from './SovereignContainer'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'
import { ImagePanel } from './ImagePanel'

/** القسم 3 — القدرات والعمق الفني */
export function CapabilitiesSection() {
  return (
    <SovereignContainer id="capabilities" tone="ivory">
      <SectionHeader
        index="03"
        title={capabilities.titleAr}
        headline={capabilities.headlineAr}
      />

      <div className="grid items-start gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <p className="leading-loose text-charcoal-700">{capabilities.bodyAr}</p>
          <ul className="mt-8 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
            {capabilities.itemsAr.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-relaxed text-charcoal-800"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-600"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delayMs={150} className="lg:col-span-2">
          <ImagePanel
            image={siteImages.fieldTeam}
            labelAr="فرق جيولوجية وهندسية في الميدان"
            heightClass="h-64 md:h-80"
          />
        </Reveal>
      </div>

      <Reveal delayMs={220}>
        <p className="mt-12 max-w-3xl border-s-2 border-gold-600 ps-5 text-base font-semibold leading-loose text-forest-900">
          {capabilities.highlightAr}
        </p>
      </Reveal>
    </SovereignContainer>
  )
}
