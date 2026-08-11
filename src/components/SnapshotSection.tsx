import { snapshot } from '../data/atlasCopper'
import { SovereignContainer } from './SovereignContainer'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'

/** النافذة 02 — لقطة قرار المستثمر */
export function SnapshotSection() {
  return (
    <SovereignContainer id="snapshot" tone="ivory">
      <SectionHeader
        index="02"
        title={snapshot.titleAr}
        headline={snapshot.headlineAr}
      />
      <Reveal>
        <p className="max-w-3xl leading-loose text-charcoal-700">{snapshot.bodyAr}</p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {snapshot.itemsAr.map((item, i) => (
          <Reveal key={item.titleAr} delayMs={i * 80}>
            <div className="flex h-full flex-col rounded-lg border border-ivory-200 bg-ivory-50 p-6">
              <span className="mb-4 h-px w-10 bg-gold-600" aria-hidden="true" />
              <h3 className="mb-3 text-base font-bold text-forest-900">{item.titleAr}</h3>
              <p className="text-sm leading-loose text-charcoal-700">{item.bodyAr}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delayMs={200}>
        <p className="mt-10 max-w-3xl border-s-2 border-gold-600 ps-5 text-base font-semibold leading-loose text-forest-900">
          {snapshot.highlightAr}
        </p>
      </Reveal>
    </SovereignContainer>
  )
}
