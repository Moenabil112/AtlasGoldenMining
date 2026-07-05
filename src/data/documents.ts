/**
 * غرفة المستندات والتحقق — وثائق داعمة لفهم الهوية القانونية
 * والرخص التشغيلية ومحفظة الرخص. تعرض كطبقة تحقق أولية وليست عرضًا عامًا.
 * أرقام تصاريح الاستكشاف تبقى هنا كبيانات وصفية ولا تعرض كعناوين عامة.
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
  /** مرجع تصريح يعرض كبيانات وصفية فقط (غرفة المستندات) */
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
  {
    // TODO: Add Moroccan research/exploration license documents to
    // public/documents/ when final packaging is prepared.
    title: 'رخص البحث المغربية',
    type: 'رخص بحث واستكشاف',
    country: 'المملكة المغربية',
    region: 'بني ملال – خنيفرة',
    description:
      'محفظة رخص بحث واستكشاف قابلة للتطوير بعد التحقق الفني، تعرض وثائقها ضمن حزمة المستندات النهائية.',
    fileUrl: '/documents/morocco-research-licenses.pdf',
    cta: 'عرض رخص البحث',
    available: false,
  },
  {
    title: 'GeoJSON / الخرائط',
    type: 'بيانات جغرافية',
    country: 'المملكة المغربية',
    region: 'بني ملال – خنيفرة',
    description:
      'طبقات جغرافية لحدود رخصة إيسكسي ونطاق الموافقة البيئية بصيغة GeoJSON لأغراض العرض الأولي، مع لزوم التحقق المساحي النهائي قبل أي اعتماد تنفيذي.',
    fileUrl: '/documents/isseksi-license-layers.geojson',
    cta: 'تحميل طبقات GeoJSON',
    available: true,
  },
  {
    // TODO: Add the Aguelmous controlled reference file when prepared.
    // Permit reference kept in metadata only, per disclosure policy.
    title: 'أگلموس — Smart Fault Demonstrator',
    type: 'مرجع استكشاف',
    country: 'المملكة المغربية',
    region: 'بني ملال – خنيفرة',
    reference: 'PR3538746',
    description:
      'حالة استكشاف ذكي للأهداف متعددة المعادن المرتبطة بالفوالق والبنيات الجيولوجية، تعرض كمرجع خاضع للتحقق ضمن غرفة المستندات.',
    fileUrl: '/documents/aguelmous-smart-fault-demonstrator.pdf',
    cta: 'عرض مرجع أگلموس',
    available: false,
  },
]

export const documentsLayer = {
  titleAr: 'غرفة المستندات والتحقق',
  subtitleAr:
    'مستندات داعمة لفهم الهوية القانونية والرخص التشغيلية ومحفظة الرخص.',
  footerAr:
    'هذه المستندات تعرض كطبقة تحقق أولية لدعم فهم الهوية القانونية والرخص التشغيلية. ولا تمثل هذه الواجهة عرضًا عامًا أو نشرة اكتتاب أو ضمانًا للعائد. تخضع جميع الوثائق للمراجعة القانونية والفنية قبل أي توقيع نهائي.',
  noteAr:
    'عرض هذه المستندات يهدف إلى دعم التحقق الأولي، ولا يغني عن الفحص القانوني والفني والمحاسبي قبل أي اتفاق نهائي.',
  pendingAr: 'تتاح هذه الوثيقة ضمن حزمة المستندات النهائية عند الطلب.',
}
