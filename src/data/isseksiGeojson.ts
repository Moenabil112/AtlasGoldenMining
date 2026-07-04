/**
 * GeoJSON — حدود رخصة استغلال إيسكسي ونطاق الموافقة البيئية
 * الإحداثيات الأصلية في الوثائق بنظام مغربي مسقط (EPSG:26191 Merchich / Nord Maroc)
 * وتم تحويلها إلى WGS84 لأغراض العرض على خرائط الويب.
 * إحداثيات محولة لأغراض العرض — يلزم التحقق المساحي النهائي قبل أي استعمال قانوني أو تنفيذي.
 */

export type LonLat = [number, number]

export interface ProjectedPoint {
  point: string
  x: number
  y: number
}

export interface LicenseFeature {
  layerType: 'exploitation_license_perimeter' | 'environmental_approval_plot'
  displayNameAr: string
  coordinates: LonLat[]
  originalProjectedCoordinates: ProjectedPoint[]
  properties: Record<string, string | number>
}

export const isseksiGeojson = {
  type: 'FeatureCollection',
  name: 'atlas_isseksi_license_layers',
  crs_note:
    'Source coordinates interpreted as EPSG:26191 Merchich / Nord Maroc and transformed to WGS84 for web display.',
  features: [
    {
      type: 'Feature',
      properties: {
        layer_type: 'exploitation_license_perimeter',
        display_name_ar: 'حدود رخصة استغلال إيسكسي',
        license_number: '353294',
        source_document_page: 3,
        legal_entity_in_document: 'SOUDAN IMPORT-EXPORT SARL',
        commercial_project_name: 'Atlas Golden Mining / أطلس الذهبية للتعدين',
        entity_rule_ar:
          'SOUDAN IMPORT-EXPORT SARL هي نفس الكيان/الامتداد المستخدم في العرض باسم أطلس الذهبية للتعدين ولا تعرض ككيان منفصل.',
        area_km2_from_document: 15.36,
        projected_area_km2_calculated: 15.3615,
        original_crs_assumption: 'EPSG:26191',
        validity_start: '03/10/2024',
        validity_end: '02/10/2034',
        validity_display_ar: 'سارية إلى غاية 2034',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-6.279894, 32.223395],
            [-6.237453, 32.223692],
            [-6.23718, 32.194822],
            [-6.245655, 32.194764],
            [-6.245586, 32.187557],
            [-6.279536, 32.187318],
            [-6.279894, 32.223395],
          ],
        ],
      },
      original_projected_coordinates: [
        { point: 'L1', x: 416926.96, y: 181281.06 },
        { point: 'L2', x: 420926.96, y: 181281.06 },
        { point: 'L3', x: 420926.96, y: 178080.19 },
        { point: 'L4', x: 420127.99, y: 178080.19 },
        { point: 'L5', x: 420127.99, y: 177281.06 },
        { point: 'L6', x: 416926.96, y: 177281.06 },
      ],
    },
    {
      type: 'Feature',
      properties: {
        layer_type: 'environmental_approval_plot',
        display_name_ar: 'نطاق الموافقة البيئية الداعم',
        environmental_approval_number: 'CRI/24/102',
        source_document_page: 2,
        legal_entity_in_document: 'SOUDAN IMPORT-EXPORT SARL',
        commercial_project_name: 'Atlas Golden Mining / أطلس الذهبية للتعدين',
        projected_area_km2_calculated: 0.8718,
        original_crs_assumption: 'EPSG:26191',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-6.266004, 32.215266],
            [-6.261146, 32.21635],
            [-6.255743, 32.200381],
            [-6.2606, 32.199297],
            [-6.266004, 32.215266],
          ],
        ],
      },
      original_projected_coordinates: [
        { point: '1', x: 418228.48, y: 180368.89 },
        { point: '2', x: 418687.32, y: 180485.28 },
        { point: '3', x: 419182.07, y: 178710.67 },
        { point: '4', x: 418723.24, y: 178594.27 },
      ],
    },
  ],
} as const

/** طبقات جاهزة للعرض على الخريطة */
export const licensePerimeter: LicenseFeature = {
  layerType: 'exploitation_license_perimeter',
  displayNameAr: 'حدود رخصة استغلال إيسكسي',
  coordinates: isseksiGeojson.features[0].geometry.coordinates[0].map(
    (c) => [c[0], c[1]] as LonLat,
  ),
  originalProjectedCoordinates: [
    ...isseksiGeojson.features[0].original_projected_coordinates,
  ],
  properties: { ...isseksiGeojson.features[0].properties },
}

export const environmentalPlot: LicenseFeature = {
  layerType: 'environmental_approval_plot',
  displayNameAr: 'نطاق الموافقة البيئية الداعم',
  coordinates: isseksiGeojson.features[1].geometry.coordinates[0].map(
    (c) => [c[0], c[1]] as LonLat,
  ),
  originalProjectedCoordinates: [
    ...isseksiGeojson.features[1].original_projected_coordinates,
  ],
  properties: { ...isseksiGeojson.features[1].properties },
}

export const mapDisclaimerAr =
  'التمثيل الجغرافي لأغراض العرض الاستثماري ويخضع للتحقق المساحي النهائي.'

export const coordinatesNoteAr =
  'إحداثيات محولة لأغراض العرض — يلزم التحقق المساحي النهائي قبل أي استعمال قانوني أو تنفيذي.'
