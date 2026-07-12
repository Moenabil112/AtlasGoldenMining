import { heroContent, institutional } from '../data/companyProfile'
import { brand } from '../data/investmentWindow'
import { siteImages } from '../data/images'
import { Reveal } from './Reveal'

/** القسم 1 — الافتتاحية المؤسسية الخاصة */
export function HeroSection() {
  return (
    <header
      className="relative overflow-hidden bg-forest-950 text-ivory-50"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(4,27,21,0.90), rgba(4,27,21,0.97)), url('${siteImages.hero.src}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        {/* شريط علوي رفيع */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ivory-50/10 py-6">
          <div className="flex items-baseline gap-3">
            <span className="text-lg font-bold text-gold-400">{brand.nameAr}</span>
            <span className="hidden text-xs tracking-widest text-ivory-50/40 sm:inline">
              {brand.nameEn.toUpperCase()}
            </span>
          </div>
          <span className="text-xs text-ivory-50/50">{brand.windowLabelAr}</span>
        </div>

        <div className="py-20 md:py-28">
          <Reveal>
            {/* التسمية المؤسسية + التنبيه */}
            <p className="inline-block rounded border border-gold-500/40 bg-gold-500/10 px-4 py-2 text-sm font-semibold text-gold-300">
              {institutional.eyebrowAr}
            </p>
            <p className="mt-3 max-w-2xl text-xs leading-relaxed text-ivory-50/55">
              {institutional.eyebrowDisclaimerAr}
            </p>

            <h1 className="mt-8 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              {heroContent.titleAr}
              <span className="mt-3 block text-2xl font-semibold leading-snug text-ivory-50/85 md:text-4xl">
                {heroContent.subtitleAr}
              </span>
            </h1>
          </Reveal>

          <Reveal delayMs={150}>
            <p className="mt-8 max-w-3xl text-base leading-loose text-ivory-50/75 md:text-lg">
              {heroContent.bodyAr}
            </p>
          </Reveal>

          <Reveal delayMs={300}>
            <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-10 border-t border-ivory-50/10 pt-10 sm:grid-cols-2 lg:grid-cols-5">
              {heroContent.metrics.map((m) => (
                <div key={m.labelAr} className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-baseline gap-1.5">
                    <span className="tabular-nums-latn text-2xl font-bold text-ivory-50 md:text-3xl">
                      {m.value}
                    </span>
                    {m.unitAr ? (
                      <span className="text-xs font-medium text-gold-400 md:text-sm">
                        {m.unitAr}
                      </span>
                    ) : null}
                  </div>
                  <p className="text-xs leading-relaxed text-ivory-50/60 md:text-sm">
                    {m.labelAr}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delayMs={420}>
            {/* دعوات إجراء مؤسسية */}
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <a
                href="#data-room"
                className="rounded border border-gold-500 bg-gold-500/10 px-6 py-3 text-sm font-semibold text-gold-300 transition-colors hover:bg-gold-500/20"
              >
                {institutional.ndaCtaAr}
              </a>
              <a
                href="#portfolio"
                className="rounded border border-ivory-50/25 px-6 py-3 text-sm font-semibold text-ivory-50/85 transition-colors hover:bg-ivory-50/5"
              >
                {institutional.secondaryCtaAr}
              </a>
            </div>
            <p className="mt-8 max-w-3xl border-s-2 border-gold-500 ps-4 text-sm leading-loose text-ivory-50/70">
              {heroContent.ndaNoteAr}
            </p>
          </Reveal>
        </div>
      </div>
    </header>
  )
}
