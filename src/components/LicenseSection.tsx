import { license } from '../data/investmentWindow'
import { SovereignContainer } from './SovereignContainer'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'
import { MapPanel } from './MapPanel'

/** القسم 3 — إيسكسي: أصل الإنتاج الأول (بطاقات الرخصة + الخريطة) */
export function LicenseSection() {
  return (
    <SovereignContainer id="license" tone="dark">
      <SectionHeader
        index="03"
        title={license.titleAr}
        headline={license.headlineAr}
        dark
      />
      <Reveal>
        <p className="max-w-3xl leading-loose text-ivory-50/75">{license.bodyAr}</p>
      </Reveal>

      {/* بطاقة حقائق الرخصة */}
      <Reveal delayMs={120}>
        <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-ivory-50/10 bg-ivory-50/10 md:grid-cols-4">
          {license.facts.map((fact) => (
            <div key={fact.labelAr} className="bg-forest-900 p-5">
              <dt className="mb-1.5 text-xs text-ivory-50/50">{fact.labelAr}</dt>
              <dd className="tabular-nums-latn text-sm font-semibold text-ivory-50 md:text-base">
                {fact.valueAr}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>

      {/* بطاقة الهوية القانونية */}
      <Reveal delayMs={200}>
        <div className="mt-8 rounded-lg border border-gold-500/30 bg-gold-500/5 p-6">
          <h3 className="mb-2 text-sm font-bold text-gold-300">
            {license.entityCard.titleAr}
          </h3>
          <p className="text-sm leading-loose text-ivory-50/75">
            {license.entityCard.bodyAr}
          </p>
        </div>
      </Reveal>

      {/* الخريطة */}
      <Reveal delayMs={250}>
        <div className="mt-12">
          <h3 className="mb-5 text-lg font-bold text-ivory-50">
            محيط إيسكسي ونطاق الموافقة البيئية
          </h3>
          <MapPanel />
        </div>
      </Reveal>

      <Reveal delayMs={300}>
        <p className="mt-8 border-s-2 border-gold-500 ps-4 text-sm font-medium leading-relaxed text-gold-300">
          {license.protectionAr}
        </p>
      </Reveal>
    </SovereignContainer>
  )
}
