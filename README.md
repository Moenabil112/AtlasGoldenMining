# أطلس الذهبية للتعدين — نافذة الشراكة الإنتاجية / Atlas Golden Mining Investment Window

واجهة عرض استثماري عربية (RTL) من صفحة واحدة وعشرة أقسام، تقدم أطلس الذهبية للتعدين
كمالك ومشغل تعديني مغربي، ونافذة شراكة إنتاجية حول رخصة استغلال إيسكسي
(رقم 353294 — سارية إلى غاية 2034) في جهة بني ملال – خنيفرة.

An Arabic RTL single-page investment presentation window for Atlas Golden Mining,
presenting the Isseksi copper cement production partnership (SAR 20M contribution
for 35% of Phase I net commercial copper cement production).

## التقنيات / Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4 (`@tailwindcss/vite`)
- خريطة SVG خفيفة مبنية على GeoJSON دون مكتبات خرائط خارجية

## التشغيل / Running

```bash
npm install
npm run dev      # خادم التطوير
npm run build    # فحص TypeScript + بناء الإنتاج
npm run preview  # معاينة نسخة الإنتاج
npm run lint     # oxlint
```

## البنية / Structure

- `src/data/investmentWindow.ts` — نصوص وبيانات الأقسام العشرة
- `src/data/financialModel.ts` — النموذج المالي التقديري والحسابات
- `src/data/useOfFunds.ts` — توزيع مبلغ الشراكة (20,000,000 ريال سعودي)
- `src/data/isseksiGeojson.ts` — GeoJSON لحدود الرخصة ونطاق الموافقة البيئية
- `src/components/` — مكونات الأقسام والمكونات المشتركة

## ملاحظة قانونية

هذه الواجهة مخصصة للعرض الأولي ولا تمثل عرضًا عامًا أو نشرة اكتتاب أو ضمانًا
للعائد. جميع الأرقام التشغيلية والمالية قابلة للتحديث بعد التحقق الفني والمحاسبي.
