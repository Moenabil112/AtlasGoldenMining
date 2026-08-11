import { productionPlan } from '../data/atlasCopper'
import { SovereignContainer } from './SovereignContainer'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'

/** النافذة 05 — خطة الإنتاج */
export function ProductionPlanSection() {
  const { columns, rows } = productionPlan

  return (
    <SovereignContainer id="production-plan">
      <SectionHeader
        index="05"
        title={productionPlan.titleAr}
        headline={productionPlan.headlineAr}
      />
      <Reveal>
        <p className="max-w-3xl leading-loose text-charcoal-700">{productionPlan.bodyAr}</p>
      </Reveal>

      <Reveal delayMs={140}>
        <div className="mt-12 overflow-x-auto rounded-lg border border-ivory-200">
          <table className="w-full min-w-[520px] text-start">
            <thead>
              <tr className="bg-forest-950 text-ivory-50">
                <th className="px-5 py-4 text-start text-sm font-semibold">
                  {columns.periodAr}
                </th>
                <th className="px-5 py-4 text-end text-sm font-semibold">
                  {columns.projectAr}
                </th>
                <th className="px-5 py-4 text-end text-sm font-semibold text-gold-300">
                  {columns.investorAr}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.periodAr}
                  className={
                    row.total
                      ? 'bg-ivory-100 font-bold text-forest-900'
                      : 'border-b border-ivory-200 bg-ivory-50 text-charcoal-800'
                  }
                >
                  <td className="px-5 py-4 text-sm font-semibold">{row.periodAr}</td>
                  <td className="tabular-nums-latn px-5 py-4 text-end text-sm">
                    {row.projectAr}
                  </td>
                  <td className="tabular-nums-latn px-5 py-4 text-end text-sm font-semibold text-forest-900">
                    {row.investorAr}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      <Reveal delayMs={200}>
        <p className="mt-8 max-w-3xl border-s-2 border-gold-600 ps-5 text-sm font-medium leading-loose text-forest-900">
          {productionPlan.qualificationAr}
        </p>
      </Reveal>
    </SovereignContainer>
  )
}
