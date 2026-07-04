import { company } from '../data/investmentWindow'
import { SovereignContainer } from './SovereignContainer'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'
import { VerificationDocuments } from './VerificationDocuments'

/** القسم 2 — من هي أطلس الذهبية للتعدين؟ (طبقة التعريف المؤسسي) */
export function CompanySection() {
  return (
    <SovereignContainer id="company">
      <SectionHeader
        index="02"
        title={company.titleAr}
        headline={company.headlineAr}
      />

      {/* الفقرة الافتتاحية */}
      <Reveal>
        <div className="max-w-3xl space-y-6">
          {company.introAr.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="leading-loose text-charcoal-700">
              {paragraph}
            </p>
          ))}
        </div>
      </Reveal>

      {/* بطاقات الحضور الإقليمي */}
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {company.countries.map((country, i) => (
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

      {/* التوضيح الختامي: ليست وسيطًا ولا نافذة تمويل عابرة */}
      <Reveal delayMs={200}>
        <p className="mt-12 max-w-3xl border-s-2 border-gold-600 ps-5 text-base font-medium leading-loose text-forest-900">
          {company.closingAr}
        </p>
      </Reveal>

      {/* بيانات مؤسسية مختصرة — معلومات داعمة فقط */}
      <Reveal delayMs={260}>
        <div className="mt-12 rounded-lg border border-ivory-200 bg-ivory-50 p-7">
          <h3 className="mb-5 text-sm font-bold tracking-wide text-gold-600">
            {company.registry.titleAr}
          </h3>
          <dl className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
            {company.registry.items.map((item) => (
              <div key={item.labelAr}>
                <dt className="mb-1 text-xs text-charcoal-700/70">{item.labelAr}</dt>
                <dd className="tabular-nums-latn text-sm font-semibold leading-relaxed text-forest-900">
                  {item.valueAr}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 border-t border-ivory-200 pt-4 text-xs leading-relaxed text-charcoal-700/70">
            {company.registry.noteAr}
          </p>
        </div>
      </Reveal>

      {/* طبقة المستندات والتحقق — كتلة داعمة داخل القسم الثاني، ليست قسمًا رئيسيًا */}
      <VerificationDocuments />
    </SovereignContainer>
  )
}
