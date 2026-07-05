import { companyProfile } from '../data/companyProfile'
import { siteImages } from '../data/images'
import { SovereignContainer } from './SovereignContainer'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'
import { ImagePanel } from './ImagePanel'

/** القسم 2 — من هي أطلس الذهبية للتعدين؟ */
export function CompanySection() {
  return (
    <SovereignContainer id="company">
      <SectionHeader
        index="02"
        title={companyProfile.titleAr}
        headline={companyProfile.headlineAr}
      />

      <div className="grid items-start gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div className="space-y-6">
            {companyProfile.introAr.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="leading-loose text-charcoal-700">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
        <Reveal delayMs={150} className="lg:col-span-2">
          <ImagePanel
            image={siteImages.corridor}
            labelAr="امتداد تشغيلي وتجاري: المغرب — السودان — السعودية"
            heightClass="h-56 md:h-64"
          />
        </Reveal>
      </div>

      {/* بطاقات الحضور الإقليمي */}
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {companyProfile.countries.map((country, i) => (
          <Reveal key={country.nameAr} delayMs={i * 100}>
            <div className="flex h-full flex-col rounded-lg border border-ivory-200 bg-ivory-100 p-7">
              <span className="mb-4 h-px w-10 bg-gold-600" aria-hidden="true" />
              <h3 className="mb-3 text-lg font-bold text-forest-900">
                {country.nameAr}
              </h3>
              <p className="text-sm leading-loose text-charcoal-700">
                {country.bodyAr}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* بيانات مؤسسية مختصرة — معلومات داعمة فقط */}
      <Reveal delayMs={260}>
        <div className="mt-12 rounded-lg border border-ivory-200 bg-ivory-50 p-7">
          <h3 className="mb-5 text-sm font-bold tracking-wide text-gold-600">
            {companyProfile.registry.titleAr}
          </h3>
          <dl className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
            {companyProfile.registry.items.map((item) => (
              <div key={item.labelAr}>
                <dt className="mb-1 text-xs text-charcoal-700/70">{item.labelAr}</dt>
                <dd className="tabular-nums-latn text-sm font-semibold leading-relaxed text-forest-900">
                  {item.valueAr}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 border-t border-ivory-200 pt-4 text-xs leading-relaxed text-charcoal-700/70">
            {companyProfile.registry.noteAr}
          </p>
        </div>
      </Reveal>
    </SovereignContainer>
  )
}
