import { closing, brand } from '../data/atlasCopper'
import { SovereignContainer } from './SovereignContainer'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'

/** النافذة 18 — دعوة الاستثمار الختامية */
export function ClosingSection() {
  return (
    <SovereignContainer id="closing" tone="dark">
      <SectionHeader
        index="18"
        title={brand.projectNameAr}
        headline={closing.headlineAr}
        dark
      />

      <Reveal>
        <ul className="mx-auto max-w-3xl space-y-4">
          {closing.pointsAr.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 text-base leading-loose text-ivory-50/85"
            >
              <span
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400"
                aria-hidden="true"
              />
              {point}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delayMs={180}>
        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-4">
          <a
            href="#data-room"
            className="rounded border border-gold-500 bg-gold-500/10 px-6 py-3 text-sm font-semibold text-gold-300 transition-colors hover:bg-gold-500/20"
          >
            {brand.dataRoomCtaAr}
          </a>
        </div>
        <p className="mx-auto mt-10 max-w-3xl rounded-lg border border-ivory-50/15 bg-forest-900 p-6 text-center text-sm leading-loose text-ivory-50/70">
          {closing.finalDisclaimerAr}
        </p>
        <p className="mt-8 text-center text-sm font-medium tracking-wide text-gold-400">
          {brand.eyebrowAr}
        </p>
      </Reveal>
    </SovereignContainer>
  )
}
