import { HeroSection } from './components/HeroSection'
import { SnapshotSection } from './components/SnapshotSection'
import { SponsorProfileSection } from './components/SponsorProfileSection'
import { AssetSection } from './components/AssetSection'
import { ProductionPlanSection } from './components/ProductionPlanSection'
import { TechnicalProcessSection } from './components/TechnicalProcessSection'
import { StagedCapacitySection } from './components/StagedCapacitySection'
import { PropositionSection } from './components/PropositionSection'
import { FundingStructureSection } from './components/FundingStructureSection'
import { EquipmentContributionSection } from './components/EquipmentContributionSection'
import { EconomicsSection } from './components/EconomicsSection'
import { OfftakeSection } from './components/OfftakeSection'
import { GovernanceRiskSection } from './components/GovernanceRiskSection'
import { FIDConditionsSection } from './components/FIDConditionsSection'
import { ResponsibleDeliverySection } from './components/ResponsibleDeliverySection'
import { LicenseMapSection } from './components/LicenseMapSection'
import { DataRoomSection } from './components/DataRoomSection'
import { ClosingSection } from './components/ClosingSection'
import { Footer } from './components/Footer'

/**
 * منجم أطلس للنحاس — العرض الاستثماري
 * رحلة قرار المستثمر عبر 18 نافذة: من الافتتاحية إلى الأصل وخطة الإنتاج
 * والعملية الفنية والتمويل والاقتصاديات والأوفتيك والحوكمة، ثم غرفة البيانات
 * والدعوة الختامية. مشاركة إنتاجية على مستوى المشروع: 50% من إنتاج كاثود
 * النحاس الفعلي مقابل تمويل 50% من المتطلبات المؤهلة لمدة سبع سنوات.
 */
function App() {
  return (
    <main>
      {/* 01 — الافتتاحية الاستثمارية */}
      <HeroSection />
      {/* 02 — لقطة قرار المستثمر */}
      <SnapshotSection />
      {/* 03 — ملف أطلس الذهبية للتعدين (الراعي) */}
      <SponsorProfileSection />
      {/* 04 — أصل منجم أطلس للنحاس */}
      <AssetSection />
      {/* 05 — خطة الإنتاج */}
      <ProductionPlanSection />
      {/* 06 — العملية الفنية */}
      <TechnicalProcessSection />
      {/* 07 — القدرة المرحلية للمصنع */}
      <StagedCapacitySection />
      {/* 08 — المقترح الاستثماري */}
      <PropositionSection />
      {/* 09 — هيكل التمويل */}
      <FundingStructureSection />
      {/* 10 — مساهمة المعدات */}
      <EquipmentContributionSection />
      {/* 11 — اقتصاديات الحالة الأساسية */}
      <EconomicsSection />
      {/* 12 — الأوفتيك والتسوية */}
      <OfftakeSection />
      {/* 13 — الحوكمة وحماية المستثمر */}
      <GovernanceRiskSection />
      {/* 14 — شروط القرار الاستثماري النهائي (FID) */}
      <FIDConditionsSection />
      {/* 15 — التنفيذ المسؤول للمشروع */}
      <ResponsibleDeliverySection />
      {/* 16 — خريطة الرخصة والأدلة الداعمة */}
      <LicenseMapSection />
      {/* 17 — غرفة البيانات */}
      <DataRoomSection />
      {/* 18 — دعوة الاستثمار الختامية */}
      <ClosingSection />
      <Footer />
    </main>
  )
}

export default App
