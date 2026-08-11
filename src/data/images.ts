/**
 * صور الواجهة — سرد بصري مؤسسي لمنجم أطلس للنحاس.
 *
 * تُقرأ عبر مسارات عامة `/images/<name>.jpg`. عند غياب أي ملف يظهر العنصر
 * النائب المصمم في `ImagePanel` تلقائيًا بدل الانكسار.
 */

export interface SiteImage {
  src: string
  alt: string
}

export const siteImages: Record<string, SiteImage> = {
  hero: {
    src: '/images/atlas-hero-mining.jpg',
    alt: 'مشهد تعدين جبلي ومعدات تشغيل',
  },
  fieldTeam: {
    src: '/images/geology-field-team.jpg',
    alt: 'فريق جيولوجي وهندسي في موقع تعدين',
  },
  terrain: {
    src: '/images/benimellal-mining-terrain.jpg',
    alt: 'تضاريس جهة بني ملال – خنيفرة',
  },
  processing: {
    src: '/images/ore-processing-value-chain.jpg',
    alt: 'معالجة الخام والرشح الكومي وإنتاج الكاثود',
  },
  greenMining: {
    src: '/images/green-mining-esg.jpg',
    alt: 'إدارة المياه والطاقة المتجددة وإعادة تأهيل الموقع',
  },
  digitalMining: {
    src: '/images/smart-mining-data-layer.jpg',
    alt: 'طبقة بيانات التشغيل والإنتاج',
  },
  offtake: {
    src: '/images/digital-offtake-logistics.jpg',
    alt: 'تخصيص وتسوية وتسليم كاثود النحاس',
  },
}
