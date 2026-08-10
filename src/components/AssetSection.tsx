import { asset } from '../data/atlasCopper'
import { siteImages } from '../data/images'
import { SovereignContainer } from './SovereignContainer'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'
import { ImagePanel } from './ImagePanel'

/** النافذة 04 — أصل منجم أطلس للنحاس (أساس التصميم والدراسة) */
export function AssetSection() {
  return (
    <SovereignContainer id="asset" tone="ivory">
      <SectionHeader index="04" title={asset.titleAr} headline={asset.headlineAr} />

      <div className="grid items-start gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <p className="leading-loose text-charcoal-700">{asset.bodyAr}</p>
        </Reveal>
        <Reveal delayMs={150} className="lg:col-span-2">
          <ImagePanel
            image={siteImages.terrain}
            labelAr="تضاريس جهة بني ملال – خنيفرة"
            heightClass="h-48 md:h-56"
          />
        </Reveal>
      </div>

      <Reveal delayMs={140}>
        <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-forest-800/15 bg-forest-800/15 sm:grid-cols-3">
          {asset.facts.map((fact) => (
            <div key={fact.labelAr} className="bg-forest-950 p-5">
              <dt className="mb-1.5 text-xs text-ivory-50/50">{fact.labelAr}</dt>
              <dd
                className="tabular-nums-latn text-sm font-semibold text-ivory-50"
                dir={fact.ltr ? 'ltr' : undefined}
              >
                {fact.valueAr}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal delayMs={200}>
        <p className="mt-8 max-w-3xl rounded-lg border border-gold-600/40 bg-ivory-50 p-5 text-sm font-medium leading-loose text-charcoal-800">
          {asset.qualificationAr}
        </p>
      </Reveal>
    </SovereignContainer>
  )
}
