import { HeroSection } from './components/HeroSection'
import { CompanySection } from './components/CompanySection'
import { CapabilitiesSection } from './components/CapabilitiesSection'
import { MoroccoAssetsSection } from './components/MoroccoAssetsSection'
import { PrivateOfferSection } from './components/PrivateOfferSection'
import { IsseksiAnchorSection } from './components/IsseksiAnchorSection'
import { ValueChainSection } from './components/ValueChainSection'
import { SmartMiningSection } from './components/SmartMiningSection'
import { ESGGreenFinanceSection } from './components/ESGGreenFinanceSection'
import { BridgeClosingSection } from './components/BridgeClosingSection'
import { Footer } from './components/Footer'

/**
 * نافذة العرض الاستثمارية — أطلس الذهبية للتعدين
 * رحلة مؤسسية من 10 أقسام رئيسية:
 * أطلس ← الجسر ← الأصول المغربية وغرفة المستندات ← نافذة الدخول الخاصة
 * ← إيسكسي ← سلسلة القيمة ← التمكين الرقمي والحوكمة ← ESG ← الجسر والإغلاق.
 */
function App() {
  return (
    <main>
      {/* 01 — نافذة الدخول الخاصة */}
      <HeroSection />
      {/* 02 — من هي أطلس الذهبية للتعدين؟ */}
      <CompanySection />
      {/* 03 — القدرات والعمق الفني */}
      <CapabilitiesSection />
      {/* 04 — قاعدة الأصول المغربية + غرفة المستندات والتحقق */}
      <MoroccoAssetsSection />
      {/* 05 — نافذة الدخول الخاصة 60 يومًا + هيكل الشراكة والنموذج المالي */}
      <PrivateOfferSection />
      {/* 06 — إيسكسي: نقطة الإنتاج الأولى */}
      <IsseksiAnchorSection />
      {/* 07 — سلسلة القيمة وبناء القدرة التشغيلية */}
      <ValueChainSection />
      {/* 08 — التعدين الذكي وعقود الأوفتيك والحوكمة */}
      <SmartMiningSection />
      {/* 09 — ESG والتعدين الأخضر والتمويل الأخضر */}
      <ESGGreenFinanceSection />
      {/* 10 — الجسر المغربي–السعودي والإغلاق المؤسسي */}
      <BridgeClosingSection />
      <Footer />
    </main>
  )
}

export default App
