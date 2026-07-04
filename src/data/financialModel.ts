/**
 * النموذج المالي المختصر لنافذة الشراكة — نموذج تقديري
 * جميع الأرقام قابلة للتحديث بعد نتائج التشغيل والتحاليل ولا تمثل ضمانًا للعائد.
 */

export const totalContribution = 20_000_000
export const phaseMonths = 9
export const treatedTonnes = 300_000
export const expectedProductionTonnes = 5_000

export const partnerSharePercent = 0.35
export const atlasSharePercent = 0.65

export const partnerProductionTonnes =
  expectedProductionTonnes * partnerSharePercent // 1,750 طن
export const atlasProductionTonnes =
  expectedProductionTonnes * atlasSharePercent // 3,250 طن
export const impliedCapitalPerTonne =
  totalContribution / expectedProductionTonnes // 4,000 ريال / طن متوقع

/** تنسيق الأرقام بأسلوب عربي مألوف مع فواصل الآلاف */
export const fmt = (n: number): string =>
  n.toLocaleString('en-US', { maximumFractionDigits: 0 })

/**
 * اختبار حساسية مبسط لحصة الشريك حسب صافي سعر البيع التجاري للطن.
 * هذه الأرقام لا تمثل سعر بيع نهائيًا — هي لاختبار حساسية النموذج فقط.
 */
export interface SensitivityRow {
  pricePerTonne: number
  totalProductionValue: number
  partnerShareValue: number
  readingAr: string
}

export const sensitivityRows: SensitivityRow[] = [
  {
    pricePerTonne: 12_000,
    totalProductionValue: 60_000_000,
    partnerShareValue: 21_000_000,
    readingAr:
      'يغطي أصل المساهمة تقريبًا قبل أي ضرائب أو ترتيبات خاصة',
  },
  {
    pricePerTonne: 15_000,
    totalProductionValue: 75_000_000,
    partnerShareValue: 26_250_000,
    readingAr: 'عائد جاذب إذا تحقق الإنتاج والجودة والبيع',
  },
  {
    pricePerTonne: 18_000,
    totalProductionValue: 90_000_000,
    partnerShareValue: 31_500_000,
    readingAr: 'عائد قوي لكنه مشروط بالتنفيذ والسوق',
  },
]

/** تعريف صافي الإنتاج التجاري كما ورد في ملف السياق */
export const netProductionDefinitionAr =
  'صافي الإنتاج التجاري يعني كمية أسمنت النحاس القابلة للبيع بعد الوزن، الفرز، المعالجة، خصم الرطوبة، خصم الفاقد التشغيلي المقبول، واعتماد تحليل أو شهادة جودة تجارية. هذا التعريف لا يعني ملكية في الرخصة أو الشركة؛ الشريك يحصل على حق إنتاجي محدد من منتج المرحلة الأولى.'

export const cashSettlementFormulaAr =
  'حق الشريك النقدي = 35% × صافي كمية المنتج المباعة × صافي سعر البيع التجاري بعد خصم تكاليف البيع المباشرة المتفق عليها.'
