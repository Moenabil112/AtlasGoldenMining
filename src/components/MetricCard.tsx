interface MetricCardProps {
  value: string
  unit?: string
  label: string
  /** ألوان مناسبة للخلفيات الداكنة */
  dark?: boolean
}

/** بطاقة رقم رئيسي: قيمة كبيرة، وحدة، ووصف قصير */
export function MetricCard({ value, unit, label, dark = false }: MetricCardProps) {
  return (
    <div
      className={`flex flex-col gap-2 border-s-2 ps-4 ${
        dark ? 'border-gold-400' : 'border-gold-600'
      }`}
    >
      <div className="flex items-baseline gap-2">
        <span
          className={`tabular-nums-latn text-3xl font-bold md:text-4xl ${
            dark ? 'text-ivory-50' : 'text-forest-900'
          }`}
        >
          {value}
        </span>
        {unit ? (
          <span
            className={`text-sm font-medium ${
              dark ? 'text-gold-300' : 'text-gold-600'
            }`}
          >
            {unit}
          </span>
        ) : null}
      </div>
      <p
        className={`text-sm leading-relaxed ${
          dark ? 'text-ivory-50/70' : 'text-charcoal-700'
        }`}
      >
        {label}
      </p>
    </div>
  )
}
