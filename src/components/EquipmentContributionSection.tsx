import { equipment } from '../data/atlasCopper'
import { SovereignContainer } from './SovereignContainer'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'

/** النافذة 10 — مساهمة المعدات */
export function EquipmentContributionSection() {
  return (
    <SovereignContainer id="equipment">
      <SectionHeader index="10" title={equipment.titleAr} headline={equipment.headlineAr} />
      <Reveal>
        <p className="max-w-3xl leading-loose text-charcoal-700">{equipment.bodyAr}</p>
      </Reveal>

      {/* خيارات المساهمة */}
      <Reveal delayMs={120}>
        <div className="mt-10 flex flex-wrap gap-3">
          {equipment.optionsAr.map((opt) => (
            <span
              key={opt}
              className="rounded-full border border-gold-600/40 bg-ivory-100 px-5 py-2 text-sm font-semibold text-forest-900"
            >
              {opt}
            </span>
          ))}
        </div>
      </Reveal>

      {/* شروط قبول المعدات */}
      <Reveal delayMs={160}>
        <div className="mt-10 rounded-lg border border-ivory-200 bg-ivory-100 p-7">
          <h3 className="mb-5 text-sm font-bold text-gold-600">
            {equipment.conditionsTitleAr}
          </h3>
          <ul className="grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
            {equipment.conditionsAr.map((cond) => (
              <li
                key={cond}
                className="flex items-start gap-3 text-sm leading-relaxed text-charcoal-800"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-600"
                  aria-hidden="true"
                />
                {cond}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal delayMs={200}>
        <p className="mt-8 max-w-3xl border-s-2 border-gold-600 ps-5 text-sm font-semibold leading-loose text-forest-900">
          {equipment.cashNoteAr}
        </p>
      </Reveal>
    </SovereignContainer>
  )
}
