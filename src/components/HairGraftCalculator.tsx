'use client'

import { useState } from 'react'

const STAGES = [
  {
    id: 1,
    label: 'Stage 1',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8374osXiO9nLy-i5Teah4prjOOpKuInGYgyQ07fv9YbQCm5wF2BjUklx4x3LhLgNhc31QcRfupY4ZCfgR1YeoCOVAU3Dqk7sXVy-hTdjCwP3J_zG6HAndofbRv2lZySq_ONC_4aggjgHMCJaQTpBGUoDWnPX5goOWJ3ojPCbk3VEFfevnWkp8TuJvcM7ZsM-e3Q4usVcrhp37ooAs5qkc-pP0KqRb3Gzx7tOC9j2CRvqdfiyNeGyjXupFTjRmb4uKMH7YWNg0Px3j',
  },
  {
    id: 2,
    label: 'Stage 2',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD69LcPQmRrtXczaK-3p1DVE4tXEoTB8LUWxJw3tviW27pta5bSevb9So4g91vQQRrk1X2RGu15hdIWwLCf5maCPPzGnQVudYktJcag56ye1Pk0XbVnz_6zEM_GSrq8FHl2lrn-bMTTo4DmjaLfLNwQQstov0emfUMPusKRX4oSOysO1eQfJrXSxfF0D_h7wTcT1QLXWFzw3iSWZzTgucygMKWOZWYuGB5B0iRdByrE3XzTKfxIrvs4_jZSxNQIbyqLvAERrEgTAxs8',
  },
  {
    id: 3,
    label: 'Stage 3',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp8PyvNiie29ytt9ywyxV3BiF_aK4xyZj7lUkNLh16ScWCdHOtEpTRikcVOd67uNjqNRJsklJHMi2LwN6S8Plv9n-NaeBAwyFJFZCRq5VEKBABtQBCVIRrlFcE81xMziuOMpA0l5XKUNojO_TNIl2Jy2_pw7s1meT4pOiZaa_wffRE34NUHyqQRnwUvoz472f7_E7KjPlGpMmIc-9YqevPztmH8FGPIe4K0wXe8wwUqDeBY8Nvenz9HVc8bZQU8hycHtuthRcjL1XI',
  },
  {
    id: 4,
    label: 'Stage 4',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHIJnGfltHEi-nED-QsWAgm9EY3KmVxGiyodhoTBxBvss_RkfGMikvoK0dWQysHIs-S9E93uiktIU8HHwOo9IyvZ4Pu4NzTkgck34OABhHnEa-w5Bt4o3WthHmLSwYykUoZ0uy0RlZdUHZxr1zP-nJ_AFyqZ5rOR8rIu-7ZK0aCs5UA9TXjdpE_U4VC84-rMmHa-ONVwe-2plgUfJmohBjCi8fYesFg6lIAmqb_5wECWsuHs2mzG2zEeXtp3kt8pxxaSyQmN3c-XQ5',
  },
  {
    id: 5,
    label: 'Stage 5',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANZR1KWDWvidpqvWmgRPGYnPItEFHzCoyzjdwTD6Y6To7fk5v5bMPP5k-EaIPuyRB92hcU31_CsvM0zSEAMt_EyQ_YZlZ66BVHW7x1SQc_nQ2QwptNH_CdxNQ6lpCRBW0SJ2UZO8AkwvKaINfxG4crXxqt7xHth3b_dCJZCR6bGZqD-ovKXZYhwYojF_lN8ERj6j0KRFEZFNmupcKwZpzjeo_Lkc0mcMd3O7GwU_Gcas_tF0MEqQmYDMemhQZr2RuXynuN7v5eKRd1',
  },
  {
    id: 6,
    label: 'Stage 6',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPpafoHa_cd0lWbMzEdX_ABEcMTnEtAVbpFIRUdWq7Z17RPOEXI-Kwe95jzFi4pnd3D-r9IcH9GYmO8bymw3GvpjznuUKRF8gwzDkFf-d5ornkRs7pCckGSaby_fh1WFlULW5RJfQN-_2cQOYPK9oxFKKxrXsDZbpse8A2ooK9CLlZnFrPdFwdFX_0GXsb9Dq5IAhsUxo0PVb9_6H4uFaAyW7pbjfk4NoVZ3e0kWAjox3q3hSvqetbAzIMQaN-YpRcOb9I74OPdjNZ',
  },
  {
    id: 7,
    label: 'Stage 7',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtVyJ0Cn4jLBZmbrirdz8sdfLPmR5DwEL7xRt1VVxrWK3327Y6YKsY4XhS67VccG52SEU2ldiEUQFSwksjegfFCNrheNR2qOmabsFrq-ioSJINmxHM8xOMHm-gVQQ3eOi_ISag9GNehoma5owJwHXrZKRLc7rf7gJT8a-27IOp39ZTnrY2m9kJ6qvUDS1P6Vkl93GF81fHbOctDQkq-oGzjA4fHjNUG08YkeNQyfdQavNd5dJyA74OtKW5MaLTSoFtuZbNVuslyklT',
  },
  {
    id: 8,
    label: 'Vertex',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUfL7oW2JgXI-T335w95XPNpB3R5035-O_S8PnJvMcdDVEhLEQLFe4RrCHEOY8lRe8H1dMAqiHURSL_qHgXmzccAy0GNFRmbeo16OA4wAPznyF0hQd8u9P3wCpuo45BWnJ_y25VI2wFSShQttSpvseaYBebZ5P52zjnybVsuDrRF7jaIs1Q_TA21zh4BZwnkbK3uJT80dn8m_YdsTalzpRgAKD94j1OOSeE9LA0jplUecqe7gGXAyjZUVP890zTgW-FzGzOgIjyO25',
  },
]

function OptionGroup({
  label,
  options,
  selected,
  onSelect,
}: {
  label: string
  options: string[]
  selected: string
  onSelect: (v: string) => void
}) {
  return (
    <div>
      <p className="text-[10px] font-bold text-slate-400 mb-3 uppercase tracking-widest font-sans">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onSelect(opt)}
            className={`option-btn px-6 py-2 border border-slate-200 rounded-button text-sm transition-colors font-sans ${
              selected === opt
                ? 'active'
                : 'hover:border-[#1A365D]'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function HairGraftCalculator() {
  const [activeStage, setActiveStage] = useState(4)
  const [hairCaliber, setHairCaliber] = useState('Medium')
  const [curlPattern, setCurlPattern] = useState('Straight')
  const [colorContrast, setColorContrast] = useState('Medium')

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Input Column */}
      <div className="lg:col-span-2 space-y-8">
        {/* Step 1: Hair Loss Stage */}
        <div className="bg-white p-8 border border-slate-100 rounded-card shadow-sm">
          <h3 className="text-lg font-semibold mb-6 flex items-center font-serif">
            <span className="w-8 h-8 rounded-full bg-[#1A365D] text-white inline-flex items-center justify-center mr-3 text-sm font-sans">
              1
            </span>
            Select the stage that best matches your hair loss
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {STAGES.map((stage) => (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage.id)}
                className={`stage-card border border-slate-200 rounded-card p-4 hover:border-[#1A365D] transition-all group ${
                  activeStage === stage.id ? 'active' : ''
                }`}
              >
                <img
                  alt={`Hair Loss ${stage.label}`}
                  className="mx-auto mb-2 opacity-80 group-hover:opacity-100"
                  src={stage.src}
                />
                <span
                  className={`text-[10px] uppercase tracking-wider block font-sans ${
                    activeStage === stage.id
                      ? 'font-bold text-[#1A365D]'
                      : 'text-slate-500'
                  }`}
                >
                  {stage.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Hair Characteristics */}
        <div className="bg-white p-8 border border-slate-100 rounded-card shadow-sm">
          <h3 className="text-lg font-semibold mb-6 flex items-center font-serif">
            <span className="w-8 h-8 rounded-full bg-[#1A365D] text-white inline-flex items-center justify-center mr-3 text-sm font-sans">
              2
            </span>
            Describe your hair characteristics
          </h3>
          <div className="space-y-6">
            <OptionGroup
              label="Hair Caliber"
              options={['Fine', 'Medium', 'Coarse']}
              selected={hairCaliber}
              onSelect={setHairCaliber}
            />
            <OptionGroup
              label="Curl Pattern"
              options={['Straight', 'Wavy', 'Curly']}
              selected={curlPattern}
              onSelect={setCurlPattern}
            />
            <OptionGroup
              label="Color Contrast"
              options={['Low', 'Medium', 'High']}
              selected={colorContrast}
              onSelect={setColorContrast}
            />
          </div>
        </div>

        {/* Graft Breakdown */}
        <div className="bg-white p-8 border border-slate-100 rounded-card shadow-sm">
          <h3 className="text-lg font-semibold mb-6 font-serif">
            Estimated Graft Count
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="text-left py-3 font-semibold text-slate-400 uppercase tracking-widest text-[10px] font-sans">
                    Area
                  </th>
                  <th className="text-right py-3 font-semibold text-slate-400 uppercase tracking-widest text-[10px] font-sans">
                    Mid Estimation
                  </th>
                  <th className="text-right py-3 font-semibold text-slate-400 uppercase tracking-widest text-[10px] font-sans">
                    Full Range
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 font-sans">
                <tr>
                  <td className="py-4 font-medium text-slate-700">
                    Hairline / Frontal
                  </td>
                  <td className="py-4 text-right text-[#1A365D] font-semibold">
                    1,650
                  </td>
                  <td className="py-4 text-right text-slate-500">
                    1,500 - 1,800
                  </td>
                </tr>
                <tr>
                  <td className="py-4 font-medium text-slate-700">Mid-Scalp</td>
                  <td className="py-4 text-right text-[#1A365D] font-semibold">
                    1,300
                  </td>
                  <td className="py-4 text-right text-slate-500">
                    1,200 - 1,400
                  </td>
                </tr>
                <tr>
                  <td className="py-4 font-medium text-slate-700">
                    Crown / Vertex
                  </td>
                  <td className="py-4 text-right text-[#1A365D] font-semibold">
                    1,250
                  </td>
                  <td className="py-4 text-right text-slate-500">
                    1,000 - 1,500
                  </td>
                </tr>
                <tr>
                  <td className="py-4 font-medium text-slate-700">Temples</td>
                  <td className="py-4 text-right text-[#1A365D] font-semibold">
                    200
                  </td>
                  <td className="py-4 text-right text-slate-500">200 - 200</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="py-5 font-bold text-lg text-[#1A365D]">
                    Total
                  </td>
                  <td className="py-5 text-right" colSpan={2}>
                    <span className="text-2xl font-bold block text-[#1A365D]">
                      4,400 Follicular Units
                    </span>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      3,900 - 4,900 range
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-[10px] text-slate-400 leading-relaxed italic font-sans">
            *Estimates are informational and not a medical plan. Actual graft
            counts depend on scalp assessment, donor availability, and surgeon
            judgment.
          </p>
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        {/* Pricing */}
        <div className="bg-white p-6 border border-slate-100 rounded-card shadow-sm">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6 font-sans">
            Estimated Investment
          </h3>

          <div className="mb-8">
            <h4 className="font-bold text-lg font-serif">FUE Sapphire</h4>
            <p className="text-[10px] text-slate-400 uppercase tracking-wider font-sans mb-4">
              Precision blade technology
            </p>
            <div className="space-y-3 font-sans">
              <div className="flex justify-between items-center text-xs p-3 bg-slate-50 rounded-button">
                <span className="text-slate-500">Global Average</span>
                <span className="font-semibold text-slate-400 line-through">
                  $13,200
                </span>
              </div>
              <div className="flex justify-between items-center text-xs p-3 border border-[#1A365D]/20 bg-[#1A365D]/5 rounded-button">
                <span className="font-bold text-slate-700">
                  Aura Premium All-Inclusive
                </span>
                <span className="font-bold text-[#1A365D]">$3,650</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg font-serif">DHI Implantation</h4>
            <p className="text-[10px] text-slate-400 uppercase tracking-wider font-sans mb-4">
              Direct hair transplant
            </p>
            <div className="space-y-3 font-sans">
              <div className="flex justify-between items-center text-xs p-3 bg-slate-50 rounded-button">
                <span className="text-slate-500">Global Average</span>
                <span className="font-semibold text-slate-400 line-through">
                  $17,600
                </span>
              </div>
              <div className="flex justify-between items-center text-xs p-3 border border-[#1A365D]/20 bg-[#1A365D]/5 rounded-button">
                <span className="font-bold text-slate-700">
                  Aura Premium All-Inclusive
                </span>
                <span className="font-bold text-[#1A365D]">$4,550</span>
              </div>
            </div>
          </div>
        </div>

        {/* Free Analysis CTA */}
        <div className="bg-[#10B981] p-8 rounded-card text-white flex flex-col items-center justify-center text-center space-y-4 hover:bg-[#059669] transition-colors cursor-pointer group shadow-lg">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold font-serif">Free Hair Analysis</h3>
          <p className="text-sm text-white/80 font-sans">
            Send your photos for a professional surgical assessment
          </p>
          <div className="pt-4">
            <span className="bg-white text-[#10B981] px-8 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest font-sans">
              Get Started
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
