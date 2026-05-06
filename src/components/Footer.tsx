import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-20">
      <div className="max-w-[1280px] mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 font-sans text-sm">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <span className="text-xl font-bold text-blue-950 mb-4 block font-serif">
            Dr. Bhushan
          </span>
          <p className="text-slate-500 leading-relaxed text-xs mb-6 font-light">
            Leading hair restoration through clinical excellence and specialized
            PRP protocols.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary">
              language
            </span>
            <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary">
              mail
            </span>
            <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary">
              share
            </span>
          </div>
        </div>

        {/* Clinics */}
        <div>
          <h5 className="text-blue-900 font-bold uppercase tracking-widest text-[10px] mb-6">
            Clinics
          </h5>
          <ul className="space-y-4 text-slate-500 text-xs font-light">
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                Central City Medical Hub
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                Wellness Heights Wing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                Satellite Restoration Lab
              </Link>
            </li>
          </ul>
        </div>

        {/* Patient Resources */}
        <div>
          <h5 className="text-blue-900 font-bold uppercase tracking-widest text-[10px] mb-6">
            Patient Resources
          </h5>
          <ul className="space-y-4 text-slate-500 text-xs font-light">
            <li>
              <Link href="/treatment-guide" className="hover:text-primary transition-colors">
                Pre-Treatment Guide
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                Aftercare Protocol
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                Financing Options
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                Clinical FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Clinic Info */}
        <div>
          <h5 className="text-blue-900 font-bold uppercase tracking-widest text-[10px] mb-6">
            Clinic Info
          </h5>
          <p className="text-slate-500 text-xs font-light mb-2">
            Mon - Sat: 9:00 AM - 7:00 PM
          </p>
          <p className="text-slate-500 text-xs font-light mb-6">
            +44 (0) 20 7946 0123
          </p>
          <Link
            href="/contact"
            className="block text-center border border-blue-900 text-blue-900 py-3 rounded-button font-bold text-[10px] uppercase tracking-widest hover:bg-blue-900 hover:text-white transition-all"
          >
            Book Consultation
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1280px] mx-auto px-8 py-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-400 text-[10px] uppercase tracking-wider">
          © 2024 Dr. Bhushan Hair Restoration Clinic. Clinical Excellence in
          PRP.
        </p>
        <div className="flex gap-6 text-[10px] text-slate-400 uppercase tracking-wider font-sans">
          <Link href="#" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline">
            Medical Disclaimer
          </Link>
          <Link href="#" className="hover:underline">
            Patient Terms
          </Link>
          <Link href="#" className="hover:underline">
            Ethics Code
          </Link>
        </div>
      </div>
    </footer>
  )
}
