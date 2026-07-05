import { valueChain } from '../data/valueChain'
import { fundAllocation } from '../data/useOfFunds'
import { fmt, totalContribution } from '../data/financialModel'
import { siteImages } from '../data/images'
import { SovereignContainer } from './SovereignContainer'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'
import { ImagePanel } from './ImagePanel'

/** القسم 7 — سلسلة القيمة المعدنية وبناء القدرة التشغيلية */
export function ValueChainSection() {
  return (
    <SovereignContainer id="value-chain" tone="ivory">
      <SectionHeader
        index="07"
        title={valueChain.titleAr}
        headline={valueChain.headlineAr}
      />

      <div className="grid items-start gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <p className="leading-loose text-charcoal-700">{valueChain.bodyAr}</p>
        </Reveal>
        <Reveal delayMs={150} className="lg:col-span-2">
          <ImagePanel
            image={siteImages.processing}
            labelAr="من الخام إلى المنتج الموثق"
            heightClass="h-48 md:h-56"
          />
        </Reveal>
      </div>

      {/* مسار سلسلة القيمة */}
      <Reveal delayMs={160}>
        <div className="mt-12">
          <h3 className="mb-6 text-sm font-bold tracking-wide text-gold-600">
            مسار سلسلة القيمة
          </h3>
          <ol className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {valueChain.chainStepsAr.map((step, i) => (
              <li
                key={step}
                className="flex flex-col items-center gap-3 rounded-lg border border-ivory-200 bg-ivory-50 p-4 text-center"
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

      {/* منطق المعدات والقدرة */}
      <Reveal delayMs={220}>
        <div className="mt-14 rounded-lg bg-forest-950 p-8 text-ivory-50">
          <h3 className="mb-4 text-sm font-bold text-gold-400">
            منطق المعدات وبناء القدرة
          </h3>
          <p className="max-w-3xl leading-loose text-ivory-50/80">
            {valueChain.equipmentLogicAr}
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {valueChain.equipmentAr.map((item) => (
              <span
                key={item}
                className="tabular-nums-latn rounded-full border border-gold-400/35 px-4 py-1.5 text-sm font-medium text-ivory-50/90"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      {/* جدول التوزيع المهني */}
      <Reveal delayMs={260}>
        <div className="mt-12 overflow-x-auto rounded-lg border border-ivory-200">
          <table className="w-full min-w-[640px] text-sm">
            <caption className="bg-forest-950 px-5 py-4 text-start text-sm font-bold text-ivory-50">
              التوزيع المهني التقديري لمبلغ الشراكة
            </caption>
            <thead>
              <tr className="border-b border-ivory-200 bg-ivory-100 text-charcoal-700/80">
                <th className="px-5 py-3 text-start font-semibold">فئة الاستخدام</th>
                <th className="px-5 py-3 text-start font-semibold">المبلغ التقديري (ريال)</th>
                <th className="px-5 py-3 text-start font-semibold">النسبة</th>
                <th className="hidden px-5 py-3 text-start font-semibold lg:table-cell">
                  ملاحظة مهنية
                </th>
              </tr>
            </thead>
            <tbody>
              {fundAllocation.map((row) => (
                <tr key={row.categoryAr} className="border-b border-ivory-200 bg-ivory-50">
                  <td className="px-5 py-3.5 leading-relaxed text-charcoal-800">
                    {row.categoryAr}
                  </td>
                  <td className="tabular-nums-latn px-5 py-3.5 font-semibold text-forest-900">
                    {fmt(row.amount)}
                  </td>
                  <td className="tabular-nums-latn px-5 py-3.5 text-charcoal-700">
                    {row.percent}%
                  </td>
                  <td className="hidden px-5 py-3.5 text-xs leading-relaxed text-charcoal-700/80 lg:table-cell">
                    {row.noteAr}
                  </td>
                </tr>
              ))}
              <tr className="bg-ivory-100 font-bold text-forest-900">
                <td className="px-5 py-4">الإجمالي</td>
                <td className="tabular-nums-latn px-5 py-4">{fmt(totalContribution)}</td>
                <td className="tabular-nums-latn px-5 py-4">100%</td>
                <td className="hidden px-5 py-4 lg:table-cell">—</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 border-s-2 border-gold-600 ps-4 text-sm leading-loose text-charcoal-700">
          طبقة طاقة الرياح بهدف 5 ميغاواط تعرض كبنية استراتيجية خاضعة للتحقق الفني
          والتعاقدي وتنفذ عبر توريد مرحلي وهياكل تنفيذ مناسبة، وليست منشأة قائمة أو
          ممولة بالكامل من مبلغ الشراكة.
        </p>
      </Reveal>
    </SovereignContainer>
  )
}
