import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dr. Bhushan PRP | Clinical Excellence in Hair Restoration',
  description:
    'Dr. Bhushan combines advanced PRP therapy with clinical precision to stimulate natural hair growth and restore confidence through personalized medical protocols.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Dr. Bhushan PRP | Science-Backed Hair Restoration',
    description:
      'Advanced PRP therapy and FUE transplant for permanent hair restoration results.',
    url: 'https://www.drbhushanprp.com',
  },
}

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[819px] flex items-center overflow-hidden bg-surface-container-lowest">
        <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <div className="z-10 py-20">
            <span className="font-label-caps text-secondary uppercase mb-stack-md block">
              Clinical Hair Restoration
            </span>
            <h1 className="font-headline-xl text-primary mb-stack-md leading-tight">
              Science-Backed Restoration for Permanent Results.
            </h1>
            <p className="font-body-lg text-on-surface-variant mb-stack-lg max-w-xl">
              Dr. Bhushan combines advanced PRP therapy with clinical precision
              to stimulate natural hair growth and restore confidence through
              personalized medical protocols.
            </p>
            <div className="flex flex-wrap gap-gutter">
              <Link
                href="/contact"
                className="bg-primary text-white px-8 py-4 rounded-button font-bold hover:bg-primary-container transition-colors shadow-sm"
              >
                Book Consultation
              </Link>
              <Link
                href="/treatment-guide"
                className="border border-primary text-primary px-8 py-4 rounded-button font-bold hover:bg-surface-container transition-colors"
              >
                View Treatments
              </Link>
            </div>
            <div className="mt-12 flex items-center space-x-6">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" />
                <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-300" />
                <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-400" />
              </div>
              <p className="text-sm font-label-caps text-on-surface-variant">
                Trusted by 2,000+ Patients
              </p>
            </div>
          </div>
          <div className="relative h-full hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl -z-10" />
            <img
              alt="Dr. Bhushan – clinical hair restoration specialist"
              className="w-full h-[600px] object-cover rounded-card shadow-lg"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQlDTV7sLoAR2Jm3bcXDiNyWlmkNjduwXPrNCu7FNOkao8w85JtJ-VbgMH7yNOnP8zESn3X1gjBbeD3JM-w4_GoXgeMNqurlHEP_wvV2_LrUDjOq30cByciLIolbNZ2bcAgZt8eq4jiD06rhHOdY-9nNRaQTxbXoDWRWmoiQ7ctC6C2YTcbKa6BPyK96MYJ1AnC76s4cV1Gkx7_1WAq3dEWW7XwEbtiGf8BkFL42zkuPr7nyuwx_k1T5e_MZ1aY27L9RDy0UkTVfSs"
            />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-y border-slate-100 bg-white">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="flex flex-wrap justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="font-label-caps text-slate-500 text-lg">
              ABHR ACCREDITED
            </span>
            <span className="font-label-caps text-slate-500 text-lg">
              ISO 9001:2015
            </span>
            <span className="font-label-caps text-slate-500 text-lg">
              FDA APPROVED PROTOCOLS
            </span>
            <span className="font-label-caps text-slate-500 text-lg">
              MEDICAL CLINIC COUNCIL
            </span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-section-gap">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-primary mb-4">
              Precision Restoration Services
            </h2>
            <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Innovative medical solutions tailored to your unique hair
              restoration journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {[
              {
                icon: 'science',
                title: 'PRP Therapy',
                desc: 'Concentrated growth factors from your own blood to revitalize dormant follicles and thicken existing hair naturally.',
              },
              {
                icon: 'biotech',
                title: 'FUE Transplant',
                desc: 'Minimally invasive Follicular Unit Extraction providing natural hairline restoration with zero linear scarring and rapid recovery.',
              },
              {
                icon: 'vaccines',
                title: 'Scalp Vitality',
                desc: 'Custom vitamin and nutrient infusions designed to optimize scalp health and maintain long-term restoration results.',
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white p-8 rounded-card border border-slate-100 tonal-layer hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-button flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-secondary">
                    {icon}
                  </span>
                </div>
                <h3 className="font-headline-md text-primary mb-4">{title}</h3>
                <p className="text-on-surface-variant mb-6 font-body-md">
                  {desc}
                </p>
                <Link
                  href="/treatment-guide"
                  className="text-secondary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all font-label-caps uppercase"
                >
                  LEARN MORE{' '}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Gallery */}
      <section className="bg-surface-container-low py-section-gap">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <span className="font-label-caps text-secondary uppercase mb-2 block">
                Visual Proof
              </span>
              <h2 className="font-headline-lg text-primary">
                Clinical Results Gallery
              </h2>
              <p className="font-body-md text-on-surface-variant mt-4">
                Unretouched results from our premium clinical cases showing
                progress over 6–12 months of specialized treatment.
              </p>
            </div>
            <button className="border-b-2 border-primary text-primary font-bold pb-1 hover:text-secondary hover:border-secondary transition-colors font-label-caps">
              View All Patient Stories
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter">
            <div className="lg:col-span-7 space-y-gutter">
              <div className="bg-white rounded-card overflow-hidden tonal-layer group">
                <div className="grid grid-cols-2 gap-1">
                  <div className="relative overflow-hidden">
                    <img
                      alt="Hair loss crown area before PRP treatment"
                      className="w-full h-[400px] object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVzPuPqP-3WQsIxkCmFc1FfFIwFGoZQYbFHvIuG1_PNg6mJ8uI5qvfhN18MjysXNnkAwKdBPp70Z6i8El_kpLdQdbX4Nz_-ZY15QxsiaV6igP58v4B8D96EK7k34RzEa3GwgIytnh_9yGBDSXLhVG5A3Hk-xNvbt2-styC2uXOVTfJZgP-xmkxI6UwzmR3vljTFCLxVTXnHw0F0ZRCTgk_HLOgiWVsFc_V77LBjuLxGrd5EMddixn5776HRbIfpP24OfGKkhn00wha"
                    />
                    <span className="absolute bottom-4 left-4 bg-primary/80 text-white px-3 py-1 text-[10px] font-bold rounded-button uppercase tracking-wider">
                      BEFORE
                    </span>
                  </div>
                  <div className="relative overflow-hidden">
                    <img
                      alt="Hair crown area after 6 months PRP treatment"
                      className="w-full h-[400px] object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhjZHtT8OFlSkPlSPF-u1BYJYjJS5v5o4GDUf5TS4iooO8WFfMQmjnHFU_6eEydF8olRntr23hStz2taF4gBV8rTLPoD1gCtUkLazhCjvLscyVZWzWQ_CZRKGqantxb6UgX8UVoDiZOBpImpdS69CLm0WTy5gylRUd0c1v1-qFzYZLCfy9I80aNreVSpU4npJE6d46eHUEEmLqaSTRzuSfH_Oke5dwDt60SkaGdniYYO8baPeEDcHk9RsQdjYsKXYfQ8gbTUvWCR9w"
                    />
                    <span className="absolute bottom-4 left-4 bg-secondary/80 text-white px-3 py-1 text-[10px] font-bold rounded-button uppercase tracking-wider">
                      AFTER 6 MONTHS
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="font-headline-md text-primary">
                    Male Pattern Restoration
                  </h4>
                  <p className="text-on-surface-variant mt-2 font-body-md">
                    Combination of 4 PRP Sessions and daily topical protocol.
                    Visible density increase of 35%.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-gutter">
              <div className="bg-white p-8 rounded-card border border-slate-100 tonal-layer flex-grow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">
                      format_quote
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-primary font-body-md">
                      James R.
                    </p>
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">
                      Tech Executive
                    </p>
                  </div>
                </div>
                <p className="font-serif italic text-lg leading-relaxed text-primary">
                  &ldquo;The precision and professionalism of Dr. Bhushan&apos;s
                  clinic are unmatched. After just three sessions, the results
                  were beyond my expectations.&rdquo;
                </p>
              </div>
              <div className="bg-primary p-8 rounded-card text-white shadow-lg">
                <h4 className="font-headline-md mb-4">Expertise Badge</h4>
                <div className="flex items-center gap-4 border-t border-white/20 pt-6">
                  <div className="w-16 h-16 rounded-button border border-white/30 flex items-center justify-center p-2">
                    <span className="material-symbols-outlined text-4xl">
                      workspace_premium
                    </span>
                  </div>
                  <p className="font-serif text-sm italic">
                    &ldquo;Clinical excellence is not an act, but a habit in our
                    practice.&rdquo; — Dr. Bhushan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-section-gap">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-primary">
              Your Restoration Journey
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-slate-200 hidden md:block" />
            <div className="space-y-12">
              {[
                {
                  step: 1,
                  title: 'Initial Consultation',
                  desc: 'Comprehensive scalp analysis and genetic history review to build your custom roadmap.',
                  reverse: false,
                },
                {
                  step: 2,
                  title: 'The Treatment Phase',
                  desc: 'Administering high-concentration PRP using precision micro-needle delivery systems.',
                  reverse: true,
                },
                {
                  step: 3,
                  title: 'Ongoing Evaluation',
                  desc: 'Quarterly reviews to track density progress and adjust topical nutrients as needed.',
                  reverse: false,
                },
              ].map(({ step, title, desc, reverse }) => (
                <div
                  key={step}
                  className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 relative`}
                >
                  <div
                    className={`md:w-1/2 ${!reverse ? 'md:text-right' : ''}`}
                  >
                    <h4 className="font-headline-md text-primary">{title}</h4>
                    <p className="text-on-surface-variant mt-2 font-body-md">
                      {desc}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center z-10 shrink-0 font-bold shadow-sm">
                    {step}
                  </div>
                  <div className="md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-container text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full -mr-48 -mt-48 blur-3xl" />
        <div className="max-w-[1280px] mx-auto px-8 relative z-10 text-center">
          <h2 className="font-headline-lg mb-6">
            Take the first step toward restoration.
          </h2>
          <p className="font-body-lg text-blue-200/80 mb-10 max-w-2xl mx-auto">
            Schedule your private clinical consultation today and discover the
            medical potential for your hair growth.
          </p>
          <div className="flex justify-center gap-gutter">
            <Link
              href="/contact"
              className="bg-white text-primary px-10 py-4 rounded-button font-bold hover:bg-blue-50 transition-colors shadow-lg"
            >
              Book Your Appointment
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
