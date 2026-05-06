import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact & Consultation',
  description:
    'Book a private hair restoration consultation with Dr. Bhushan at our Harley Street clinic in London. Contact us today for expert PRP and FUE assessment.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Dr. Bhushan | Book Your Consultation',
    description:
      'Secure your personal consultation at the Harley Street clinic. Expert PRP and FUE hair restoration.',
    url: 'https://www.drbhushanprp.com/contact',
  },
}

const steps = [
  {
    n: 1,
    label: 'INQUIRY',
    desc: 'Submit your clinical details via our secure form.',
    style: 'bg-primary text-white shadow-lg shadow-primary/20',
  },
  {
    n: 2,
    label: 'SCREENING',
    desc: 'Preliminary review by our medical coordinator.',
    style: 'bg-secondary text-white shadow-lg shadow-secondary/20',
  },
  {
    n: 3,
    label: 'BOOKING',
    desc: 'Secure your formal slot with Dr. Bhushan.',
    style: 'border-2 border-primary bg-white text-primary',
  },
  {
    n: 4,
    label: 'RESULTS',
    desc: 'Begin your personalized restoration plan.',
    style: 'border-2 border-slate-200 bg-white text-slate-300',
    labelStyle: 'text-slate-400',
  },
]

export default function ContactPage() {
  return (
    <main className="max-w-[1280px] mx-auto px-8 py-16">
      {/* Hero */}
      <header className="mb-stack-lg max-w-3xl">
        <span className="text-secondary font-label-caps uppercase tracking-widest mb-stack-sm block">
          Private Client Inquiry
        </span>
        <h1 className="font-headline-xl text-primary mb-stack-md">
          Secure Your Personal Consultation
        </h1>
        <p className="font-body-lg text-on-surface-variant leading-relaxed">
          Connect with Dr. Bhushan&apos;s clinical team to discuss your hair
          restoration journey. We prioritize medical excellence and patient
          discretion in every interaction.
        </p>
      </header>

      {/* Bento grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        {/* Left column */}
        <div className="lg:col-span-5 space-y-gutter">
          {/* Clinical details */}
          <section className="bg-white p-stack-lg rounded-card border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <h3 className="font-headline-md text-primary mb-stack-lg">
              Clinical Access
            </h3>
            <div className="space-y-stack-lg">
              <div className="flex items-start gap-stack-md">
                <span className="material-symbols-outlined text-secondary">
                  location_on
                </span>
                <div>
                  <p className="font-label-caps text-[10px] uppercase text-on-surface-variant mb-1">
                    Harley Street Clinic
                  </p>
                  <p className="text-body-md font-sans">
                    102 Harley Street, Marylebone
                    <br />
                    London, W1G 7JB, United Kingdom
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-stack-md">
                <span className="material-symbols-outlined text-secondary">
                  call
                </span>
                <div>
                  <p className="font-label-caps text-[10px] uppercase text-on-surface-variant mb-1">
                    Inquiry Line
                  </p>
                  <p className="text-body-md text-primary font-semibold font-sans">
                    +44 (0) 20 7946 0123
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-stack-md">
                <span className="material-symbols-outlined text-secondary">
                  mail
                </span>
                <div>
                  <p className="font-label-caps text-[10px] uppercase text-on-surface-variant mb-1">
                    Medical Correspondence
                  </p>
                  <p className="text-body-md font-sans">
                    clinical@drbhushanprp.com
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Map */}
          <div className="relative h-[400px] w-full bg-surface-container overflow-hidden rounded-card border border-slate-100 shadow-sm group">
            <img
              alt="Map showing Dr. Bhushan clinic location on Harley Street, London"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBlUDDtv0qcHyyl2l4Hbr0JRRnKCBeI9FhoHCf-_HqKeTZb6Ekp6Ln0oX3GsBiyhE6_T7JkKz_ikLfrfPhMS6p-_eeeLatvQ60Q36MYffb4gQnpBCLqO12VsIHU-vDs1ay6tuHjY84st6IzIWAITlncLic42Q-t5NGTtmGNnIdOC80V2szXLz5l7y7yoIm19VsR0KK8sLGzeBVVqerJnaI_NaVnmjoF4sU1ePB9aqy0_NyVhjAuCQzmlyGMJbRi67g-oKeWHXD_jIB"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-stack-md border border-slate-100 rounded-lg flex justify-between items-center">
              <span className="font-label-caps text-primary text-[10px]">
                DR. BHUSHAN CLINIC
              </span>
              <a
                href="https://maps.google.com/?q=102+Harley+Street+London"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary text-xs font-bold hover:underline flex items-center gap-1 font-sans"
              >
                Get Directions{' '}
                <span className="material-symbols-outlined text-[14px]">
                  open_in_new
                </span>
              </a>
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-8 py-stack-md grayscale opacity-60">
            <img
              className="h-10"
              alt="General Medical Council certification"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs5oWP9HZanduTk0DWVni1tM4kGhwwNAieAg4QpGUeSY1w1fvrBlMGblipLtledlHsAEJiXXA-0D74fb4avmmBXkF44oilFii0vXyQROeybQGj52FSGmkOo9iXVuKCpiXGKoelyWw_u_zYCazuXjt8YKx-bNwIBDS4XIIg6b-uc4FSpzwfIpu9j8mmt7swYKL3u_xIUuKuAs0U2RB9MVePh7MNaPAvIhGuD_Y_bnP_eW4VTNjp0pM7tOqQvmJ-wn88BO7FTAKc79ny"
            />
            <img
              className="h-10"
              alt="International Society of Hair Restoration Surgery member badge"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIxWpWw8CmZlc4TpfWBSCUN1mo1UVaIrCv_z96PM8doXbZsD_8gsEYon-eOBv268rgbqY_bEiAx00dMiHbcsu592EAWYAm-ZZE7aVmzL3l45ffkAb_7lquLMCj6B_VkyqcqIiR3ZfycoHW_R7bUNAQACmrT6ozmJyJI7TnQflCtD2zEq4BY3hxhuOn79dxM9Bt3iHR4w-FhRdV0OQvqhZGp8b1qWn1bHRKuHmFvWrBAZQLYRz1ZZht_-ZjXMfCH3klwRWHmREe2wa6"
            />
          </div>
        </div>

        {/* Right column: form */}
        <div className="lg:col-span-7">
          <div className="bg-white p-stack-lg lg:p-12 rounded-card border border-slate-100 shadow-sm">
            <h2 className="font-headline-md text-primary mb-stack-md">
              Professional Inquiry Form
            </h2>
            <p className="font-body-md text-on-surface-variant mb-stack-lg">
              Please provide your details below. Our medical coordinator will
              contact you within 24 business hours.
            </p>
            <form className="space-y-6" action="#" method="POST">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    className="font-label-caps text-[10px] text-primary"
                    htmlFor="name"
                  >
                    FULL NAME
                  </label>
                  <input
                    className="w-full border-b border-outline-variant focus:border-secondary focus:ring-0 transition-colors bg-transparent py-2 placeholder:text-slate-300 font-sans"
                    id="name"
                    name="name"
                    placeholder="e.g. Alexander Hamilton"
                    type="text"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="font-label-caps text-[10px] text-primary"
                    htmlFor="email"
                  >
                    EMAIL ADDRESS
                  </label>
                  <input
                    className="w-full border-b border-outline-variant focus:border-secondary focus:ring-0 transition-colors bg-transparent py-2 placeholder:text-slate-300 font-sans"
                    id="email"
                    name="email"
                    placeholder="alex@example.com"
                    type="email"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    className="font-label-caps text-[10px] text-primary"
                    htmlFor="phone"
                  >
                    TELEPHONE NUMBER
                  </label>
                  <input
                    className="w-full border-b border-outline-variant focus:border-secondary focus:ring-0 transition-colors bg-transparent py-2 placeholder:text-slate-300 font-sans"
                    id="phone"
                    name="phone"
                    placeholder="+44 7000 000000"
                    type="tel"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="font-label-caps text-[10px] text-primary"
                    htmlFor="treatment"
                  >
                    INTERESTED TREATMENT
                  </label>
                  <select
                    className="w-full border-b border-outline-variant focus:border-secondary focus:ring-0 transition-colors bg-transparent py-2 font-sans"
                    id="treatment"
                    name="treatment"
                  >
                    <option>Standard PRP Therapy</option>
                    <option>Advanced Growth Factor Complex</option>
                    <option>Post-Transplant PRP Maintenance</option>
                    <option>General Hair Assessment</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label
                  className="font-label-caps text-[10px] text-primary"
                  htmlFor="message"
                >
                  CLINICAL NOTES OR QUESTIONS
                </label>
                <textarea
                  className="w-full border border-outline-variant rounded-lg focus:border-secondary focus:ring-1 focus:ring-secondary/10 transition-colors bg-surface-container-lowest p-4 placeholder:text-slate-300 font-sans"
                  id="message"
                  name="message"
                  placeholder="Describe your concerns or goals..."
                  rows={4}
                />
              </div>
              <div className="flex items-start gap-3">
                <input
                  className="mt-1 rounded-sm text-secondary focus:ring-secondary"
                  id="consent"
                  name="consent"
                  type="checkbox"
                  required
                />
                <label
                  className="text-xs text-on-surface-variant leading-tight font-sans"
                  htmlFor="consent"
                >
                  I consent to Dr. Bhushan Clinic storing my medical inquiry
                  data in accordance with the{' '}
                  <a href="#" className="text-secondary underline">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-secondary underline">
                    GDPR regulations
                  </a>
                  .
                </label>
              </div>
              <button
                className="w-full bg-primary text-on-primary font-label-caps py-5 rounded-lg uppercase tracking-widest hover:bg-primary-container transition-all flex justify-center items-center gap-2 group"
                type="submit"
              >
                Submit Inquiry
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Consultation Journey */}
      <section className="mt-section-gap py-stack-lg">
        <h3 className="font-headline-md text-primary text-center mb-12">
          Your Consultation Journey
        </h3>
        <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-12 max-w-5xl mx-auto">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-slate-200 -z-10" />
          {steps.map(({ n, label, desc, style, labelStyle }) => (
            <div
              key={n}
              className="flex flex-col items-center text-center space-y-4 flex-1"
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold font-sans ${style}`}
              >
                {n}
              </div>
              <div>
                <p
                  className={`font-label-caps text-[10px] ${labelStyle ?? 'text-primary'}`}
                >
                  {label}
                </p>
                <p className="text-xs text-on-surface-variant font-sans">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
