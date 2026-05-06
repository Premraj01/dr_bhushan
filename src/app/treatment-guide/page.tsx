import type { Metadata } from 'next'
import Link from 'next/link'
import HairGraftCalculator from '@/components/HairGraftCalculator'

export const metadata: Metadata = {
  title: 'Treatment Guide',
  description:
    'Explore Dr. Bhushan\'s evidence-based hair restoration treatments: PRP therapy, FUE transplant, and DHI implantation. Includes full recovery timeline and procedure overview.',
  alternates: { canonical: '/treatment-guide' },
  openGraph: {
    title: 'Hair Restoration Treatment Guide | Dr. Bhushan',
    description:
      'Complete guide to PRP therapy, FUE transplant, and DHI implantation with recovery timeline.',
    url: 'https://www.drbhushanprp.com/treatment-guide',
  },
}

const procedureSteps = [
  {
    n: '01',
    title: 'Micro-Analysis',
    desc: 'High-resolution scalp imaging to map donor capacity and recipient needs.',
  },
  {
    n: '02',
    title: 'Digital Design',
    desc: 'Mapping the new hairline using Golden Ratio principles for facial harmony.',
  },
  {
    n: '03',
    title: 'Graft Extraction',
    desc: 'Precision harvesting under high-power stereoscopic magnification.',
  },
  {
    n: '04',
    title: 'Restoration',
    desc: 'Final implantation ensuring natural follicle exit angles and density.',
  },
]

const recoverySteps = [
  {
    title: 'First 48 Hours',
    desc: 'Initial healing phase. Minor redness and swelling are normal. Patients are provided with a specialized saline spray for graft hydration.',
    last: false,
  },
  {
    title: 'Day 7 – 10',
    desc: 'Grafts are fully anchored. Most redness has subsided. First PRP follow-up treatment is scheduled to boost healing factors.',
    last: false,
  },
  {
    title: 'Month 1 – 3',
    desc: '"The Shedding Phase." Transplanted hairs fall out as follicles enter a new growth cycle. This is an expected part of the biological process.',
    last: false,
  },
  {
    title: 'Month 6 – 12',
    desc: 'New, healthy hair begins to emerge. Texture thickens monthly. Final aesthetic results are typically visible between months 10 and 12.',
    last: false,
  },
  {
    title: 'Lifelong Maintenance',
    desc: 'Quarterly PRP sessions are recommended to maintain the health of surrounding non-transplanted follicles.',
    last: true,
  },
]

export default function TreatmentGuidePage() {
  return (
    <>
      <main className="max-w-[1280px] mx-auto">
        {/* Hero */}
        <header className="pt-20 pb-16 px-8 text-center border-b border-slate-100">
          <span className="font-sans text-label-caps text-secondary mb-4 block uppercase tracking-widest font-bold">
            Clinical Excellence
          </span>
          <h1 className="font-headline-xl text-primary mb-6">
            Restoration Treatment Guide
          </h1>
          <p className="max-w-2xl mx-auto text-on-surface-variant font-body-lg">
            Our evidence-based approach combines clinical precision with artistic
            restoration. Explore our advanced techniques for natural,
            long-lasting hair regrowth.
          </p>
        </header>

        {/* Techniques Grid */}
        <section className="py-section-gap px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* PRP – hero card */}
            <div className="md:col-span-8 bg-white p-10 border border-slate-100 rounded-card shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <span className="material-symbols-outlined text-4xl text-[#578EBA]">
                    biotech
                  </span>
                  <span className="px-3 py-1 bg-primary-fixed text-primary text-[10px] font-bold uppercase tracking-widest rounded-full">
                    Signature Treatment
                  </span>
                </div>
                <h2 className="font-headline-lg text-primary mb-4">
                  Platelet-Rich Plasma (PRP)
                </h2>
                <p className="text-on-surface-variant mb-8 font-body-md leading-relaxed">
                  A therapeutic concentration of platelets derived from your own
                  blood. Using Dr. Bhushan&apos;s proprietary double-spin method,
                  we maximize growth factor concentration to revitalize dormant
                  follicles and thicken existing hair density without surgery.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Non-surgical & Minimally Invasive',
                    'Zero Downtime Clinical Procedure',
                    'Stimulates Biological Hair Growth',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-secondary"
                    >
                      <span
                        className="material-symbols-outlined text-sm"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check_circle
                      </span>
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <img
                  alt="Clinical PRP lab environment"
                  className="w-full h-48 object-cover mt-auto rounded-card"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCau3NHpFrmdumslN47am_6PbszY0RYIWEdCNJSWtceNSoyqTKuxSZZa8kcigBTlvo8rP0pGAgQrGWcQICjWsV4ny-7T7hIm5HBaK1FanOA-FVOvPb7wb40j2PQeBJibfb1qVzHkotsUK4UE6wgHKXsfFk6t2tErTHsp7JY92k0j1Q5-YLJhk3sp6z50ws7TRE6ttt4KFHQim8KAh1NZXNxGxyNRdofvyFSugC2aVQxNbrfZf6SAeHn_O8rYgrudzY-zS1VAtuObNqB"
                />
              </div>
            </div>

            {/* FUE */}
            <div className="md:col-span-4 bg-white p-8 border border-slate-100 rounded-card shadow-sm hover:shadow-md transition-all group flex flex-col">
              <span className="material-symbols-outlined text-3xl text-[#578EBA] mb-6">
                content_cut
              </span>
              <h3 className="font-headline-md text-primary mb-3">
                FUE Technique
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                Follicular Unit Extraction involves harvesting individual hair
                follicles from the donor area using specialized micro-punches. No
                linear scars, natural results.
              </p>
              <div className="mt-auto pt-6 border-t border-slate-50 flex justify-between items-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary font-sans">
                  Micro-Surgical
                </span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>

            {/* DHI */}
            <div className="md:col-span-4 bg-white p-8 border border-slate-100 rounded-card shadow-sm hover:shadow-md transition-all group flex flex-col">
              <span className="material-symbols-outlined text-3xl text-[#578EBA] mb-6">
                precision_manufacturing
              </span>
              <h3 className="font-headline-md text-primary mb-3">
                DHI Implantation
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                Direct Hair Implantation utilizes a specialized tool (Choi
                Implanter Pen) to place follicles directly into the scalp with
                precise angle and depth control.
              </p>
              <div className="mt-auto pt-6 border-t border-slate-50 flex justify-between items-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary font-sans">
                  Maximum Density
                </span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>

            {/* Certifications bar */}
            <div className="md:col-span-8 flex items-center justify-around bg-slate-50 p-8 border border-slate-100 rounded-card grayscale opacity-70">
              {[
                'https://lh3.googleusercontent.com/aida-public/AB6AXuAXrlzT-YzxcQ_OdCTjrpZQLeO2CtVpK-h4wNtllt8owVJhkjQt0LAFBmPJ4113T80FPAwXZnkCiKwDcf-J9uRCt_s3ah2uZEfqJCv36gziVLieGL6hOYJBzxYj-mVqU0hL_dqOL_P3eJ5TtMVkIshhtEtGc1JVBuDPwkuKuuH6YvOR6bvvtHukmaKRjxW5GYPz-nuZCR1ROjIOg9X5R6f6MZHH-TxstDF3F6o3bmq03puDgfMGfM7yL2yY5Py-rf7QMh1lsbS_2pO_',
                'https://lh3.googleusercontent.com/aida-public/AB6AXuALWC3oVbI2gppBXluOrJTbvs7z5CCoB5_OyMCfRfFjXXUMghOkmrZ-rfccdbPvODic1WHijAUSDbTqZceGuwYGxfkec-PWV-g8xj1OYx96WU0-qLLjFgZ8MNtCzFs2GaDEZGs_nKKc0UvrQnWuW0geWz6ctJ48eZFs57CuAsE7ZnBkC-18SKv6kJ7CDyQgt0fsDPlRZCjCjQa1wLxgKP4inneUkNmvKq-oO_wisRFm06oaFjwZFDmTTvjkp5WmaPWE-TXdjv2r2yPS',
                'https://lh3.googleusercontent.com/aida-public/AB6AXuAV0--B7iQ21LcL5ksgcw-M4l9jE-xp3Y14trFIa5v9kjlu4QqQ3-cLm2uHFchOA4bbpaOq5bgnFagZcZha8LyUEbH8Fu6mXm8CMA4jkg29s_Qcr0JgD1O98WZJHoJTh_9DOT3EeZmC5pYcVQiCyZKI3d_FI3XMAoceC8sGrOF20pP1hMuyNGyWk5zTKeyyjVFjrw3212XtnceDYAXFLloy2tQWvRaNo84G2rY55yZfOmU9uVzpLuZQpSOlL7XgVF4yrL-5p2CM_rFw',
              ].map((src, i) => (
                <img
                  key={i}
                  alt={`Certification ${i + 1}`}
                  className="h-8 object-contain"
                  src={src}
                />
              ))}
            </div>
          </div>
        </section>

        {/* The Procedure */}
        <section className="py-section-gap px-8 bg-primary text-white overflow-hidden relative">
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[400px] absolute -right-20 top-20">
              verified_user
            </span>
          </div>
          <div className="relative z-10">
            <div className="max-w-xl mb-16">
              <h2 className="font-headline-lg mb-4 text-primary-fixed">
                The Procedure
              </h2>
              <p className="text-on-primary-container font-body-lg leading-relaxed font-sans font-light">
                Every patient journey is meticulously planned using Dr.
                Bhushan&apos;s proprietary analysis software to ensure aesthetic
                symmetry and graft survival.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {procedureSteps.map(({ n, title, desc }) => (
                <div key={n} className="relative">
                  <div className="text-4xl font-serif font-bold text-secondary-fixed mb-4">
                    {n}
                  </div>
                  <h4 className="font-headline-md text-[20px] mb-2">{title}</h4>
                  <p className="text-on-primary-container text-sm font-sans font-light">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recovery Timeline */}
        <section className="py-section-gap px-8">
          <div className="flex flex-col md:flex-row gap-20">
            <div className="md:w-1/3">
              <h2 className="font-headline-lg text-primary mb-6">
                Recovery Timeline
              </h2>
              <p className="text-on-surface-variant mb-8 font-body-md leading-relaxed">
                Understanding your post-operative journey is crucial for optimal
                results. Dr. Bhushan&apos;s clinical team provides 24/7 support
                throughout this process.
              </p>
              <div className="bg-surface-container p-8 rounded-card border-l-4 border-[#578EBA] shadow-sm">
                <p className="text-sm italic text-primary-container font-serif">
                  &ldquo;The success of a transplant depends as much on
                  post-care as the procedure itself.&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center">
                    <span
                      className="material-symbols-outlined text-primary text-xs"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      signature
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest font-sans">
                    Dr. Bhushan
                  </span>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 space-y-0">
              {recoverySteps.map(({ title, desc, last }) => (
                <div
                  key={title}
                  className={`relative pl-8 ${last ? '' : 'pb-12'} border-l-2 ${last ? 'border-transparent' : 'border-[#1A365D]'}`}
                >
                  <div
                    className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ring-4 ring-background ${last ? 'bg-secondary' : 'bg-[#1A365D]'}`}
                  />
                  <h4 className="font-headline-md text-primary mb-2">
                    {title}
                  </h4>
                  <p className="text-on-surface-variant text-sm font-sans font-light">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-section-gap px-8">
          <div className="bg-white p-16 text-center rounded-card border border-slate-100 shadow-sm">
            <h3 className="font-headline-lg text-primary mb-6">
              Start Your Transformation Journey
            </h3>
            <p className="max-w-xl mx-auto text-on-surface-variant mb-10 font-sans font-light">
              Consultations include a full trichological scalp scan and a
              personalized restoration roadmap tailored to your specific hair
              loss profile.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#1A365D] text-white px-10 py-4 rounded-button font-sans text-xs font-bold uppercase tracking-widest hover:bg-opacity-90 transition-all"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/hair-graft-calculator"
                className="border border-[#1A365D] text-[#1A365D] px-10 py-4 rounded-button font-sans text-xs font-bold uppercase tracking-widest hover:bg-slate-50 transition-all"
              >
                View Graft Calculator
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Embedded Calculator */}
      <section id="calculator" className="w-full bg-[#fbf9f8] border-t border-slate-200 py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3 font-sans">
              Interactive Tool
            </p>
            <h2 className="text-4xl font-bold text-blue-950 font-serif mb-3">
              Hair Graft Calculator
            </h2>
            <p className="text-slate-500 italic font-serif">
              Precision estimation for personalized treatment planning
            </p>
          </div>
          <HairGraftCalculator />
          {/* Science Info */}
          <div className="mt-16 border-t border-slate-100 pt-16 space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h3 className="text-3xl font-bold font-serif">
                The Science of Graft Planning
              </h3>
              <p className="text-slate-600 leading-relaxed font-sans font-light">
                Successful hair restoration relies on the precision transfer of
                follicular units from your donor zone. Each graft is meticulously
                handled to ensure maximum viability and natural integration.
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
                  <h4 className="font-bold text-lg font-serif">{title}</h4>
                  <p className="text-sm text-slate-500 font-sans">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
