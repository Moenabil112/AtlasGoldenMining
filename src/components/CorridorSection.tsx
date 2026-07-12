import { corridor } from '../data/companyProfile'
import { siteImages } from '../data/images'
import { SovereignContainer } from './SovereignContainer'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'
import { ImagePanel } from './ImagePanel'

/** القسم 12 — الممر المغربي–السعودي للتعدين والتوريد */
export function CorridorSection() {
  const columns = [corridor.moroccoValue, corridor.saudiValue]

  return (
    <SovereignContainer id="corridor" tone="dark">
      <SectionHeader
        index="12"
        title={corridor.titleAr}
        headline={corridor.headlineAr}
        dark
      />

      <Reveal>
        <ImagePanel
          image={siteImages.corridor}
          labelAr="مسار تعدين وتوريد عابر للحدود بين المغرب والسعودية"
          heightClass="h-52 md:h-64"
        />
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {columns.map((col, i) => (
          <Reveal key={col.titleAr} delayMs={i * 120}>
            <div className="h-full rounded-lg border border-ivory-50/10 bg-forest-900 p-8">
              <h3 className="mb-5 text-sm font-bold tracking-wide text-gold-400">
                {col.titleAr}
              </h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {col.itemsAr.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-ivory-50/85"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delayMs={200}>
        <p className="mt-8 max-w-3xl leading-loose text-ivory-50/70">
          {corridor.alignmentAr}
        </p>
        <div className="mt-8 rounded-lg border border-gold-500/30 bg-gold-500/5 p-7">
          <span className="mb-4 block h-px w-10 bg-gold-400" aria-hidden="true" />
          <h3 className="mb-3 text-lg font-bold text-gold-300">
            {corridor.talentCard.titleAr}
          </h3>
          <p className="text-sm leading-loose text-ivory-50/80">
            {corridor.talentCard.bodyAr}
          </p>
        </div>
      </Reveal>
    </SovereignContainer>
  )
}
