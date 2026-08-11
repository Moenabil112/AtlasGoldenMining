# منجم أطلس للنحاس — العرض الاستثماري / Atlas Copper Mine Investment Presentation

واجهة عرض استثماري عربية (RTL) من صفحة واحدة و18 نافذة، تقدّم فرصة مشاركة إنتاجية
على مستوى المشروع في **منجم أطلس للنحاس** (Atlas Copper Mine) برعاية
**أطلس الذهبية للتعدين** (Atlas Golden Mining)، مبنية على دراسة
`ISSEKSI Copper Cathode Technical & Financial Study – Rev.04`.

An Arabic RTL single-page, 18-window investment presentation for the **Atlas
Copper Mine**, sponsored by **Atlas Golden Mining**, based on the *ISSEKSI Copper
Cathode Technical & Financial Study – Rev.04*.

## الفرصة / The opportunity

- **الأصل / Asset:** رخصة استغلال نحاس مغربية واحدة — رقم `353294` في جهة بني ملال – خنيفرة، بمساحة `15.36 كلم²`.
- **المشاركة / Participation:** تمويل 50% من متطلبات المشروع المؤهلة مقابل حق تعاقدي في 50% من إنتاج كاثود النحاس الفعلي القابل للبيع، لمدة `7 سنوات` تشغيلية.
- **تمويل المشروع / Project funding:** إجمالي `US$41.0 million` قبل الدين (CAPEX ثابتة `US$35.0m` + رأس مال عامل أولي `US$6.0m`).
- **سقف تمويل المستثمر / Investor funding ceiling:** `US$20.5 million` (50% من التمويل المؤهل).
- **الإنتاج / Production target:** هدف مشروع بمقدار `47,000` طن كاثود، منه حصة مستثمر مستهدفة `23,500` طن.
- **العملية / Process:** منشأة هيدروميتالورجية متكاملة **Heap Leach–SX/EW** لإنتاج كاثود النحاس.
- **غرفة البيانات / Data Room:** طبقتا وصول (عامة/أولية ومراقبة) للعناية الواجبة والأدلة الداعمة.

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

- `src/data/atlasCopper.ts` — محتوى النوافذ الاستثمارية 01–18
- `src/data/documents.ts` — بطاقات غرفة البيانات والوثائق الداعمة
- `src/data/isseksiGeojson.ts` — GeoJSON لحدود الرخصة ونطاق الموافقة البيئية
- `src/data/images.ts` — سجل الصور مع عناصر نائبة مصممة
- `src/components/` — مكونات النوافذ والمكونات المشتركة (`SovereignContainer`, `SectionHeader`, `Reveal`, `ImagePanel`, `MapPanel`)

## ملاحظة قانونية وقواعد الإفصاح / Legal & disclosure

أرقام الإنتاج والسعر والتكلفة والتدفق النقدي وصافي القيمة الحالية (NPV) ومعدل
العائد الداخلي (IRR) هي **افتراضات دراسة وأهداف** وليست ضمانات. سعر النحاس
`US$9,500/طن` هو افتراض دراسة وليس سعرًا فعليًا أو مضمونًا. والحق المقترح للمستثمر
هو 50% من إنتاج كاثود النحاس **الفعلي القابل للبيع** خلال مدة التشغيل السبع سنوات
المتفق عليها. لا تنقل المشاركة تلقائيًا ملكية الرخصة أو الشركة الأم. جميع التفاصيل
تخضع لاتفاقية عدم الإفصاح والفحص النافي للجهالة والاتفاقيات النهائية، ولا تمثل هذه
الواجهة عرضًا عامًا أو نشرة اكتتاب.

Production, price, cost, cash-flow, NPV, and IRR figures are study assumptions and
targets, not guarantees. The proposed investor entitlement is 50% of actual
saleable copper cathode production over the agreed seven-year operating period,
subject to independent verification and final agreements.
