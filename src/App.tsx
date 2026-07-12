import { HeroSection } from './components/HeroSection'
import { ExecutiveSummarySection } from './components/ExecutiveSummarySection'
import { CompanySection } from './components/CompanySection'
import { CapabilitiesSection } from './components/CapabilitiesSection'
import { PortfolioSection } from './components/PortfolioSection'
import { PropositionSection } from './components/PropositionSection'
import { CapitalDeploymentSection } from './components/CapitalDeploymentSection'
import { PhasedInvestmentSection } from './components/PhasedInvestmentSection'
import { ValueChainSection } from './components/ValueChainSection'
import { OfftakeSection } from './components/OfftakeSection'
import { TechGovernanceSection } from './components/TechGovernanceSection'
import { CorridorSection } from './components/CorridorSection'
import { ESGGreenFinanceSection } from './components/ESGGreenFinanceSection'
import { GovernanceRiskSection } from './components/GovernanceRiskSection'
import { DataRoomSection } from './components/DataRoomSection'
import { ClosingSection } from './components/ClosingSection'
import { Footer } from './components/Footer'

/**
 * عرض استثماري خاص — محفظة أطلس التعدينية
 * رحلة مؤسسية من 16 قسمًا: من التعريف بأطلس إلى المحفظة والمقترح
 * الاستثماري (100 مليون ريال / 35%) وصولًا إلى غرفة المستندات والإغلاق.
 */
function App() {
  return (
    <main>
      {/* 01 — الافتتاحية المؤسسية الخاصة */}
      <HeroSection />
      {/* 02 — الملخص التنفيذي */}
      <ExecutiveSummarySection />
      {/* 03 — التعريف بأطلس الذهبية للتعدين */}
      <CompanySection />
      {/* 04 — القدرات الفنية والتشغيلية */}
      <CapabilitiesSection />
      {/* 05 — محفظة أطلس التعدينية (المشروعات، المعادن، إيسكسي، الخريطة) */}
      <PortfolioSection />
      {/* 06 — المقترح الاستثماري العام */}
      <PropositionSection />
      {/* 07 — منطق توظيف رأس المال */}
      <CapitalDeploymentSection />
      {/* 08 — الهيكل الاستثماري المرحلي */}
      <PhasedInvestmentSection />
      {/* 09 — سلسلة القيمة */}
      <ValueChainSection />
      {/* 10 — عقود الأوفتيك */}
      <OfftakeSection />
      {/* 11 — التكنولوجيا والحوكمة الرقمية */}
      <TechGovernanceSection />
      {/* 12 — الممر المغربي–السعودي */}
      <CorridorSection />
      {/* 13 — ESG والتمويل المستدام */}
      <ESGGreenFinanceSection />
      {/* 14 — الحوكمة وإدارة المخاطر */}
      <GovernanceRiskSection />
      {/* 15 — غرفة المستندات والتحقق واتفاقية عدم الإفصاح */}
      <DataRoomSection />
      {/* 16 — الإغلاق المؤسسي */}
      <ClosingSection />
      <Footer />
    </main>
  )
}

export default App
