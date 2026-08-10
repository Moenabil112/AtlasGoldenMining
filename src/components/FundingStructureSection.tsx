import { funding } from '../data/atlasCopper'
import { SovereignContainer } from './SovereignContainer'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'

/** النافذة 09 — هيكل التمويل */
export function FundingStructureSection() {
  return (
    <SovereignContainer id="funding" tone="ivory">
      <SectionHeader index="09" title={funding.titleAr} headline={funding.headlineAr} />

      <div className="grid items-start gap-8 lg:grid-cols-2">
        {/* تمويل المشروع قبل الدين */}
        <Reveal>
          <div className="h-full rounded-lg border border-ivory-200 bg-ivory-50 p-7">
            <h3 className="mb-6 text-sm font-bold tracking-wide text-gold-600">
              {funding.fundingTitleAr}
            </h3>
            <dl className="space-y-3">
              {funding.fundingRows.map((row) => (
                <div
                  key={row.labelAr}
                  className={`flex items-baseline justify-between gap-4 border-b pb-3 ${
                    row.total
                      ? 'border-gold-600/40 pt-1 text-forest-900'
                      : 'border-ivory-200 text-charcoal-800'
                  }`}
                >
                  <dt className={`text-sm ${row.total ? 'font-bold' : ''}`}>{row.labelAr}</dt>
                  <dd
                    className={`tabular-nums-latn shrink-0 text-end text-sm font-semibold ${
                      row.total ? 'text-base text-forest-900' : 'text-forest-900'
                    }`}
                  >
                    {row.valueAr}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        {/* جدول مساهمة المستثمر */}
        <Reveal delayMs={120}>
          <div className="h-full rounded-lg bg-forest-950 p-7 text-ivory-50">
            <h3 className="mb-6 text-sm font-bold text-gold-400">
              {funding.scheduleTitleAr}
            </h3>
            <ul className="space-y-4">
              {funding.scheduleRows.map((row) => (
                <li
                  key={row.stageAr}
                  className="flex flex-col gap-1 border-b border-ivory-50/10 pb-4"
                >
                  <span className="tabular-nums-latn text-lg font-bold text-gold-300">
                    {row.amountAr}
                  </span>
                  <span className="text-sm leading-relaxed text-ivory-50/75">
                    {row.stageAr}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal delayMs={200}>
        <p className="mt-8 max-w-3xl border-s-2 border-gold-600 ps-4 text-sm font-medium leading-loose text-forest-900">
          {funding.noteAr}
        </p>
      </Reveal>
    </SovereignContainer>
  )
}
