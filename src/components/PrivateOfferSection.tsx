import { privateOffer } from '../data/investmentOffer'
import {
  totalContribution,
  expectedProductionTonnes,
  partnerProductionTonnes,
  atlasProductionTonnes,
  impliedCapitalPerTonne,
  sensitivityRows,
  netProductionDefinitionAr,
  fmt,
} from '../data/financialModel'
import { SovereignContainer } from './SovereignContainer'
import { SectionHeader } from './SectionHeader'
import { MetricCard } from './MetricCard'
import { Reveal } from './Reveal'

/** القسم 5 — نافذة الدخول الخاصة: العرض، هيكل الشراكة، والنموذج المالي */
export function PrivateOfferSection() {
  const columns = [privateOffer.contribution, privateOffer.participation]

  const financialMetrics = [
    {
      value: fmt(totalContribution),
      unit: 'ريال سعودي',
      label: 'مساهمة الشريك في المرحلة الأولى',
    },
    {
      value: fmt(expectedProductionTonnes),
      unit: 'طن',
      label: 'الإنتاج المتوقع من أسمنت النحاس — خط الأساس',
    },
    {
      value: fmt(partnerProductionTonnes),
      unit: 'طن',
      label: 'حصة الشريك الكمية المتوقعة (35%)',
    },
    {
      value: fmt(atlasProductionTonnes),
      unit: 'طن',
      label: 'حصة أطلس الكمية المتوقعة (65%)',
    },
    {
      value: fmt(impliedCapitalPerTonne),
      unit: 'ريال / طن متوقع',
      label: 'المساهمة مقابل كل طن منتج مستهدف (20,000,000 ÷ 5,000)',
    },
  ]

  return (
    <SovereignContainer id="private-offer" tone="dark">
      <SectionHeader
        index="05"
        title={privateOffer.titleAr}
        headline={privateOffer.headlineAr}
        dark
      />

      <Reveal>
        <div className="max-w-3xl space-y-5">
          {privateOffer.bodyAr.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="leading-loose text-ivory-50/75">
              {paragraph}
            </p>
          ))}
        </div>
        <p className="mt-7 inline-block rounded border border-gold-500/40 bg-gold-500/10 px-4 py-2 text-sm font-semibold text-gold-300">
          {privateOffer.windowBadgeAr}
        </p>
      </Reveal>

      {/* لوحة العرض الرسمية */}
      <Reveal delayMs={140}>
        <dl className="mt-12 overflow-hidden rounded-lg border border-gold-500/25">
          {privateOffer.panelRows.map((row, i) => (
            <div
              key={row.labelAr}
              className={`flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 ${
                i % 2 === 0 ? 'bg-forest-900' : 'bg-forest-950'
              }`}
            >
              <dt className="shrink-0 text-sm text-ivory-50/55">{row.labelAr}</dt>
              <dd className="tabular-nums-latn text-sm font-semibold text-ivory-50 sm:text-end">
                {row.valueAr}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>

      {/* عمودا المساهمة والمشاركة */}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {columns.map((col, i) => (
          <Reveal key={col.titleAr} delayMs={i * 120}>
            <div className="flex h-full flex-col rounded-lg border border-ivory-50/10 bg-forest-900 p-8">
              <h3 className="mb-3 text-sm font-bold tracking-wide text-gold-400">
                {col.titleAr}
              </h3>
              <p className="tabular-nums-latn mb-6 text-2xl font-bold leading-snug text-ivory-50">
                {col.valueAr}
              </p>
              <ul className="mt-auto space-y-3">
                {col.pointsAr.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm leading-relaxed text-ivory-50/75"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400"
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      {/* حدود الشراكة وما تحتفظ به أطلس */}
      <Reveal delayMs={200}>
        <div className="mt-10 flex flex-wrap gap-3">
          {privateOffer.boundariesAr.map((boundary) => (
            <span
              key={boundary}
              className="rounded-full border border-ivory-50/20 px-4 py-2 text-sm font-semibold text-ivory-50/85"
            >
              {boundary}
            </span>
          ))}
        </div>
        <p className="mt-8 max-w-3xl leading-loose text-ivory-50/70">
          {privateOffer.clarificationAr}
        </p>
        <div className="mt-8 rounded-lg border border-gold-500/25 bg-gold-500/5 p-7">
          <h3 className="mb-4 text-sm font-bold text-gold-300">
            ما تحتفظ به أطلس الذهبية للتعدين
          </h3>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {privateOffer.atlasRetainsAr.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 text-sm font-medium text-ivory-50/85"
              >
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* النموذج المالي التقديري */}
      <Reveal delayMs={240}>
        <div className="mt-16 border-t border-ivory-50/10 pt-12">
          <h3 className="mb-2 text-xl font-bold text-ivory-50">
            النموذج المالي التقديري للمرحلة الأولى
          </h3>
          <p className="mb-10 max-w-3xl text-sm leading-loose text-ivory-50/60">
            نموذج تقديري قابل للتحديث بعد نتائج التشغيل والتحاليل، ولا يمثل ضمانًا
            للعائد.
          </p>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {financialMetrics.map((m) => (
              <MetricCard key={m.label} value={m.value} unit={m.unit} label={m.label} dark />
            ))}
          </div>

          <div className="mt-12 rounded-lg border border-ivory-50/10 bg-forest-900 p-7">
            <h4 className="mb-3 text-sm font-bold text-gold-400">
              تعريف صافي الإنتاج التجاري من أسمنت النحاس
            </h4>
            <p className="text-sm leading-loose text-ivory-50/75">
              {netProductionDefinitionAr}
            </p>
          </div>

          <div className="mt-10">
            <h4 className="mb-2 text-lg font-bold text-ivory-50">
              اختبار حساسية مبسط لحصة الشريك
            </h4>
            <p className="mb-6 max-w-3xl text-sm leading-loose text-ivory-50/60">
              هذه الأرقام لا تمثل سعر بيع نهائيًا؛ هي فقط لاختبار حساسية النموذج حسب
              صافي سعر البيع التجاري للطن من أسمنت النحاس. النتائج مشروطة بالتنفيذ
              والجودة والسوق ولا تمثل ضمانًا للعائد.
            </p>
            <div className="overflow-x-auto rounded-lg border border-ivory-50/10">
              <table className="w-full min-w-[640px] text-sm">
                <thead>
                  <tr className="border-b border-ivory-50/10 bg-forest-900 text-ivory-50/60">
                    <th className="px-5 py-3.5 text-start font-semibold">
                      صافي سعر البيع التجاري للطن
                    </th>
                    <th className="px-5 py-3.5 text-start font-semibold">
                      قيمة الإنتاج الكلي المتوقع
                    </th>
                    <th className="px-5 py-3.5 text-start font-semibold">
                      قيمة حصة الشريك 35%
                    </th>
                    <th className="px-5 py-3.5 text-start font-semibold">
                      القراءة الأولية
                    </th>
                  </tr>
                </thead>
                <tbody className="text-ivory-50/85">
                  {sensitivityRows.map((row) => (
                    <tr key={row.pricePerTonne} className="border-b border-ivory-50/5">
                      <td className="tabular-nums-latn px-5 py-4 font-semibold">
                        {fmt(row.pricePerTonne)} ريال/طن
                      </td>
                      <td className="tabular-nums-latn px-5 py-4">
                        {fmt(row.totalProductionValue)} ريال
                      </td>
                      <td className="tabular-nums-latn px-5 py-4 font-semibold text-gold-300">
                        {fmt(row.partnerShareValue)} ريال
                      </td>
                      <td className="px-5 py-4 text-xs leading-relaxed text-ivory-50/65">
                        {row.readingAr}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-5 text-xs leading-relaxed text-ivory-50/45">
              نموذج تقديري — قابل للتحديث بعد نتائج التشغيل والتحاليل — لا يمثل
              ضمانًا للعائد.
            </p>
          </div>
        </div>
      </Reveal>
    </SovereignContainer>
  )
}
