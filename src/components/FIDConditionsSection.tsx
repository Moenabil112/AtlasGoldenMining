import { fid } from '../data/atlasCopper'
import { SovereignContainer } from './SovereignContainer'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'

/** النافذة 14 — شروط القرار الاستثماري النهائي (FID) */
export function FIDConditionsSection() {
  return (
    <SovereignContainer id="fid" tone="ivory">
      <SectionHeader index="14" title={fid.titleAr} headline={fid.headlineAr} />
      <Reveal>
        <p className="max-w-3xl leading-loose text-charcoal-700">{fid.bodyAr}</p>
      </Reveal>

      <Reveal delayMs={140}>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {fid.itemsAr.map((item, i) => (
            <li
              key={item}
              className="flex items-center gap-4 rounded-lg border border-ivory-200 bg-ivory-50 p-5"
            >
              <span className="tabular-nums-latn flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest-950 text-sm font-bold text-gold-400">
                {i + 1}
              </span>
              <span className="text-sm font-semibold leading-relaxed text-forest-900">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </SovereignContainer>
  )
}
