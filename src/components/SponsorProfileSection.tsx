import { sponsor } from '../data/atlasCopper'
import { siteImages } from '../data/images'
import { SovereignContainer } from './SovereignContainer'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'
import { ImagePanel } from './ImagePanel'

/** النافذة 03 — ملف أطلس الذهبية للتعدين (الراعي والمطور والمشغل) */
export function SponsorProfileSection() {
  return (
    <SovereignContainer id="sponsor">
      <SectionHeader
        index="03"
        title={sponsor.titleAr}
        headline={sponsor.headlineAr}
      />

      <div className="grid items-start gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <p className="leading-loose text-charcoal-700">{sponsor.bodyAr}</p>
        </Reveal>
        <Reveal delayMs={150} className="lg:col-span-2">
          <ImagePanel
            image={siteImages.fieldTeam}
            labelAr="منصة تطوير مشاريع فنية وتجارية"
            heightClass="h-56 md:h-64"
          />
        </Reveal>
      </div>

      {/* أدوار الراعي */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sponsor.roles.map((role, i) => (
          <Reveal key={role.titleAr} delayMs={i * 80}>
            <div className="flex h-full flex-col rounded-lg border border-ivory-200 bg-ivory-100 p-6">
              <span className="mb-4 h-px w-10 bg-gold-600" aria-hidden="true" />
              <h3 className="mb-3 text-base font-bold text-forest-900">{role.titleAr}</h3>
              <p className="text-sm leading-loose text-charcoal-700">{role.bodyAr}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* القدرات المرتبطة بالمشروع */}
      <Reveal delayMs={200}>
        <div className="mt-10 rounded-lg bg-forest-950 p-8 text-ivory-50">
          <h3 className="mb-6 text-sm font-bold text-gold-400">
            {sponsor.capabilitiesTitleAr}
          </h3>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
            {sponsor.capabilitiesAr.map((item) => (
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

      <Reveal delayMs={240}>
        <p className="mt-8 border-s-2 border-gold-600 ps-4 text-sm font-medium leading-loose text-forest-900">
          {sponsor.noteAr}
        </p>
      </Reveal>
    </SovereignContainer>
  )
}
