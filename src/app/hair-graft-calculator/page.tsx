import type { Metadata } from 'next'
import Link from 'next/link'
import HairGraftCalculator from '@/components/HairGraftCalculator'

export const metadata: Metadata = {
  title: 'Hair Graft Calculator',
  description:
    'Estimate your hair restoration cost and graft count with our interactive hair graft calculator. Select your hair loss stage and characteristics for a personalized estimate.',
  alternates: { canonical: '/hair-graft-calculator' },
  openGraph: {
    title: 'Hair Graft Calculator | Dr. Bhushan',
    description:
      'Interactive tool to estimate hair graft count and restoration cost based on your hair loss stage.',
    url: 'https://www.drbhushanprp.com/hair-graft-calculator',
  },
}

export default function HairGraftCalculatorPage() {
  return (
    <main className="flex-grow container mx-auto px-4 py-12 max-w-6xl">
      {/* Header */}
      <section className="text-center mb-12">
        <div className="inline-block px-12 py-10 bg-white border border-slate-100 shadow-sm rounded-card">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 font-serif text-blue-950">
            Find Out Your Hair Restoration Cost
          </h1>
          <p className="text-slate-500 italic font-serif">
            Precision estimation for personalized treatment planning
          </p>
        </div>
      </section>

      {/* Calculator */}
      <HairGraftCalculator />

      {/* Science Info */}
      <section className="mt-20 border-t border-slate-100 pt-16 space-y-16">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold font-serif text-blue-950">
            The Science of Graft Planning
          </h2>
          <p className="text-slate-600 leading-relaxed font-sans font-light">
            Successful hair restoration relies on the precision transfer of
            follicular units from your donor zone. Each graft is meticulously
            handled to ensure maximum viability and natural integration into
            your recipient areas.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {[
            {
              n: '01.',
              title: 'Angle & Density',
              desc: 'Proper alignment ensures new growth matches your natural hair flow for an undetectable result.',
            },
            {
              n: '02.',
              title: 'Hairline Design',
              desc: 'We consider facial symmetry and age-appropriate transitions to create a timeless, aesthetic profile.',
            },
            {
              n: '03.',
              title: 'Donor Management',
              desc: 'Our conservative approach preserves your donor area for potential future treatments if needed.',
            },
          ].map(({ n, title, desc }) => (
            <div key={n} className="space-y-4">
              <div className="text-[#1A365D] text-2xl font-serif">{n}</div>
              <h3 className="font-bold text-lg font-serif text-blue-950">
                {title}
              </h3>
              <p className="text-sm text-slate-500 font-sans">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 text-center">
        <p className="text-on-surface-variant font-sans mb-6">
          Ready to get an expert assessment?
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#002045] hover:bg-[#1A365D] text-white px-10 py-4 rounded-button font-sans text-sm font-bold uppercase tracking-widest transition-all"
        >
          Book Free Consultation
        </Link>
      </section>
    </main>
  )
}
