import { license } from '../data/investmentWindow'
import { SovereignContainer } from './SovereignContainer'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'
import { MapPanel } from './MapPanel'

/** القسم 6 — إيسكسي: نقطة الإنتاج الأولى (البيانات، الخريطة، خط الأساس) */
export function IsseksiAnchorSection() {
  return (
    <SovereignContainer id="isseksi">
      <SectionHeader
        index="06"
        title={license.titleAr}
        headline={license.headlineAr}
      />

      <Reveal>
        <div className="max-w-3xl space-y-5">
          {license.bodyAr.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="leading-loose text-charcoal-700">
              {paragraph}
            </p>
          ))}
        </div>
      </Reveal>

      {/* أرقام خط الأساس */}
      <Reveal delayMs={120}>
        <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-ivory-200 bg-ivory-200 sm:grid-cols-3 lg:grid-cols-5">
          {license.baseline.map((stat) => (
            <div key={stat.labelAr} className="bg-ivory-50 p-5">
              <dt className="mb-1.5 text-xs text-charcoal-700/70">{stat.labelAr}</dt>
              <dd className="tabular-nums-latn text-base font-bold text-forest-900 md:text-lg">
                {stat.valueAr}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 rounded-lg border border-gold-600/40 bg-ivory-100 p-5 text-sm leading-loose text-charcoal-800">
          {license.baselineNoteAr}
        </p>
      </Reveal>

      {/* بطاقة حقائق الرخصة */}
      <Reveal delayMs={180}>
        <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-forest-800/20 bg-forest-800/20 md:grid-cols-4">
          {license.facts.map((fact) => (
            <div key={fact.labelAr} className="bg-forest-950 p-5">
              <dt className="mb-1.5 text-xs text-ivory-50/50">{fact.labelAr}</dt>
              <dd className="tabular-nums-latn text-sm font-semibold text-ivory-50 md:text-base">
                {fact.valueAr}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>

      {/* بطاقة الهوية القانونية */}
      <Reveal delayMs={220}>
        <div className="mt-8 rounded-lg border border-ivory-200 bg-ivory-100 p-6">
          <h3 className="mb-2 text-sm font-bold text-forest-900">
            {license.entityCard.titleAr}
          </h3>
          <p className="text-sm leading-loose text-charcoal-700">
            {license.entityCard.bodyAr}
          </p>
        </div>
      </Reveal>

      {/* الخريطة */}
      <Reveal delayMs={260}>
        <div className="mt-12">
          <h3 className="mb-5 text-lg font-bold text-forest-900">
            محيط إيسكسي ونطاق الموافقة البيئية
          </h3>
          <MapPanel />
        </div>
      </Reveal>

      <Reveal delayMs={300}>
        <p className="mt-8 border-s-2 border-gold-600 ps-4 text-sm font-medium leading-relaxed text-forest-900">
          {license.protectionAr}
        </p>
      </Reveal>
    </SovereignContainer>
  )
}
