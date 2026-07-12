import { valueChain } from '../data/valueChain'
import { siteImages } from '../data/images'
import { SovereignContainer } from './SovereignContainer'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'
import { ImagePanel } from './ImagePanel'

/** القسم 9 — سلسلة القيمة: من الرخصة إلى سلسلة التوريد */
export function ValueChainSection() {
  return (
    <SovereignContainer id="value-chain">
      <SectionHeader
        index="09"
        title={valueChain.titleAr}
        headline={valueChain.headlineAr}
      />

      <div className="grid items-start gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <p className="leading-loose text-charcoal-700">{valueChain.coreMessageAr}</p>
        </Reveal>
        <Reveal delayMs={150} className="lg:col-span-2">
          <ImagePanel
            image={siteImages.processing}
            labelAr="من الخام إلى المنتج الموثق"
            heightClass="h-48 md:h-56"
          />
        </Reveal>
      </div>

      {/* المسار: شبكة على الواسع، خطوات عمودية على الجوال */}
      <Reveal delayMs={160}>
        <ol className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-3">
          {valueChain.chainStepsAr.map((step, i) => (
            <li
              key={step}
              className="flex items-center gap-4 rounded-lg border border-ivory-200 bg-ivory-100 p-4 sm:p-5"
            >
              <span className="tabular-nums-latn flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest-950 text-xs font-bold text-gold-400">
                {i + 1}
              </span>
              <span className="text-sm font-semibold leading-relaxed text-forest-900">
                {step}
              </span>
            </li>
          ))}
        </ol>
      </Reveal>
    </SovereignContainer>
  )
}
