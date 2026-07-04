/**
 * طبقة المستندات والتحقق — وثائق داعمة لفهم الهوية القانونية والرخصة التشغيلية
 * تعرض كطبقة تحقق أولية وليست عرضًا عامًا أو نشرة اكتتاب.
 */

export interface VerificationDocument {
  title: string
  type: string
  country: string
  status?: string
  issueDate?: string
  nationalNumber?: string
  region?: string
  licenseNumber?: string
  validUntil?: string
  project?: string
  description: string
  fileUrl: string
  cta: string
  /** false عندما لا يكون ملف الوثيقة مرفوعًا بعد ضمن حزمة المستندات */
  available: boolean
}

export const verificationDocuments: VerificationDocument[] = [
  {
    title: 'السجل التجاري السعودي — أطلس الذهبية للتعدين',
    type: 'سجل تجاري',
    country: 'المملكة العربية السعودية',
    status: 'نشط',
    issueDate: '13/08/2024',
    nationalNumber: '7041340865',
    description:
      'يوضح السجل التجاري وجود كيان تجاري نشط باسم أطلس الذهبية للتعدين في المملكة العربية السعودية، كشركة ذات مسؤولية محدودة.',
    fileUrl: '/documents/atlas-golden-mining-saudi-commercial-registration.pdf',
    cta: 'عرض السجل التجاري',
    available: true,
  },
  {
    // TODO: Add the Isseksi exploitation license PDF to
    // public/documents/isseksi-exploitation-license-353294.pdf
    // when final document packaging is prepared, then set available: true.
    title: 'رخصة استغلال إيسكسي رقم 353294',
    type: 'رخصة استغلال',
    country: 'المملكة المغربية',
    region: 'بني ملال – خنيفرة',
    licenseNumber: '353294',
    validUntil: 'إلى غاية 02/10/2034',
    description:
      'توضح الوثيقة رخصة الاستغلال المرتبطة بمشروع إيسكسي في جهة بني ملال – خنيفرة، باعتبارها الأصل التشغيلي الأول في نافذة الشراكة الإنتاجية.',
    fileUrl: '/documents/isseksi-exploitation-license-353294.pdf',
    cta: 'عرض وثيقة الرخصة',
    available: false,
  },
  {
    // TODO: Split environmental approval into a separate PDF when final
    // document packaging is prepared, then set available: true.
    title: 'قرار الموافقة البيئية',
    type: 'موافقة بيئية',
    country: 'المملكة المغربية',
    region: 'بني ملال – خنيفرة',
    project: 'استغلال معدن النحاس بإيسكسي',
    description:
      'يوثق قرار الموافقة البيئية المرتبط بمشروع استغلال معدن النحاس داخل نطاق رخصة إيسكسي، ويعرض كوثيقة داعمة تخضع للمراجعة القانونية والفنية.',
    fileUrl: '/documents/isseksi-environmental-approval.pdf',
    cta: 'عرض الموافقة البيئية',
    available: false,
  },
]

export const documentsLayer = {
  titleAr: 'طبقة المستندات والتحقق',
  subtitleAr: 'مستندات داعمة لفهم الهوية القانونية والرخصة التشغيلية محل العرض.',
  footerAr:
    'هذه المستندات تعرض كطبقة تحقق أولية لدعم فهم الهوية القانونية والرخصة التشغيلية. ولا تمثل هذه الواجهة عرضًا عامًا أو نشرة اكتتاب أو ضمانًا للعائد. تخضع جميع الوثائق للمراجعة القانونية والفنية قبل أي توقيع نهائي.',
  noteAr:
    'ملاحظة: عرض هذه الوثائق يهدف إلى دعم التحقق الأولي من الهوية القانونية والرخصة التشغيلية، ولا يعد بديلاً عن الفحص القانوني والفني والمحاسبي قبل توقيع أي اتفاق نهائي.',
  pendingAr: 'تتاح هذه الوثيقة ضمن حزمة المستندات النهائية عند الطلب.',
}
