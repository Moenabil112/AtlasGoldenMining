import { footer } from '../data/atlasCopper'

/** تذييل مؤسسي مختصر مع النص القانوني */
export function Footer() {
  return (
    <footer className="bg-forest-950 text-ivory-50">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="section-divider" />
        <div className="py-12">
          <p className="text-sm font-bold text-gold-400">{footer.lineAr}</p>
          <p className="mt-1 text-xs text-ivory-50/50">{footer.sponsorLineAr}</p>
          <p className="mt-4 max-w-4xl text-xs leading-loose text-ivory-50/55">
            {footer.disclaimerAr}
          </p>
          <p className="mt-3 max-w-4xl text-xs leading-loose text-ivory-50/55">
            {footer.legalAr}
          </p>
        </div>
      </div>
    </footer>
  )
}
