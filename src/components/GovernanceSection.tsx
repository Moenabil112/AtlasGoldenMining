import { governance } from '../data/investmentWindow'
import { cashSettlementFormulaAr } from '../data/financialModel'
import { SovereignContainer } from './SovereignContainer'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'

/** القسم 8 — محاسبة الإنتاج والحوكمة */
export function GovernanceSection() {
  return (
    <SovereignContainer id="governance">
      <SectionHeader
        index="08"
        title={governance.titleAr}
        headline={governance.headlineAr}
      />
      <Reveal>
        <p className="max-w-3xl leading-loose text-charcoal-700">{governance.bodyAr}</p>
      </Reveal>

      {/* مسار الثقة والتوثيق */}
      <Reveal delayMs={120}>
        <div className="mt-12">
          <h3 className="mb-6 text-sm font-bold tracking-wide text-gold-600">
            مسار التوثيق من الاستخراج إلى تخصيص الإنتاج
          </h3>
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
        </div>
      </Reveal>

      {/* آلية الحوكمة */}
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <Reveal delayMs={180}>
          <div className="h-full rounded-lg border border-ivory-200 bg-ivory-50 p-7">
            <h3 className="mb-5 font-bold text-forest-900">آلية الحوكمة والسجلات</h3>
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
        </Reveal>
        <Reveal delayMs={240}>
          <div className="flex h-full flex-col gap-6">
            <div className="rounded-lg bg-forest-950 p-7 text-ivory-50">
              <h3 className="mb-3 text-sm font-bold text-gold-400">
                التسوية النقدية عند البيع المركزي
              </h3>
              <p className="tabular-nums-latn text-sm leading-loose text-ivory-50/85">
                {cashSettlementFormulaAr}
              </p>
            </div>
            <div className="flex-1 rounded-lg border border-gold-600/40 bg-ivory-100 p-7">
              <h3 className="mb-3 text-sm font-bold text-forest-900">نص حامٍ</h3>
              <p className="text-sm leading-loose text-charcoal-700">
                {governance.protectionAr}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </SovereignContainer>
  )
}
