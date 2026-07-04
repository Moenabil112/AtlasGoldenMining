import { fundGroups, fundAllocation } from '../data/useOfFunds'
import { fmt, totalContribution } from '../data/financialModel'
import { SovereignContainer } from './SovereignContainer'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'

/** القسم 6 — استخدام مبلغ 20 مليون ريال سعودي */
export function UseOfFundsSection() {
  return (
    <SovereignContainer id="use-of-funds">
      <SectionHeader
        index="06"
        title="استخدام مبلغ 20 مليون ريال سعودي"
        headline="رأس المال يتحول إلى أصول تشغيلية مملوكة لأطلس"
      />
      <Reveal>
        <p className="max-w-3xl leading-loose text-charcoal-700">
          لا يستخدم مبلغ الشراكة كمصاريف عامة فقط، بل يوجه أساسًا إلى بناء قدرة إنتاج
          دائمة داخل أطلس الذهبية للتعدين: أسطول حركة، معدات حفر، معالجة متنقلة،
          تجهيزات صحن وغربلة وغسيل، ومقدمات بنية طاقة تدريجية، إضافة إلى مصاريف
          تشغيلية ومؤسسية تحمي استقرار المشروع. يعتمد التنفيذ صيغة شراء مختلط /
          تأجير تمويلي / دفعات أولى / توريد مرحلي.
        </p>
      </Reveal>

      {/* المجموعات الخمس */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {fundGroups.map((group, i) => (
          <Reveal key={group.titleAr} delayMs={i * 80}>
            <div className="flex h-full flex-col rounded-lg border border-ivory-200 bg-ivory-100 p-7">
              <h3 className="mb-1.5 font-bold text-forest-900">{group.titleAr}</h3>
              <p className="mb-5 text-xs leading-relaxed text-gold-600">
                {group.summaryAr}
              </p>
              <ul className="space-y-2.5">
                {group.itemsAr.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-charcoal-700"
                  >
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-600"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
        {/* بطاقة الإجمالي */}
        <Reveal delayMs={400}>
          <div className="flex h-full flex-col justify-center rounded-lg bg-forest-950 p-7 text-ivory-50">
            <p className="mb-2 text-xs text-ivory-50/60">إجمالي مساهمة الشريك</p>
            <p className="tabular-nums-latn text-3xl font-bold">
              {fmt(totalContribution)}
            </p>
            <p className="mt-1 text-sm text-gold-400">ريال سعودي</p>
            <p className="mt-4 text-xs leading-relaxed text-ivory-50/60">
              تتحول إلى أصول تشغيلية دائمة تبقى ضمن ملكية أطلس وتخدم إيسكسي
              ومحفظة الرخص.
            </p>
          </div>
        </Reveal>
      </div>

      {/* جدول التوزيع المهني */}
      <Reveal delayMs={200}>
        <div className="mt-14 overflow-x-auto rounded-lg border border-ivory-200">
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
      </Reveal>

      <Reveal delayMs={260}>
        <p className="mt-8 border-s-2 border-gold-600 ps-4 text-sm leading-loose text-charcoal-700">
          طبقة طاقة الرياح بهدف 5 ميغاواط تعرض كبنية استراتيجية خاضعة للتحقق الفني
          والتعاقدي وتنفذ عبر توريد مرحلي وهياكل تنفيذ مناسبة، وليست منشأة قائمة أو
          ممولة بالكامل من مبلغ الشراكة.
        </p>
      </Reveal>
    </SovereignContainer>
  )
}
