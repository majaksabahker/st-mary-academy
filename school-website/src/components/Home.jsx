import { useState } from 'react'
import heroImage from '../assets/images/Hero.jpeg'

const heroOptions = {
  visionary: {
    label: 'Academic',
    title: 'Excellence in Education. Innovation in Learning.',
    subtitle:
      'A STEM-focused secondary school for Senior 1 to Senior 4. Modern laboratories, hands-on ICT and expert regional faculty to empower the next generation.',
    primaryCta: 'Enroll Your Child Now',
    primaryHref: '#admission',
    secondaryCta: 'View Academic Programs',
    secondaryHref: '#academics',
  },
  academic: {
    label: 'Discipline',
    title: 'A Faith-Based Environment with Strong Discipline.',
    subtitle:
      'At SMAK, character matters. A faith-based setting and a strict code of conduct help students grow into responsible, respectful and God-fearing citizens.',
    primaryCta: 'Get an Admission Form',
    primaryHref: '#admission',
    secondaryCta: 'Explore Our Campus',
    secondaryHref: '#gallery',
  },
  community: {
    label: 'Excellence',
    title: 'Home to South Sudan’s Brightest Minds.',
    subtitle:
      'From top national scholars to future innovators—discover a safe, faith-based day and boarding school designed for your child’s success.',
    primaryCta: 'Apply for Admission',
    primaryHref: '#admission',
    secondaryCta: 'Watch Our Story',
    secondaryHref: '#about',
  },
}

const heroStats = [
  'S.1 - S.4 (Curriculum)',
  'STEM-Focused (Laboratories)',
  'Day & Boarding (Facilities)',
  'Regional Staff (Expertise)',
]

function Home() {
  const [activeHero, setActiveHero] = useState('visionary')
  const currentHero = heroOptions[activeHero]
  const nextBigEvent = {
    name: 'Mid-Term Exams',
    date: new Date('2026-05-15T00:00:00'),
  }
  const today = new Date()
  const daysLeft = Math.max(
    0,
    Math.ceil((nextBigEvent.date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
  )

  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden rounded-2xl border border-[#2F7A4D]/30 bg-cover bg-center bg-no-repeat px-5 py-10 md:px-10 md:py-14"
        style={{
          backgroundImage:
            `linear-gradient(rgba(31, 94, 59, 0.72), rgba(31, 94, 59, 0.72)), url('${heroImage}')`,
        }}
      >
        {/* Hero overlays for depth */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-black/5 to-black/35" />
        <div className="pointer-events-none absolute inset-0 hero-gradient-anim opacity-30" />

        <p className="mb-4 inline-flex rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[#1F5E3B] shadow md:absolute md:right-5 md:top-5 md:mb-0">
          Fully Registered by the Ministry of General Education & Instruction
        </p>
        <div className="mb-4 flex flex-wrap gap-2">
          {Object.entries(heroOptions).map(([key, option]) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveHero(key)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition hover:shadow-sm ${
                activeHero === key
                  ? 'bg-white text-[#1F5E3B]'
                  : 'border border-white/80 bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
        <p className="mb-3 text-sm uppercase tracking-widest text-[#D7F3DE]">
          Welcome to
        </p>
        <div key={activeHero} className="relative">
          <h1 className="text-3xl font-bold leading-tight tracking-wide text-white md:text-5xl">
            {currentHero.title}
          </h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-[#E9F8ED] md:text-lg">
            {currentHero.subtitle}
          </p>
        </div>

        <div className="mt-4 inline-block rounded-lg border border-[#D7F3DE]/60 bg-[#FFFFFF]/95 px-4 py-3 shadow-sm">
          <p className="text-sm font-semibold leading-snug text-[#1F5E3B] md:text-base">
            Days until {nextBigEvent.name}: {daysLeft} Days Left!
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={currentHero.primaryHref}
            className="rounded-lg bg-[#F4C430] px-6 py-3 text-base font-semibold text-[#1F2A37] shadow-md transition hover:-translate-y-[1px] hover:bg-[#FFD447]"
          >
            {currentHero.primaryCta}
          </a>
          <a
            href={currentHero.secondaryHref}
            className="rounded-lg border border-white/80 px-6 py-3 text-base font-semibold text-white transition hover:-translate-y-[1px] hover:border-[#4CAF50] hover:bg-[#4CAF50] hover:text-white"
          >
            {currentHero.secondaryCta}
          </a>
        </div>
        <div className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {heroStats.map((item) => (
            <div
              key={item}
              className="rounded-lg border border-white/25 bg-black/35 px-3 py-3 text-sm text-white shadow-sm transition hover:-translate-y-[1px] hover:bg-black/45"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="rounded-2xl border border-[#2F7A4D]/30 bg-white p-6 shadow-sm"
      >
        <h2 className="text-2xl font-semibold text-[#2F7A4D]">What Parents Say</h2>
        <p className="mt-2 text-sm leading-6 text-[#333333]">
          Trust grows when results and character are visible.
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {[
            {
              quote:
                'SMAK has helped my child become more disciplined and confident. The support and mentorship are real.',
              name: 'Parent of a Senior 2 Student',
            },
            {
              quote:
                'The STEM lessons and practical labs make learning exciting. Students come home talking about experiments!',
              name: 'Parent of a Senior 1 Student',
            },
            {
              quote:
                'We appreciate the faith-based guidance and the consistent academic progress updates from the school.',
              name: 'Guardian, Boarding Student',
            },
          ].map((t) => (
            <article
              key={t.name}
              className="rounded-xl border border-[#2F7A4D]/20 bg-[#FAFFFB] p-4 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center gap-2">
                <span aria-hidden="true" className="text-[#F4C430]">
                  ★★★★★
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-[#333333]">{t.quote}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-[#1F5E3B]">
                {t.name}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
