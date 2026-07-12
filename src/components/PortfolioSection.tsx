import { portfolio } from '../data/assetPortfolio'
import { siteImages } from '../data/images'
import { SovereignContainer } from './SovereignContainer'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'
import { ImagePanel } from './ImagePanel'
import { MapPanel } from './MapPanel'

/** القسم 5 — محفظة أطلس التعدينية (المشروعات، المعادن، إيسكسي والخريطة) */
export function PortfolioSection() {
  const op = portfolio.isseksiOperational

  return (
    <SovereignContainer id="portfolio" tone="ivory">
      <SectionHeader
        index="05"
        title={portfolio.titleAr}
        headline={portfolio.headlineAr}
      />

      <div className="grid items-start gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <p className="leading-loose text-charcoal-700">{portfolio.bodyAr}</p>
        </Reveal>
        <Reveal delayMs={150} className="lg:col-span-2">
          <ImagePanel
            image={siteImages.terrain}
            labelAr="تضاريس جهة بني ملال – خنيفرة"
            heightClass="h-48 md:h-56"
          />
        </Reveal>
      </div>

      {/* بطاقات مكونات المحفظة */}
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {[portfolio.isseksi, portfolio.additional].map((item, i) => (
          <Reveal key={item.titleAr} delayMs={i * 100}>
            <div className="flex h-full flex-col rounded-lg border border-ivory-200 bg-ivory-50 p-7">
              <span className="mb-4 inline-block w-fit rounded bg-forest-950 px-2.5 py-1 text-xs font-semibold text-gold-300">
                {item.tagAr}
              </span>
              <h3 className="mb-4 text-lg font-bold text-forest-900">{item.titleAr}</h3>
              <ul className="space-y-3">
                {item.pointsAr.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm leading-relaxed text-charcoal-700"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-600"
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
        {/* بطاقة نطاق المعادن */}
        <Reveal delayMs={200}>
          <div className="flex h-full flex-col rounded-lg bg-forest-950 p-7 text-ivory-50">
            <span className="mb-4 inline-block w-fit rounded bg-gold-500/15 px-2.5 py-1 text-xs font-semibold text-gold-300">
              {portfolio.mineralsScope.tagAr}
            </span>
            <h3 className="mb-4 text-lg font-bold text-ivory-50">
              {portfolio.mineralsScope.titleAr}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {portfolio.mineralsScope.mineralsAr.map((mineral) => (
                <span
                  key={mineral}
                  className="rounded-full border border-gold-400/40 px-4 py-1.5 text-sm font-semibold text-gold-300"
                >
                  {mineral}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delayMs={240}>
        <p className="mt-8 border-s-2 border-gold-600 ps-4 text-sm font-medium leading-loose text-forest-900">
          {portfolio.cautionAr}
        </p>
      </Reveal>

      {/* إيسكسي — معلومات تشغيلية داعمة */}
      <Reveal delayMs={120}>
        <div className="mt-16 border-t border-ivory-200 pt-12">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-gold-600" aria-hidden="true" />
            <h3 className="text-xl font-bold text-forest-900 md:text-2xl">
              {op.titleAr}
            </h3>
          </div>
          <p className="max-w-3xl text-sm leading-loose text-charcoal-700">{op.bodyAr}</p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-forest-800/15 bg-forest-800/15">
              {op.facts.map((fact) => (
                <div key={fact.labelAr} className="bg-forest-950 p-5">
                  <dt className="mb-1.5 text-xs text-ivory-50/50">{fact.labelAr}</dt>
                  <dd className="tabular-nums-latn text-sm font-semibold text-ivory-50">
                    {fact.valueAr}
                  </dd>
                </div>
              ))}
            </dl>
            <div>
              <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-ivory-200 bg-ivory-200 sm:grid-cols-3">
                {op.baseline.map((stat) => (
                  <div key={stat.labelAr} className="bg-ivory-50 p-5">
                    <dt className="mb-1.5 text-xs text-charcoal-700/70">{stat.labelAr}</dt>
                    <dd className="tabular-nums-latn text-base font-bold text-forest-900">
                      {stat.valueAr}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 rounded-lg border border-gold-600/40 bg-ivory-100 p-4 text-xs leading-loose text-charcoal-800">
                {op.baselineNoteAr}
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-ivory-200 bg-ivory-100 p-6">
            <h4 className="mb-2 text-sm font-bold text-forest-900">
              {op.entityCard.titleAr}
            </h4>
            <p className="text-sm leading-loose text-charcoal-700">{op.entityCard.bodyAr}</p>
          </div>

          {/* الخريطة التفاعلية + GeoJSON */}
          <div className="mt-10">
            <h4 className="mb-5 text-lg font-bold text-forest-900">
              محيط إيسكسي ونطاق الموافقة البيئية
            </h4>
            <MapPanel />
          </div>

          {/* مرجع أگلموس */}
          <div className="mt-8 rounded-lg bg-forest-950 p-6 text-ivory-50">
            <h4 className="mb-2 text-sm font-bold text-gold-400">
              {portfolio.aguelmous.titleAr}
            </h4>
            <p className="text-sm leading-loose text-ivory-50/75">
              {portfolio.aguelmous.bodyAr}
            </p>
          </div>
        </div>
      </Reveal>
    </SovereignContainer>
  )
}
