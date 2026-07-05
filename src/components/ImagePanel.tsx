import { useState } from 'react'
import type { SiteImage } from '../data/images'

interface ImagePanelProps {
  image: SiteImage
  /** ارتفاع اللوحة */
  heightClass?: string
  /** تسمية ظاهرة أسفل الصورة؛ الافتراضي نص alt */
  labelAr?: string
  className?: string
}

/**
 * لوحة صورة مؤسسية مع تدرج داكن وتسمية عربية.
 * عند غياب ملف الصورة تعرض خلفية مصممة بدل الانكسار، مع الإبقاء على التسمية.
 */
export function ImagePanel({
  image,
  heightClass = 'h-56 md:h-72',
  labelAr,
  className = '',
}: ImagePanelProps) {
  const [failed, setFailed] = useState(false)

  return (
    <figure
      className={`relative overflow-hidden rounded-lg border border-forest-800/20 ${heightClass} ${className}`}
    >
      {!failed ? (
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        /* عنصر نائب مصمم إلى حين توفر الصورة النهائية */
        <div className="absolute inset-0 bg-gradient-to-br from-forest-900 via-forest-800 to-charcoal-900">
          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full opacity-[0.07]"
            viewBox="0 0 100 60"
            preserveAspectRatio="none"
          >
            <path
              d="M0 52 L18 30 L30 40 L48 16 L62 32 L78 12 L100 38 L100 60 L0 60 Z"
              fill="#d4b878"
            />
          </svg>
        </div>
      )}
      <div
        className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/25 to-transparent"
        aria-hidden="true"
      />
      <figcaption className="absolute inset-x-0 bottom-0 p-5">
        <span className="mb-2 block h-px w-8 bg-gold-400" aria-hidden="true" />
        <p className="text-sm font-semibold text-ivory-50">{labelAr ?? image.alt}</p>
      </figcaption>
    </figure>
  )
}
