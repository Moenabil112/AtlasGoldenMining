import { useMemo } from 'react'
import { hero, brand } from '../data/investmentWindow'
import { licensePerimeter } from '../data/isseksiGeojson'
import { Reveal } from './Reveal'

/** القسم 1 — الافتتاحية المؤسسية: نافذة الشراكة الإنتاجية */
export function HeroSection() {
  // مضلع الرخصة كعلامة مائية خلفية منخفضة الشفافية
  const watermarkPoints = useMemo(() => {
    const coords = licensePerimeter.coordinates
    const lons = coords.map((c) => c[0])
    const lats = coords.map((c) => c[1])
    const minLon = Math.min(...lons)
    const maxLon = Math.max(...lons)
    const minLat = Math.min(...lats)
    const maxLat = Math.max(...lats)
    return coords
      .map(([lon, lat]) => {
        const x = ((lon - minLon) / (maxLon - minLon)) * 400
        const y = ((maxLat - lat) / (maxLat - minLat)) * 400
        return `${x.toFixed(1)},${y.toFixed(1)}`
      })
      .join(' ')
  }, [])

  return (
    <header className="relative overflow-hidden bg-forest-950 text-ivory-50">
      {/* علامة مائية: حدود رخصة إيسكسي */}
      <svg
        viewBox="0 0 400 400"
        aria-hidden="true"
        className="pointer-events-none absolute -start-10 top-1/2 h-[130%] w-auto -translate-y-1/2 opacity-[0.05]"
      >
        <polygon
          points={watermarkPoints}
          fill="none"
          stroke="#d4b878"
          strokeWidth="1.5"
        />
      </svg>

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
            <p className="mb-5 text-sm font-medium tracking-wide text-gold-400">
              {brand.taglineAr} — {brand.windowLabelAr}
            </p>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              {hero.titleAr}
              <span className="mt-3 block text-2xl font-semibold leading-snug text-ivory-50/85 md:text-4xl">
                {hero.subtitleAr}
              </span>
            </h1>
          </Reveal>

          <Reveal delayMs={150}>
            <p className="mt-6 inline-block rounded border border-gold-500/40 bg-gold-500/10 px-4 py-2 text-sm font-semibold text-gold-300">
              {hero.partnershipNameAr}
            </p>
            <p className="mt-8 max-w-3xl text-base leading-loose text-ivory-50/75 md:text-lg">
              {hero.bodyAr}
            </p>
          </Reveal>

          <Reveal delayMs={300}>
            <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-ivory-50/10 pt-10 sm:grid-cols-3 lg:grid-cols-5">
              {hero.metrics.map((m) => (
                <div key={m.labelAr} className="flex flex-col gap-2">
                  <div className="flex items-baseline gap-1.5">
                    <span className="tabular-nums-latn text-3xl font-bold text-ivory-50 md:text-4xl">
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

          <Reveal delayMs={450}>
            <p className="mt-12 inline-flex items-center gap-2 text-sm text-ivory-50/70">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" aria-hidden="true" />
              {hero.licenseBadgeAr}
            </p>
          </Reveal>
        </div>
      </div>
    </header>
  )
}
