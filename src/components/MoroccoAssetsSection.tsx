import { moroccoAssets } from '../data/assetPortfolio'
import { siteImages } from '../data/images'
import { SovereignContainer } from './SovereignContainer'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'
import { ImagePanel } from './ImagePanel'
import { VerificationDocuments } from './VerificationDocuments'

/** القسم 4 — قاعدة الأصول المغربية + غرفة المستندات والتحقق */
export function MoroccoAssetsSection() {
  const upside = moroccoAssets.expansionUpside

  return (
    <SovereignContainer id="morocco-assets">
      <SectionHeader
        index="04"
        title={moroccoAssets.titleAr}
        headline={moroccoAssets.headlineAr}
      />

      <div className="grid items-start gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <p className="leading-loose text-charcoal-700">{moroccoAssets.bodyAr}</p>
        </Reveal>
        <Reveal delayMs={150} className="lg:col-span-2">
          <ImagePanel
            image={siteImages.terrain}
            labelAr="تضاريس جهة بني ملال – خنيفرة"
            heightClass="h-48 md:h-56"
          />
        </Reveal>
      </div>

      {/* بطاقات الأصول */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {moroccoAssets.assets.map((asset, i) => (
          <Reveal key={asset.titleAr} delayMs={i * 80}>
            <div className="flex h-full flex-col rounded-lg border border-ivory-200 bg-ivory-100 p-7">
              <span className="mb-4 inline-block w-fit rounded bg-forest-950 px-2.5 py-1 text-xs font-semibold text-gold-300">
                {asset.tagAr}
              </span>
              <h3 className="mb-2.5 font-bold leading-relaxed text-forest-900">
                {asset.titleAr}
              </h3>
              <p className="text-sm leading-loose text-charcoal-700">{asset.bodyAr}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* طبقة الصعود المشروطة */}
      <Reveal delayMs={200}>
        <div className="mt-10 rounded-lg bg-forest-950 p-8 text-ivory-50">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="mb-3 text-sm font-bold text-gold-400">{upside.titleAr}</h3>
              <p className="text-sm leading-loose text-ivory-50/80">{upside.bodyAr}</p>
            </div>
            <p className="tabular-nums-latn text-5xl font-bold text-gold-400">25%</p>
          </div>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {upside.mineralsAr.map((mineral) => (
              <span
                key={mineral}
                className="rounded-full border border-gold-400/40 px-4 py-1.5 text-sm font-semibold text-gold-300"
              >
                {mineral}
              </span>
            ))}
          </div>
          <p className="mt-6 border-t border-ivory-50/10 pt-4 text-xs leading-loose text-ivory-50/55">
            {upside.protectionAr}
          </p>
        </div>
      </Reveal>

      {/* غرفة المستندات والتحقق */}
      <VerificationDocuments />
    </SovereignContainer>
  )
}
