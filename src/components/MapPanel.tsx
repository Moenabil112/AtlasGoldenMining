import { useMemo, useState } from 'react'
import {
  licensePerimeter,
  environmentalPlot,
  coordinatesNoteAr,
  mapDisclaimerAr,
  type LonLat,
} from '../data/isseksiGeojson'

/**
 * خريطة SVG خفيفة تعرض حدود رخصة إيسكسي ونطاق الموافقة البيئية
 * انطلاقًا من GeoJSON، دون الاعتماد على مكتبات خرائط خارجية.
 * بيانات GeoJSON محفوظة في src/data/isseksiGeojson.ts ويمكن لاحقًا
 * استبدال هذا المكون بخريطة Leaflet / MapLibre بنفس المصدر.
 */

const VIEW_W = 860
const PADDING = 70

function computeProjection(coordsList: LonLat[][]) {
  const all = coordsList.flat()
  const lons = all.map((c) => c[0])
  const lats = all.map((c) => c[1])
  const minLon = Math.min(...lons)
  const maxLon = Math.max(...lons)
  const minLat = Math.min(...lats)
  const maxLat = Math.max(...lats)

  // تصحيح نسبة العرض إلى الارتفاع حسب خط العرض المتوسط
  const midLat = ((minLat + maxLat) / 2) * (Math.PI / 180)
  const lonSpan = (maxLon - minLon) * Math.cos(midLat)
  const latSpan = maxLat - minLat

  const innerW = VIEW_W - PADDING * 2
  const innerH = innerW * (latSpan / lonSpan)
  const viewH = innerH + PADDING * 2

  const project = ([lon, lat]: LonLat): [number, number] => [
    PADDING + ((lon - minLon) / (maxLon - minLon)) * innerW,
    PADDING + ((maxLat - lat) / (maxLat - minLat)) * innerH,
  ]

  return { project, viewH }
}

function toPoints(coords: LonLat[], project: (c: LonLat) => [number, number]) {
  return coords
    .map((c) => project(c).map((v) => v.toFixed(1)).join(','))
    .join(' ')
}

export function MapPanel() {
  const [showLicense, setShowLicense] = useState(true)
  const [showEnvironmental, setShowEnvironmental] = useState(true)
  const [showCoordinates, setShowCoordinates] = useState(false)
  const [showFactCard, setShowFactCard] = useState(false)

  const { project, viewH, licensePoints, envPoints, licenseVertices, labelPos } =
    useMemo(() => {
      const { project, viewH } = computeProjection([
        licensePerimeter.coordinates,
        environmentalPlot.coordinates,
      ])
      const licensePoints = toPoints(licensePerimeter.coordinates, project)
      const envPoints = toPoints(environmentalPlot.coordinates, project)
      const licenseVertices = licensePerimeter.coordinates
        .slice(0, -1)
        .map((c) => project(c))
      // موضع التسمية: وسط الحدود العلوية للرخصة
      const [x1, y1] = project(licensePerimeter.coordinates[0])
      const [x2] = project(licensePerimeter.coordinates[1])
      const labelPos: [number, number] = [(x1 + x2) / 2, y1 + 34]
      return { project, viewH, licensePoints, envPoints, licenseVertices, labelPos }
    }, [])

  return (
    <div className="overflow-hidden rounded-lg border border-forest-800/40 bg-forest-950">
      {/* شريط التحكم بالطبقات */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-ivory-50/10 px-5 py-4">
        <span className="text-sm font-semibold text-gold-400">طبقات الخريطة</span>
        <label className="flex cursor-pointer items-center gap-2 text-sm text-ivory-50/85">
          <input
            type="checkbox"
            checked={showLicense}
            onChange={(e) => setShowLicense(e.target.checked)}
            className="accent-gold-500"
          />
          حدود رخصة الاستغلال
        </label>
        <label className="flex cursor-pointer items-center gap-2 text-sm text-ivory-50/85">
          <input
            type="checkbox"
            checked={showEnvironmental}
            onChange={(e) => setShowEnvironmental(e.target.checked)}
            className="accent-gold-500"
          />
          نطاق الموافقة البيئية
        </label>
        <button
          type="button"
          onClick={() => setShowCoordinates((v) => !v)}
          className="ms-auto rounded border border-gold-500/50 px-3 py-1.5 text-xs font-medium text-gold-300 transition-colors hover:bg-gold-500/10"
        >
          {showCoordinates ? 'إخفاء الإحداثيات الأصلية' : 'عرض الإحداثيات الأصلية'}
        </button>
      </div>

      <div className="relative">
        <svg
          viewBox={`0 0 ${VIEW_W} ${viewH}`}
          role="img"
          aria-label="خريطة حدود رخصة استغلال إيسكسي ونطاق الموافقة البيئية"
          className="block w-full"
        >
          {/* شبكة خلفية خفيفة بطابع مساحي */}
          <defs>
            <pattern id="grid" width="43" height="43" patternUnits="userSpaceOnUse">
              <path
                d="M 43 0 L 0 0 0 43"
                fill="none"
                stroke="#f3efe6"
                strokeOpacity="0.05"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width={VIEW_W} height={viewH} fill="url(#grid)" />

          {/* مؤشر الشمال */}
          <g transform={`translate(${VIEW_W - 46}, 44)`} opacity="0.7">
            <line x1="0" y1="14" x2="0" y2="-12" stroke="#d4b878" strokeWidth="1.5" />
            <path d="M -5 -6 L 0 -14 L 5 -6 Z" fill="#d4b878" />
            <text
              x="0"
              y="30"
              textAnchor="middle"
              fill="#d4b878"
              fontSize="13"
              fontFamily="inherit"
            >
              ش
            </text>
          </g>

          {/* حدود رخصة الاستغلال */}
          {showLicense && (
            <g
              onClick={() => setShowFactCard(true)}
              className="cursor-pointer"
              role="button"
              aria-label="عرض بطاقة بيانات رخصة إيسكسي"
            >
              <polygon
                points={licensePoints}
                fill="#c2a05a"
                fillOpacity="0.08"
                stroke="#d4b878"
                strokeWidth="2"
              />
              {licenseVertices.map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r="4" fill="#d4b878" />
              ))}
              <text
                x={labelPos[0]}
                y={labelPos[1]}
                textAnchor="middle"
                fill="#f3efe6"
                fontSize="17"
                fontWeight="600"
                fontFamily="inherit"
              >
                رخصة إيسكسي – 353294
              </text>
              <text
                x={labelPos[0]}
                y={labelPos[1] + 22}
                textAnchor="middle"
                fill="#d4b878"
                fontSize="12"
                fontFamily="inherit"
              >
                15.36 كلم² — سارية إلى غاية 2034
              </text>
            </g>
          )}

          {/* نطاق الموافقة البيئية — شفاف للنقر حتى لا يحجب مضلع الرخصة */}
          {showEnvironmental && (
            <g pointerEvents="none">
              <polygon
                points={envPoints}
                fill="#1a5442"
                fillOpacity="0.35"
                stroke="#4e9e7f"
                strokeWidth="1.5"
                strokeDasharray="6 4"
              />
              {(() => {
                const [cx, cy] = project([-6.2609, 32.2078])
                return (
                  <text
                    x={cx}
                    y={cy}
                    textAnchor="middle"
                    fill="#9fd0ba"
                    fontSize="12"
                    fontFamily="inherit"
                  >
                    نطاق الموافقة البيئية CRI/24/102
                  </text>
                )
              })()}
            </g>
          )}
        </svg>

        {/* بطاقة بيانات الرخصة عند الضغط */}
        {showFactCard && (
          <div className="absolute inset-x-4 bottom-4 rounded-lg border border-gold-500/40 bg-forest-900/95 p-5 shadow-xl backdrop-blur-sm sm:inset-x-auto sm:start-4 sm:max-w-sm">
            <div className="mb-3 flex items-start justify-between gap-3">
              <h4 className="font-bold text-gold-300">رخصة إيسكسي – 353294</h4>
              <button
                type="button"
                onClick={() => setShowFactCard(false)}
                aria-label="إغلاق بطاقة البيانات"
                className="text-ivory-50/60 transition-colors hover:text-ivory-50"
              >
                ✕
              </button>
            </div>
            <dl className="space-y-1.5 text-sm text-ivory-50/85">
              <div className="flex justify-between gap-4">
                <dt className="text-ivory-50/55">رقم الرخصة</dt>
                <dd className="tabular-nums-latn font-medium">353294</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ivory-50/55">المساحة</dt>
                <dd className="tabular-nums-latn font-medium">15.36 كلم²</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ivory-50/55">السريان</dt>
                <dd className="tabular-nums-latn font-medium" dir="ltr">
                  03/10/2024 – 02/10/2034
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ivory-50/55">الكيان القانوني</dt>
                <dd className="font-medium">SOUDAN IMPORT-EXPORT SARL</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ivory-50/55">حالة الشراكة</dt>
                <dd className="font-medium">نافذة شراكة إنتاجية — المرحلة الأولى</dd>
              </div>
            </dl>
          </div>
        )}
      </div>

      {/* جدول الإحداثيات الأصلية */}
      {showCoordinates && (
        <div className="border-t border-ivory-50/10 px-5 py-5">
          <p className="mb-4 text-xs leading-relaxed text-gold-300/90">
            الإحداثيات الأصلية بالنظام المساحي المغربي المسقط (Merchich / Nord Maroc — EPSG:26191)
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {[licensePerimeter, environmentalPlot].map((layer) => (
              <div key={layer.layerType} className="overflow-x-auto">
                <h5 className="mb-2 text-sm font-semibold text-ivory-50/85">
                  {layer.displayNameAr}
                </h5>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-ivory-50/15 text-ivory-50/50">
                      <th className="py-1.5 text-start font-medium">النقطة</th>
                      <th className="py-1.5 text-start font-medium">X</th>
                      <th className="py-1.5 text-start font-medium">Y</th>
                    </tr>
                  </thead>
                  <tbody className="text-ivory-50/80">
                    {layer.originalProjectedCoordinates.map((p) => (
                      <tr key={p.point} className="border-b border-ivory-50/5">
                        <td className="tabular-nums-latn py-1.5">{p.point}</td>
                        <td className="tabular-nums-latn py-1.5" dir="ltr">
                          {p.x.toFixed(2)}
                        </td>
                        <td className="tabular-nums-latn py-1.5" dir="ltr">
                          {p.y.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* تنبيهات مساحية */}
      <div className="space-y-1 border-t border-ivory-50/10 px-5 py-4">
        <p className="text-xs leading-relaxed text-ivory-50/50">{mapDisclaimerAr}</p>
        <p className="text-xs leading-relaxed text-ivory-50/50">{coordinatesNoteAr}</p>
      </div>
    </div>
  )
}
