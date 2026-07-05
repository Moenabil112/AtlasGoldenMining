/**
 * صور الواجهة — سرد بصري مؤسسي
 *
 * TODO: الصور التالية غير مرفوعة بعد إلى public/images/ — عند توفرها ستظهر
 * تلقائيًا مكان العناصر النائبة المصممة:
 *   /public/images/atlas-hero-mining.jpg
 *   /public/images/morocco-saudi-minerals-corridor.jpg
 *   /public/images/geology-field-team.jpg
 *   /public/images/benimellal-mining-terrain.jpg
 *   /public/images/ore-processing-value-chain.jpg
 *   /public/images/green-mining-esg.jpg
 *   /public/images/smart-mining-data-layer.jpg
 *   /public/images/digital-offtake-logistics.jpg
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
  corridor: {
    src: '/images/morocco-saudi-minerals-corridor.jpg',
    alt: 'جسر معدني بين المغرب والسعودية',
  },
  fieldTeam: {
    src: '/images/geology-field-team.jpg',
    alt: 'فريق جيولوجي في موقع تعدين',
  },
  terrain: {
    src: '/images/benimellal-mining-terrain.jpg',
    alt: 'تضاريس جهة بني ملال خنيفرة',
  },
  processing: {
    src: '/images/ore-processing-value-chain.jpg',
    alt: 'معالجة خام المعادن والغربلة والغسيل',
  },
  greenMining: {
    src: '/images/green-mining-esg.jpg',
    alt: 'التعدين الأخضر والطاقة المتجددة',
  },
  digitalMining: {
    src: '/images/smart-mining-data-layer.jpg',
    alt: 'طبقة بيانات التعدين الذكي',
  },
  offtake: {
    src: '/images/digital-offtake-logistics.jpg',
    alt: 'عقود أوفتيك وسلاسل إمداد المعادن',
  },
}
