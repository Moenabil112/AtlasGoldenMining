import { licenseMap } from '../data/atlasCopper'
import { SovereignContainer } from './SovereignContainer'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'
import { MapPanel } from './MapPanel'

/** النافذة 16 — خريطة الرخصة والأدلة الداعمة */
export function LicenseMapSection() {
  return (
    <SovereignContainer id="license-map" tone="ivory">
      <SectionHeader
        index="16"
        title={licenseMap.titleAr}
        headline={licenseMap.headlineAr}
      />
      <Reveal>
        <p className="max-w-3xl leading-loose text-charcoal-700">{licenseMap.bodyAr}</p>
      </Reveal>

      <Reveal delayMs={120}>
        <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-ivory-200 bg-ivory-200 sm:grid-cols-4">
          {licenseMap.facts.map((fact) => (
            <div key={fact.labelAr} className="bg-ivory-50 p-5">
              <dt className="mb-1.5 text-xs text-charcoal-700/70">{fact.labelAr}</dt>
              <dd
                className="tabular-nums-latn text-sm font-bold text-forest-900"
                dir={fact.ltr ? 'ltr' : undefined}
              >
                {fact.valueAr}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal delayMs={160}>
        <div className="mt-10">
          <MapPanel />
        </div>
      </Reveal>

      <Reveal delayMs={200}>
        <p className="mt-8 max-w-3xl border-s-2 border-gold-600 ps-4 text-sm font-medium leading-loose text-forest-900">
          {licenseMap.disclaimerAr}
        </p>
      </Reveal>
    </SovereignContainer>
  )
}
