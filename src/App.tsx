import { HeroSection } from './components/HeroSection'
import { CompanySection } from './components/CompanySection'
import { LicenseSection } from './components/LicenseSection'
import { ProductionPlanSection } from './components/ProductionPlanSection'
import { PartnershipSection } from './components/PartnershipSection'
import { UseOfFundsSection } from './components/UseOfFundsSection'
import { FinancialLogicSection } from './components/FinancialLogicSection'
import { GovernanceSection } from './components/GovernanceSection'
import { ExpansionSection } from './components/ExpansionSection'
import { VisionSection } from './components/VisionSection'
import { Footer } from './components/Footer'

/**
 * نافذة العرض الاستثمارية — أطلس الذهبية للتعدين / رخصة إيسكسي
 * صفحة واحدة من عشرة أقسام معتمدة، تنتهي عند القسم العاشر.
 */
function App() {
  return (
    <main>
      {/* 01 — الافتتاحية المؤسسية */}
      <HeroSection />
      {/* 02 — من هي أطلس الذهبية للتعدين؟ */}
      <CompanySection />
      {/* 03 — رخصة إيسكسي والخريطة */}
      <LicenseSection />
      {/* 04 — المرحلة الأولى: خطة الإنتاج */}
      <ProductionPlanSection />
      {/* 05 — هيكل الشراكة */}
      <PartnershipSection />
      {/* 06 — استخدام مبلغ الشراكة */}
      <UseOfFundsSection />
      {/* 07 — المنطق المالي */}
      <FinancialLogicSection />
      {/* 08 — محاسبة الإنتاج والحوكمة */}
      <GovernanceSection />
      {/* 09 — الامتداد إلى الرخص الأربع */}
      <ExpansionSection />
      {/* 10 — الرؤية الصناعية والإغلاق */}
      <VisionSection />
      <Footer />
    </main>
  )
}

export default App
