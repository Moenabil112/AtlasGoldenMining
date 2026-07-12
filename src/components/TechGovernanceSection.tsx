import { techGovernance } from '../data/digitalPartners'
import { siteImages } from '../data/images'
import { SovereignContainer } from './SovereignContainer'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'
import { ImagePanel } from './ImagePanel'

/** القسم 11 — التكنولوجيا والحوكمة الرقمية (ZYNTRA / Akanil + الطبقة المالية) */
export function TechGovernanceSection() {
  return (
    <SovereignContainer id="tech-governance">
      <SectionHeader
        index="11"
        title={techGovernance.titleAr}
        headline={techGovernance.headlineAr}
      />

      <div className="grid items-start gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <p className="leading-loose text-charcoal-700">{techGovernance.bodyAr}</p>
        </Reveal>
        <Reveal delayMs={150} className="lg:col-span-2">
          <ImagePanel
            image={siteImages.digitalMining}
            labelAr="بيانات التشغيل والتعدين الذكي"
            heightClass="h-44 md:h-52"
          />
        </Reveal>
      </div>

      {/* شريكا التمكين */}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {techGovernance.partners.map((partner, i) => (
          <Reveal key={partner.nameEn} delayMs={i * 120}>
            <div className="flex h-full flex-col rounded-lg border border-ivory-200 bg-ivory-100 p-8">
              <div className="mb-5 flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-bold text-forest-900">{partner.nameAr}</h3>
                <span className="text-xs font-semibold tracking-widest text-gold-600">
                  {partner.nameEn.toUpperCase()}
                </span>
              </div>
              <ul className="space-y-2.5">
                {partner.itemsAr.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-charcoal-700"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-600"
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

      {/* الطبقة الرقمية المالية والتجارية */}
      <Reveal delayMs={200}>
        <div className="mt-10 rounded-lg bg-forest-950 p-8 text-ivory-50">
          <h3 className="mb-6 text-sm font-bold text-gold-400">
            {techGovernance.financialLayer.titleAr}
          </h3>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {techGovernance.financialLayer.itemsAr.map((item) => (
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
          {techGovernance.disclaimerAr}
        </p>
      </Reveal>
    </SovereignContainer>
  )
}
