import {
  totalContribution,
  expectedProductionTonnes,
  partnerSharePercent,
  atlasSharePercent,
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

/** القسم 7 — المنطق المالي: نموذج تقديري شفاف دون وعود بالعائد */
export function FinancialLogicSection() {
  const metrics = [
    {
      value: fmt(totalContribution),
      unit: 'ريال سعودي',
      label: 'مساهمة الشريك في المرحلة الأولى',
    },
    {
      value: fmt(expectedProductionTonnes),
      unit: 'طن',
      label: 'الإنتاج المتوقع من أسمنت النحاس',
    },
    {
      value: `${partnerSharePercent * 100}%`,
      unit: '',
      label: 'حصة الشريك من صافي الإنتاج التجاري',
    },
    {
      value: `${atlasSharePercent * 100}%`,
      unit: '',
      label: 'حصة أطلس من صافي الإنتاج التجاري',
    },
    {
      value: fmt(partnerProductionTonnes),
      unit: 'طن',
      label: 'حصة الشريك الكمية المتوقعة',
    },
    {
      value: fmt(atlasProductionTonnes),
      unit: 'طن',
      label: 'حصة أطلس الكمية المتوقعة',
    },
    {
      value: fmt(impliedCapitalPerTonne),
      unit: 'ريال / طن متوقع',
      label: 'المساهمة مقابل كل طن منتج مستهدف (20,000,000 ÷ 5,000)',
    },
  ]

  return (
    <SovereignContainer id="financial-logic" tone="dark">
      <SectionHeader
        index="07"
        title="المنطق المالي"
        headline="نموذج تقديري شفاف مرتبط بالإنتاج الموثق"
        dark
      />
      <Reveal>
        <p className="max-w-3xl leading-loose text-ivory-50/75">
          يقوم المنطق المالي للنافذة على معادلة واضحة: مساهمة محددة، إنتاج مستهدف،
          وحصة إنتاجية موثقة. الأرقام التالية نموذج تقديري قابل للتحديث بعد نتائج
          التشغيل والتحاليل، ولا تمثل ضمانًا للعائد.
        </p>
      </Reveal>

      <Reveal delayMs={120}>
        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((m) => (
            <MetricCard key={m.label} value={m.value} unit={m.unit} label={m.label} dark />
          ))}
        </div>
      </Reveal>

      {/* تعريف صافي الإنتاج التجاري */}
      <Reveal delayMs={180}>
        <div className="mt-14 rounded-lg border border-ivory-50/10 bg-forest-900 p-7">
          <h3 className="mb-3 text-sm font-bold text-gold-400">
            تعريف صافي الإنتاج التجاري من أسمنت النحاس
          </h3>
          <p className="text-sm leading-loose text-ivory-50/75">
            {netProductionDefinitionAr}
          </p>
        </div>
      </Reveal>

      {/* اختبار الحساسية */}
      <Reveal delayMs={240}>
        <div className="mt-12">
          <h3 className="mb-2 text-lg font-bold text-ivory-50">
            اختبار حساسية مبسط لحصة الشريك
          </h3>
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
                  <th className="px-5 py-3.5 text-start font-semibold">القراءة الأولية</th>
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
            نموذج تقديري — قابل للتحديث بعد نتائج التشغيل والتحاليل — لا يمثل ضمانًا
            للعائد.
          </p>
        </div>
      </Reveal>
    </SovereignContainer>
  )
}
