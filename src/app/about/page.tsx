import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Dr. Bhushan',
  description:
    'Meet Dr. Bhushan – a world-class hair restoration specialist with over 22 years of experience, 15,000+ procedures, and a 98% patient success rate.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Dr. Bhushan | Hair Restoration Specialist',
    description:
      'Over 22 years of clinical excellence in PRP therapy and hair restoration. ISHRS Accredited.',
    url: 'https://www.drbhushanprp.com/about',
  },
}

const team = [
  {
    name: 'Dr. Elena Vance',
    role: 'Senior Trichologist',
    bio: 'Specializing in follicular scalp analysis and hormonal impact on hair density.',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBe32uYmtQdNdYsMozkJuN82hMOfFiadNKDbDjlp0rgSuFL9vbnwqhmep_bLsxtQ7ASeEidYCwnmvMSU5QDAaZPiEDK5YAAU_wSBLpInck2XyoNQES0Jom-g6oQmq_Sq82nPEdl_TmLusQbjSIBawMqboyRkwnEBdLNlpx9-f3u_d7-CQcbb-87uBjTgGEHiLBcLdvUF-uv-Na7MluOnC8_EcYNgx4srTWa5bybB9OTJncRhl5aU4SgMcCTdTnoJWRA85YHZB4frsJe',
  },
  {
    name: 'Marcus Thorne',
    role: 'Lead PRP Technician',
    bio: 'Expert in high-concentration platelet isolation and bioactive preparation protocols.',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbmMv8ZE3lKj_w3qFU5Y3bCdJ8iPtGnuy1czOTaLXRns_kUPLpb5jirDujODk-FTJi0pdrEQzkQXarbI2p8Cw7sdOy1pZrByc3bKtqensY87u-dUc7JzW8pgRM_RPTIdaBLC1li18Kzy6RjkXcBjE6BzZL0x466X0nVr0T46yI4ucwKTPtZi2wKBMS8U5hk1qJH8jdA1VOzqmSSMvV8LFut70zi4bYQ3Ue7IT38KYMqjxs0YZRTT-sR4QKIfcDtNymWzwO1_hloP4m',
  },
  {
    name: 'Sarah Jennings',
    role: 'Patient Care Coordinator',
    bio: 'Your primary point of contact for consultation scheduling and post-treatment guidance.',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2a3f1qlDNcY0iq8KxE5mzQb_1p-wBfo9cT6T0FSTP6L0F3iSidHDUspF3DKUp05ySSd6262fM92jTwdgm-7vf_wwdVeQeJrDO9u_5gOwb8vgmF1uj-fs4luq_2PHBvaqylU0iw7nLKZiTyKjOV-21S5rFm3Hu7uBSjxT8-SQtfu72DnOlnQ3B7c5bI-w1t9whrMSyTM59EcW33WRhJrDzZWz4zDAJ0XK-LfBUDNfpj-mhoUqCrUfO_vnKJ6YGV8CF8ekTNdp91gxz',
  },
]

export default function AboutPage() {
  return (
    <main className="max-w-[1280px] mx-auto px-8">
      {/* Hero */}
      <section className="py-section-gap grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-stack-md">
          <span className="text-secondary font-label-caps tracking-[0.2em] uppercase">
            Clinical Excellence
          </span>
          <h1 className="font-headline-xl text-primary leading-tight">
            Defining the Science of Hair Restoration
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-xl">
            Dr. Bhushan&apos;s clinic stands at the intersection of medical
            rigor and aesthetic artistry. We believe that true restoration
            requires a deep understanding of biological precision and
            personalized care.
          </p>
          <div className="pt-stack-md">
            <div className="flex items-center gap-4 text-primary">
              <span className="material-symbols-outlined text-3xl">
                verified
              </span>
              <span className="font-headline-md italic">
                Dr. Bhushan, MD, FISHRS
              </span>
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-primary-container/5 rounded-card -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
          <img
            alt="Dr. Bhushan – distinguished hair restoration specialist"
            className="relative z-10 w-full h-[500px] object-cover rounded-card shadow-md transition-transform duration-500 group-hover:scale-[1.01]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFK0Lzt1dlT581Cwt8__mQ4BF13QzsZwHcn4OPw42pdH1xibLnWOThaaorhcb_1ckY5OHeUYahF9UzVzGtomr1B0_FAjlfM0prltcQGCjZF4qhpupASd3MJlf-rYSFX9uN4Pe3ku9BEISoz7nxXAHiEnNybdFa30A7SpKEXbcvC8YRtCQd-GlSAoRSMFaIzrwoDLq8qYy13YlTSw_Uw_dUWMiKjhAerk-j2ZXzHs061PgTq4R4VVUoyXl3i0iaQlb3kCj70gPCgUSM"
          />
        </div>
      </section>

      {/* Mission & Philosophy */}
      <section className="py-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {[
            {
              icon: 'biotech',
              title: 'Scientific Rigor',
              desc: 'Every PRP treatment protocol is rooted in peer-reviewed clinical research and precise biological monitoring to ensure optimal follicular activation.',
            },
            {
              icon: 'diversity_1',
              title: 'Patient Integrity',
              desc: 'We prioritize medical ethics over commercial gain. We only recommend PRP when the clinical data suggests a high probability of success for your unique hair profile.',
            },
            {
              icon: 'architecture',
              title: 'Aesthetic Precision',
              desc: 'Restoration is more than growth; it is about natural patterns and density. Our approach respects the natural architectural flow of your hairline.',
            },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-white p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 rounded-card space-y-stack-md"
            >
              <span className="material-symbols-outlined text-secondary text-4xl">
                {icon}
              </span>
              <h3 className="font-headline-md text-primary">{title}</h3>
              <p className="text-on-surface-variant font-body-md">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Credentials */}
      <section className="py-section-gap bg-surface-container-low -mx-8 px-8 rounded-card">
        <div className="max-w-[1000px] mx-auto text-center mb-16">
          <h2 className="font-headline-lg text-primary mb-stack-md">
            A Legacy of Clinical Achievement
          </h2>
          <p className="font-body-lg text-on-surface-variant">
            Dr. Bhushan has spent over two decades refining the application of
            Platelet-Rich Plasma for dermatological restoration.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            {[
              {
                n: '01',
                title: 'Education & Fellowship',
                desc: 'Graduated with top honours from the Institute of Medical Excellence, followed by a prestigious fellowship at the Global Hair Restoration Society.',
              },
              {
                n: '02',
                title: 'Published Research',
                desc: 'Lead author on over 15 clinical trials investigating the efficacy of concentrated growth factors in androgenetic alopecia.',
              },
              {
                n: '03',
                title: 'Technological Innovation',
                desc: "Developer of the 'Bhushan Protocol'—a specialized triple-centrifugation process for maximum platelet concentration.",
              },
            ].map(({ n, title, desc }) => (
              <div key={n} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-container rounded-full flex items-center justify-center text-white font-bold font-sans">
                  {n}
                </div>
                <div>
                  <h4 className="font-headline-md text-primary mb-2">
                    {title}
                  </h4>
                  <p className="text-on-surface-variant font-body-md">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { stat: '15k+', label: 'Procedures' },
              { stat: '22', label: 'Years Exp.' },
              { stat: '98%', label: 'Success Rate' },
              { stat: '12', label: 'Global Awards' },
            ].map(({ stat, label }) => (
              <div
                key={label}
                className="bg-white p-6 rounded-card border border-slate-200 shadow-sm text-center"
              >
                <div className="text-3xl font-bold text-primary mb-1">
                  {stat}
                </div>
                <div className="font-label-caps text-secondary text-[10px]">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-section-gap">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-secondary font-label-caps tracking-widest uppercase">
              The Clinical Team
            </span>
            <h2 className="font-headline-lg text-primary mt-2">
              Expert Care in Every Step
            </h2>
          </div>
          <p className="text-on-surface-variant max-w-md italic font-body-md">
            &ldquo;Our team is united by a single goal: providing a sanctuary
            for restoration through medical excellence.&rdquo;
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map(({ name, role, bio, src }) => (
            <div key={name} className="group">
              <div className="relative overflow-hidden rounded-card aspect-[4/5] mb-6 shadow-sm">
                <img
                  alt={`Portrait of ${name}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                  src={src}
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h4 className="font-headline-md text-primary">{name}</h4>
              <p className="font-label-caps text-secondary mb-2 text-[10px]">
                {role}
              </p>
              <p className="text-on-surface-variant text-sm font-body-md">
                {bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Affiliations */}
      <section className="py-12 border-y border-slate-100">
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {['ISHRS Accredited', 'Dermatology Guild', 'PRP Research Labs', 'Clinical Excellence 2023'].map(
            (a) => (
              <span
                key={a}
                className="font-bold text-xl tracking-tighter uppercase font-headline-md"
              >
                {a}
              </span>
            ),
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-section-gap text-center">
        <h2 className="font-headline-lg text-primary mb-6">
          Ready to Begin Your Restoration?
        </h2>
        <Link
          href="/contact"
          className="inline-block bg-primary text-white px-10 py-4 rounded-button font-bold hover:bg-primary-container transition-colors shadow-sm"
        >
          Book a Consultation
        </Link>
      </section>
    </main>
  )
}
