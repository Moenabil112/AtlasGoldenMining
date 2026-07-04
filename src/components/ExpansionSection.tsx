import { expansion } from '../data/investmentWindow'
import { SovereignContainer } from './SovereignContainer'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'

/** القسم 9 — الامتداد المشروط إلى الرخص الأربع المتبقية */
export function ExpansionSection() {
  return (
    <SovereignContainer id="expansion" tone="ivory">
      <SectionHeader
        index="09"
        title={expansion.titleAr}
        headline={expansion.headlineAr}
      />
      <Reveal>
        <p className="max-w-3xl leading-loose text-charcoal-700">{expansion.bodyAr}</p>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {/* النسبة المشروطة */}
        <Reveal>
          <div className="flex h-full flex-col justify-center rounded-lg bg-forest-950 p-8 text-ivory-50">
            <p className="tabular-nums-latn text-5xl font-bold text-gold-400">25%</p>
            <p className="mt-3 text-sm leading-relaxed text-ivory-50/75">
              مشاركة إنتاجية مستقبلية مشروطة في الرخص الأربع — خاضعة للتحقق الفني
              والتشغيلي ولخطط تشغيل مستقلة
            </p>
          </div>
        </Reveal>

        {/* المعادن المستهدفة */}
        <Reveal delayMs={100}>
          <div className="h-full rounded-lg border border-ivory-200 bg-ivory-50 p-8">
            <h3 className="mb-5 text-sm font-bold text-forest-900">
              المعادن المستهدفة مستقبلًا
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {expansion.mineralsAr.map((mineral) => (
                <span
                  key={mineral}
                  className="rounded-full border border-gold-600/40 bg-ivory-100 px-4 py-1.5 text-sm font-semibold text-forest-900"
                >
                  {mineral}
                </span>
              ))}
            </div>
            <p className="mt-5 text-xs leading-relaxed text-charcoal-700/75">
              وفق طبيعة كل رخصة ونتائج الاستكشاف والتحقق لكل أصل على حدة.
            </p>
          </div>
        </Reveal>

        {/* شروط التفعيل */}
        <Reveal delayMs={200}>
          <div className="h-full rounded-lg border border-ivory-200 bg-ivory-50 p-8">
            <h3 className="mb-5 text-sm font-bold text-forest-900">شروط التفعيل</h3>
            <ul className="space-y-3">
              {expansion.conditionsAr.map((condition) => (
                <li
                  key={condition}
                  className="flex items-start gap-3 text-sm leading-relaxed text-charcoal-700"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-600"
                    aria-hidden="true"
                  />
                  {condition}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal delayMs={260}>
        <p className="mt-10 border-s-2 border-gold-600 ps-4 text-sm font-medium leading-loose text-charcoal-800">
          {expansion.protectionAr}
        </p>
      </Reveal>
    </SovereignContainer>
  )
}
