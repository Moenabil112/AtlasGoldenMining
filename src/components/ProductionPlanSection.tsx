import { productionPlan } from '../data/investmentWindow'
import { SovereignContainer } from './SovereignContainer'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'

/** القسم 4 — المرحلة الأولى: خطة الإنتاج ومسار المعالجة */
export function ProductionPlanSection() {
  return (
    <SovereignContainer id="production-plan">
      <SectionHeader
        index="04"
        title={productionPlan.titleAr}
        headline={productionPlan.headlineAr}
      />
      <Reveal>
        <p className="max-w-3xl leading-loose text-charcoal-700">
          {productionPlan.bodyAr}
        </p>
      </Reveal>

      {/* أرقام المرحلة */}
      <Reveal delayMs={120}>
        <dl className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-ivory-200 bg-ivory-200 sm:grid-cols-2 lg:grid-cols-3">
          {productionPlan.stats.map((stat) => (
            <div key={stat.labelAr} className="bg-ivory-50 p-6">
              <dt className="mb-1.5 text-xs text-charcoal-700/70">{stat.labelAr}</dt>
              <dd className="tabular-nums-latn text-lg font-bold text-forest-900">
                {stat.valueAr}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>

      {/* مسار الإنتاج */}
      <Reveal delayMs={200}>
        <div className="mt-14">
          <h3 className="mb-6 text-sm font-bold tracking-wide text-gold-600">
            مسار الإنتاج في المرحلة الأولى
          </h3>
          <ol className="flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-0">
            {productionPlan.flowStepsAr.map((step, i) => (
              <li key={step} className="flex flex-1 items-center gap-4 lg:flex-col lg:gap-3">
                <span className="tabular-nums-latn flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-gold-600 text-sm font-bold text-forest-900">
                  {i + 1}
                </span>
                <span className="flex-1 text-sm font-medium leading-relaxed text-charcoal-800 lg:px-3 lg:text-center">
                  {step}
                </span>
                {i < productionPlan.flowStepsAr.length - 1 && (
                  <span
                    className="hidden h-px w-full bg-gold-600/30 lg:block"
                    aria-hidden="true"
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </Reveal>

      <Reveal delayMs={260}>
        <p className="mt-12 rounded-lg border border-ivory-200 bg-ivory-100 p-5 text-sm leading-loose text-charcoal-700">
          {productionPlan.professionalNoteAr}
        </p>
      </Reveal>
    </SovereignContainer>
  )
}
