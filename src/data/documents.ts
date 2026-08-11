/**
 * غرفة البيانات والتحقق — وثائق داعمة لفهم الهوية القانونية للراعي
 * والرخصة التشغيلية والأدلة الجغرافية لمنجم أطلس للنحاس.
 * تُعرض كطبقة تحقق ومراجعة وليست عرضًا عامًا.
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
  project?: string
  /** مرجع تصريح يعرض كبيانات وصفية فقط (غرفة البيانات) */
  reference?: string
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
      'يوضح السجل التجاري وجود كيان تجاري نشط باسم أطلس الذهبية للتعدين، راعي مشروع منجم أطلس للنحاس، كشركة ذات مسؤولية محدودة.',
    fileUrl: '/documents/atlas-golden-mining-saudi-commercial-registration.pdf',
    cta: 'عرض السجل التجاري',
    available: true,
  },
  {
    // TODO: Add the exploitation license PDF to
    // public/documents/atlas-copper-exploitation-license-353294.pdf
    // when final document packaging is prepared, then set available: true.
    title: 'رخصة استغلال منجم أطلس للنحاس رقم 353294',
    type: 'رخصة استغلال',
    country: 'المملكة المغربية',
    region: 'بني ملال – خنيفرة',
    licenseNumber: '353294',
    description:
      'توضح الوثيقة رخصة الاستغلال المرتبطة بمنجم أطلس للنحاس في جهة بني ملال – خنيفرة، باعتبارها أساس الأصل التشغيلي للفرصة الاستثمارية.',
    fileUrl: '/documents/atlas-copper-exploitation-license-353294.pdf',
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
    project: 'استغلال معدن النحاس بمنجم أطلس',
    description:
      'يوثق قرار الموافقة البيئية المرتبط بمشروع استغلال معدن النحاس داخل نطاق الرخصة، ويعرض كوثيقة داعمة تخضع للمراجعة القانونية والفنية.',
    fileUrl: '/documents/atlas-copper-environmental-approval.pdf',
    cta: 'عرض الموافقة البيئية',
    available: false,
  },
  {
    // TODO: Add the Rev.04 controlled financial model to
    // public/documents/ within the controlled due-diligence layer.
    title: 'النموذج المالي Rev.04 (طبقة مراقبة)',
    type: 'نموذج مالي',
    country: 'المملكة المغربية',
    region: 'بني ملال – خنيفرة',
    project: 'منجم أطلس للنحاس',
    description:
      'النموذج المالي وتفصيل CAPEX/OPEX واقتصاديات الحالة الأساسية ضمن طبقة العناية الواجبة المراقبة، متاح بعد توقيع اتفاقية عدم الإفصاح واستكمال التحقق.',
    fileUrl: '/documents/atlas-copper-financial-model-rev04.pdf',
    cta: 'ضمن الطبقة المراقبة',
    available: false,
  },
  {
    title: 'GeoJSON / الخرائط',
    type: 'بيانات جغرافية',
    country: 'المملكة المغربية',
    region: 'بني ملال – خنيفرة',
    description:
      'طبقات جغرافية لحدود رخصة الاستغلال ونطاق الموافقة البيئية بصيغة GeoJSON لأغراض العرض، مع لزوم التحقق المساحي (الكاداسترالي) النهائي قبل أي اعتماد تنفيذي.',
    fileUrl: '/documents/isseksi-license-layers.geojson',
    cta: 'تحميل طبقات GeoJSON',
    available: true,
  },
]

export const documentsLayer = {
  titleAr: 'غرفة البيانات والتحقق',
  subtitleAr:
    'مستندات داعمة لفهم الهوية القانونية للراعي والرخصة التشغيلية والأدلة الجغرافية لمنجم أطلس للنحاس.',
  footerAr:
    'تُعرض هذه المستندات كطبقة تحقق لدعم فهم الهوية القانونية والرخصة التشغيلية. ولا تمثل هذه الواجهة عرضًا عامًا أو نشرة اكتتاب أو ضمانًا للعائد. تخضع جميع الوثائق للمراجعة القانونية والفنية قبل أي توقيع نهائي.',
  noteAr:
    'عرض هذه المستندات يهدف إلى دعم التحقق، ولا يغني عن الفحص القانوني والفني والمحاسبي قبل أي اتفاق نهائي.',
  pendingAr: 'تتاح هذه الوثيقة ضمن حزمة المستندات النهائية أو الطبقة المراقبة عند الطلب.',
  statusAvailableAr: 'متوفر',
  statusPendingAr: 'قيد الإضافة',
}
