import {
  verificationDocuments,
  documentsLayer,
  type VerificationDocument,
} from '../data/documents'
import { Reveal } from './Reveal'

/** صفوف البيانات الوصفية للوثيقة حسب الحقول المتوفرة */
function metadataRows(doc: VerificationDocument) {
  const rows: { labelAr: string; valueAr: string; ltr?: boolean }[] = [
    { labelAr: 'نوع الوثيقة', valueAr: doc.type },
    { labelAr: 'الدولة', valueAr: doc.country },
  ]
  if (doc.region) rows.push({ labelAr: 'الجهة', valueAr: doc.region })
  if (doc.status) rows.push({ labelAr: 'الحالة', valueAr: doc.status })
  if (doc.issueDate)
    rows.push({ labelAr: 'تاريخ الإصدار', valueAr: doc.issueDate, ltr: true })
  if (doc.nationalNumber)
    rows.push({ labelAr: 'الرقم الوطني', valueAr: doc.nationalNumber, ltr: true })
  if (doc.licenseNumber)
    rows.push({ labelAr: 'رقم الرخصة', valueAr: doc.licenseNumber, ltr: true })
  if (doc.validUntil) rows.push({ labelAr: 'تاريخ الصلاحية', valueAr: doc.validUntil })
  if (doc.project) rows.push({ labelAr: 'المشروع', valueAr: doc.project })
  if (doc.reference)
    rows.push({ labelAr: 'مرجع التصريح', valueAr: doc.reference, ltr: true })
  return rows
}

/**
 * غرفة المستندات والتحقق — كتلة داعمة داخل قسم قاعدة الأصول المغربية،
 * وليست قسمًا رئيسيًا مستقلًا (تحافظ الواجهة على 10 أقسام فقط).
 */
interface VerificationDocumentsProps {
  /** إظهار الترويسة الداخلية؛ يُخفى عند استخدامها داخل قسم له ترويسة خاصة */
  showHeading?: boolean
}

export function VerificationDocuments({ showHeading = true }: VerificationDocumentsProps) {
  return (
    <Reveal delayMs={100}>
      <div>
        {showHeading && (
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-4">
              <span className="h-px w-10 bg-gold-600" aria-hidden="true" />
              <h3 className="text-xl font-bold text-forest-900 md:text-2xl">
                {documentsLayer.titleAr}
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-charcoal-700">
              {documentsLayer.subtitleAr}
            </p>
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {verificationDocuments.map((doc) => (
            <article
              key={doc.title}
              className="flex h-full flex-col rounded-lg border border-ivory-200 bg-ivory-50 p-7"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="inline-block rounded bg-forest-950 px-2.5 py-1 text-xs font-semibold text-gold-300">
                  {doc.type}
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold ${
                    doc.available ? 'text-forest-700' : 'text-charcoal-700/60'
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      doc.available ? 'bg-forest-600' : 'bg-charcoal-700/40'
                    }`}
                    aria-hidden="true"
                  />
                  {doc.available
                    ? documentsLayer.statusAvailableAr
                    : documentsLayer.statusPendingAr}
                </span>
              </div>
              <h4 className="mb-3 text-base font-bold leading-relaxed text-forest-900">
                {doc.title}
              </h4>
              <p className="mb-6 text-sm leading-loose text-charcoal-700">
                {doc.description}
              </p>
              <dl className="mb-7 space-y-2 border-t border-ivory-200 pt-4">
                {metadataRows(doc).map((row) => (
                  <div key={row.labelAr} className="flex justify-between gap-4 text-sm">
                    <dt className="text-charcoal-700/70">{row.labelAr}</dt>
                    <dd
                      className="tabular-nums-latn text-end font-semibold text-forest-900"
                      dir={row.ltr ? 'ltr' : undefined}
                    >
                      {row.valueAr}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-auto">
                {doc.available ? (
                  <a
                    href={doc.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded border border-forest-800 px-4 py-2.5 text-sm font-semibold text-forest-900 transition-colors hover:bg-forest-950 hover:text-ivory-50"
                  >
                    {doc.cta}
                    <span aria-hidden="true" className="text-xs">
                      ↗
                    </span>
                  </a>
                ) : (
                  <p className="rounded border border-dashed border-ivory-200 bg-ivory-100 px-4 py-2.5 text-center text-xs leading-relaxed text-charcoal-700/70">
                    {documentsLayer.pendingAr}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 space-y-2">
          <p className="max-w-4xl text-xs leading-loose text-charcoal-700/80">
            {documentsLayer.footerAr}
          </p>
          <p className="max-w-4xl text-xs leading-loose text-charcoal-700/60">
            {documentsLayer.noteAr}
          </p>
        </div>
      </div>
    </Reveal>
  )
}
