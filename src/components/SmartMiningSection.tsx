import { smartMining } from '../data/digitalPartners'
import { governance } from '../data/investmentWindow'
import { cashSettlementFormulaAr } from '../data/financialModel'
import { siteImages } from '../data/images'
import { SovereignContainer } from './SovereignContainer'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'
import { ImagePanel } from './ImagePanel'

/** القسم 8 — التعدين الذكي، عقود الأوفتيك المرقمنة، والحوكمة */
export function SmartMiningSection() {
  return (
    <SovereignContainer id="smart-mining">
      <SectionHeader
        index="08"
        title={smartMining.titleAr}
        headline={smartMining.headlineAr}
      />

      <Reveal>
        <p className="max-w-3xl leading-loose text-charcoal-700">{smartMining.bodyAr}</p>
      </Reveal>

      {/* شريكا التمكين الرقمي */}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {smartMining.partners.map((partner, i) => (
          <Reveal key={partner.nameEn} delayMs={i * 120}>
            <div className="flex h-full flex-col rounded-lg border border-ivory-200 bg-ivory-100 p-8">
              <div className="mb-4 flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-bold text-forest-900">{partner.nameAr}</h3>
                <span className="text-xs font-semibold tracking-widest text-gold-600">
                  {partner.nameEn.toUpperCase()}
                </span>
              </div>
              <p className="text-sm leading-loose text-charcoal-700">{partner.bodyAr}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delayMs={180}>
        <p className="mt-6 text-xs leading-relaxed text-charcoal-700/70">
          {smartMining.partnersRoleAr}
        </p>
      </Reveal>

      {/* صور الطبقة الرقمية والأوفتيك */}
      <Reveal delayMs={200}>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <ImagePanel
            image={siteImages.digitalMining}
            labelAr="بيانات التشغيل والتعدين الذكي"
            heightClass="h-44 md:h-52"
          />
          <ImagePanel
            image={siteImages.offtake}
            labelAr="عقود الأوفتيك وسلاسل الإمداد"
            heightClass="h-44 md:h-52"
          />
        </div>
      </Reveal>

      {/* عقود الأوفتيك المرقمنة */}
      <Reveal delayMs={240}>
        <div className="mt-12 rounded-lg bg-forest-950 p-8 text-ivory-50">
          <h3 className="mb-3 text-lg font-bold text-gold-400">
            {smartMining.offtake.titleAr}
          </h3>
          <p className="max-w-3xl leading-loose text-ivory-50/80">
            {smartMining.offtake.bodyAr}
          </p>
          <ul className="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {smartMining.offtake.benefitsAr.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-ivory-50/85"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400"
                  aria-hidden="true"
                />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* الحوكمة ومحاسبة الإنتاج */}
      <Reveal delayMs={280}>
        <div className="mt-16 border-t border-ivory-200 pt-12">
          <div className="mb-8">
            <div className="mb-3 flex items-center gap-4">
              <span className="h-px w-10 bg-gold-600" aria-hidden="true" />
              <h3 className="text-xl font-bold text-forest-900 md:text-2xl">
                {governance.headlineAr}
              </h3>
            </div>
            <p className="max-w-3xl text-sm leading-loose text-charcoal-700">
              {governance.bodyAr}
            </p>
          </div>

          <ol className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
            {governance.flowStepsAr.map((step, i) => (
              <li
                key={step}
                className="flex flex-col items-center gap-3 rounded-lg border border-ivory-200 bg-ivory-100 p-4 text-center"
              >
                <span className="tabular-nums-latn flex h-8 w-8 items-center justify-center rounded-full bg-forest-950 text-xs font-bold text-gold-400">
                  {i + 1}
                </span>
                <span className="text-xs font-semibold leading-relaxed text-forest-900 sm:text-sm">
                  {step}
                </span>
              </li>
            ))}
          </ol>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="h-full rounded-lg border border-ivory-200 bg-ivory-50 p-7">
              <h4 className="mb-5 font-bold text-forest-900">آلية الحوكمة والسجلات</h4>
              <ul className="space-y-3">
                {governance.mechanismsAr.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-charcoal-700"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-600"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex h-full flex-col gap-6">
              <div className="rounded-lg bg-forest-950 p-7 text-ivory-50">
                <h4 className="mb-3 text-sm font-bold text-gold-400">
                  التسوية النقدية عند البيع المركزي
                </h4>
                <p className="tabular-nums-latn text-sm leading-loose text-ivory-50/85">
                  {cashSettlementFormulaAr}
                </p>
              </div>
              <div className="flex-1 rounded-lg border border-gold-600/40 bg-ivory-100 p-7">
                <h4 className="mb-3 text-sm font-bold text-forest-900">نص حامٍ</h4>
                <p className="text-sm leading-loose text-charcoal-700">
                  {governance.protectionAr}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </SovereignContainer>
  )
}
