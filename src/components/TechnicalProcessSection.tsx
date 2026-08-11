import { process } from '../data/atlasCopper'
import { siteImages } from '../data/images'
import { SovereignContainer } from './SovereignContainer'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'
import { ImagePanel } from './ImagePanel'

/** النافذة 06 — العملية الفنية (Heap Leach–SX/EW) */
export function TechnicalProcessSection() {
  return (
    <SovereignContainer id="process" tone="ivory">
      <SectionHeader index="06" title={process.titleAr} headline={process.headlineAr} />

      <div className="grid items-start gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <p className="leading-loose text-charcoal-700">{process.bodyAr}</p>
        </Reveal>
        <Reveal delayMs={150} className="lg:col-span-2">
          <ImagePanel
            image={siteImages.processing}
            labelAr="منشأة هيدروميتالورجية لإنتاج الكاثود"
            heightClass="h-48 md:h-56"
          />
        </Reveal>
      </div>

      <Reveal delayMs={160}>
        <ol className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {process.stepsAr.map((step, i) => (
            <li
              key={step}
              className="flex items-center gap-4 rounded-lg border border-ivory-200 bg-ivory-50 p-4 sm:p-5"
            >
              <span className="tabular-nums-latn flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest-950 text-xs font-bold text-gold-400">
                {i + 1}
              </span>
              <span className="text-sm font-semibold leading-relaxed text-forest-900">
                {step}
              </span>
            </li>
          ))}
        </ol>
      </Reveal>

      <Reveal delayMs={220}>
        <p className="mt-8 border-s-2 border-gold-600 ps-4 text-sm font-medium leading-loose text-forest-900">
          {process.noteAr}
        </p>
      </Reveal>
    </SovereignContainer>
  )
}
