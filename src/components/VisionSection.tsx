import { vision, brand } from '../data/investmentWindow'
import { SovereignContainer } from './SovereignContainer'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'

/** القسم 10 — الرؤية الصناعية طويلة المدى وإغلاق النافذة */
export function VisionSection() {
  return (
    <SovereignContainer id="vision" tone="dark">
      <SectionHeader
        index="10"
        title={vision.titleAr}
        headline={vision.headlineAr}
        dark
      />
      <div className="grid gap-12 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div className="space-y-6">
            {vision.bodyAr.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="leading-loose text-ivory-50/75"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
        <Reveal delayMs={150} className="lg:col-span-2">
          <div className="rounded-lg border border-ivory-50/10 bg-forest-900 p-7">
            <h3 className="mb-6 text-sm font-bold text-gold-400">
              سلسلة القيمة المستهدفة
            </h3>
            <ol className="space-y-4">
              {vision.chainAr.map((step, i) => (
                <li key={step} className="flex items-center gap-4">
                  <span className="tabular-nums-latn flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold-400/60 text-xs font-bold text-gold-300">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium text-ivory-50/85">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>

      {/* الإغلاق المؤسسي */}
      <Reveal delayMs={250}>
        <div className="mt-20 border-t border-ivory-50/10 pt-14 text-center">
          <p className="mx-auto max-w-3xl text-lg font-semibold leading-loose text-ivory-50 md:text-xl">
            {vision.closingAr}
          </p>
          <p className="mt-8 text-sm font-medium tracking-wide text-gold-400">
            {brand.nameAr} — {brand.taglineAr}
          </p>
        </div>
      </Reveal>
    </SovereignContainer>
  )
}
