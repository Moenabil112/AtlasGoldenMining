import { dataRoomLayers, brand } from '../data/atlasCopper'
import { SovereignContainer } from './SovereignContainer'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'
import { VerificationDocuments } from './VerificationDocuments'

/**
 * النافذة 17 — غرفة البيانات
 * طبقة العناية الواجبة والأدلة الداعمة لمنجم أطلس للنحاس (طبقتا وصول:
 * عامة/أولية ومراقبة). تُحافظ على بطاقات المستندات وآلية الوصول القائمة.
 */
export function DataRoomSection() {
  return (
    <SovereignContainer id="data-room" tone="ivory">
      <SectionHeader
        index="17"
        title={dataRoomLayers.titleAr}
        headline={dataRoomLayers.headlineAr}
      />
      <Reveal>
        <p className="max-w-3xl leading-loose text-charcoal-700">
          {dataRoomLayers.subtitleAr}
        </p>
      </Reveal>

      {/* الطبقة العامة مقابل الطبقة المراقبة */}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-lg border border-ivory-200 bg-ivory-50 p-7">
            <div className="mb-5 flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-forest-600" aria-hidden="true" />
              <h3 className="text-sm font-bold text-forest-900">
                {dataRoomLayers.publicTitleAr}
              </h3>
            </div>
            <ul className="grid gap-2.5 sm:grid-cols-2">
              {dataRoomLayers.publicItemsAr.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-charcoal-700"
                >
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-600"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delayMs={120}>
          <div className="h-full rounded-lg bg-forest-950 p-7 text-ivory-50">
            <div className="mb-5 flex items-center gap-2.5">
              <span className="text-gold-400" aria-hidden="true">
                🔒
              </span>
              <h3 className="text-sm font-bold text-gold-300">
                {dataRoomLayers.protectedTitleAr}
              </h3>
            </div>
            <ul className="grid gap-2.5 sm:grid-cols-2">
              {dataRoomLayers.protectedItemsAr.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-ivory-50/75"
                >
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-400"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      {/* بيان اتفاقية عدم الإفصاح ودعوة الوصول */}
      <Reveal delayMs={160}>
        <div className="mt-8 rounded-lg border border-gold-500/40 bg-ivory-100 p-7">
          <p className="text-sm leading-loose text-charcoal-800">
            {dataRoomLayers.ndaStatementAr}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="#data-room"
              className="rounded border border-forest-800 bg-forest-950 px-6 py-3 text-sm font-semibold text-ivory-50 transition-colors hover:bg-forest-900"
            >
              {brand.dataRoomCtaAr}
            </a>
            <span className="text-xs leading-relaxed text-charcoal-700/70">
              {dataRoomLayers.ndaMessageAr}
            </span>
          </div>
        </div>
      </Reveal>

      {/* بطاقات المستندات (غرفة البيانات الحالية) */}
      <div className="mt-16 border-t border-ivory-200 pt-12">
        <VerificationDocuments showHeading={false} />
      </div>
    </SovereignContainer>
  )
}
