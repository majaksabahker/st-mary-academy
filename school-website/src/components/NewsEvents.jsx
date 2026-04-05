import { useEffect, useMemo, useState } from 'react'

const fallbackItems = [
  {
    section: 'Latest',
    title: "National Hero's Welcome for Adhel Michael Mabior",
    date_text: 'March 2026',
    description:
      'The SMAK community officially welcomed Ms. Adhel Michael Mabior following her historic performance as the top female candidate in the 2025 Certificate of Primary Examination (CPE). The administration awarded her a full 4-year scholarship to complete her secondary education at St. Mary’s Academy.',
    display_order: 1,
  },
  {
    section: 'Latest',
    title: 'Excellence in Public Speaking',
    date_text: 'March 2026',
    description:
      'Congratulations to our student, Surprise, who was named the second-best speaker at the 2026 Youth Link Foundation Public Speaking Championships.',
    display_order: 2,
  },
  {
    section: 'Latest',
    title: 'Academic Support from Sunshield Co.',
    date_text: 'February 2026',
    description:
      'The school extended its appreciation to Sunshield Company Limited for the production of professional, officially branded SMAK exercise books to support student organization and school pride.',
    display_order: 3,
  },
  {
    section: 'Events',
    title: 'Science & Math Trivia Competition',
    date_text: 'February 27, 2026',
    description:
      "A major academic event challenged students' knowledge in Physics, Chemistry, Biology, and Mathematics, promoting teamwork and critical problem-solving.",
    display_order: 1,
  },
  {
    section: 'Events',
    title: 'Radio Nova 97.7 FM Appearance',
    date_text: 'February 25, 2026',
    description:
      'Our students took to the airwaves to share their voices and the vision of "The Saints" during a special morning broadcast.',
    display_order: 2,
  },
  {
    section: 'Events',
    title: 'Official Registration & Term Start',
    date_text: 'January - February 2026',
    description:
      'Registrations officially opened on January 5, 2026, with first lessons for the new academic year commencing on February 2, 2026.',
    display_order: 3,
  },
  {
    section: 'Events',
    title: 'Weekly General Assembly',
    date_text: 'Every Friday',
    description:
      'The school holds a General Instructions Assembly every Friday to provide mentorship, guidance, and weekly updates to all students.',
    display_order: 4,
  },
  {
    section: 'Calendar',
    title: 'Registration Opens',
    date_text: 'January 5, 2026',
    description: 'Start of the 2026/2027 intake for S.1 - S.4.',
    display_order: 1,
  },
  {
    section: 'Calendar',
    title: 'Term I Begins',
    date_text: 'February 2, 2026',
    description: 'Official start of lessons for all students.',
    display_order: 2,
  },
  {
    section: 'Calendar',
    title: 'Media Outreach',
    date_text: 'February 25, 2026',
    description: 'SMAK students live on Radio Nova 97.7 FM.',
    display_order: 3,
  },
  {
    section: 'Calendar',
    title: 'STEM Challenge',
    date_text: 'February 27, 2026',
    description: 'School-wide Science & Math Trivia Competition.',
    display_order: 4,
  },
  {
    section: 'Calendar',
    title: 'Scholarship Day',
    date_text: 'March 2, 2026',
    description: 'Official welcoming of CPE Top Performer Adhel Michael.',
    display_order: 5,
  },
  {
    section: 'Calendar',
    title: 'Mid-Term Exams',
    date_text: 'May 2026 (TBA)',
    description: 'Assessment of student progress for the first half of Term I.',
    display_order: 6,
  },
  {
    section: 'Calendar',
    title: 'Term II Begins',
    date_text: 'August 2026',
    description: 'Resumption of classes after the first break.',
    display_order: 7,
  },
  {
    section: 'Calendar',
    title: 'General Assembly',
    date_text: 'Every Friday',
    description: 'Weekly mentorship and school-wide announcements.',
    display_order: 8,
  },
]

function NewsEvents() {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000'
  const [items, setItems] = useState(fallbackItems)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${apiBaseUrl}/api/news-events/`)
        if (!res.ok) return
        const data = await res.json()
        if (Array.isArray(data)) setItems(data)
      } catch {
        // Keep fallback
      }
    }
    load()
  }, [apiBaseUrl])

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => (a.display_order ?? 0) - (b.display_order ?? 0))
  }, [items])

  const latest = sortedItems.filter((item) => item.section === 'Latest')
  const events = sortedItems.filter((item) => item.section === 'Events')
  const calendar = sortedItems.filter((item) => item.section === 'Calendar')

  return (
    <section id="news-events" className="rounded-2xl border border-[#2F7A4D]/30 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-semibold text-[#2F7A4D]">News & Events</h2>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold text-[#1F5E3B]">Latest News</h3>
          <ul className="mt-3 space-y-3 text-[#333333]">
            {latest.map((item) => (
              <li
                key={`${item.section}-${item.title}-${item.date_text}`}
                className="rounded-lg border border-[#2F7A4D]/25 bg-white px-4 py-3"
              >
                <p className="font-semibold text-[#1F5E3B]">
                  {item.title}
                  {item.date_text ? ` (${item.date_text})` : ''}
                </p>
                <p className="text-sm">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#1F5E3B]">Past & Upcoming Events</h3>
          <ul className="mt-3 space-y-3 text-[#333333]">
            {events.map((item) => (
              <li
                key={`${item.section}-${item.title}-${item.date_text}`}
                className="rounded-lg border border-[#2F7A4D]/25 bg-white px-4 py-3"
              >
                <p className="font-semibold text-[#1F5E3B]">
                  {item.title}
                  {item.date_text ? ` (${item.date_text})` : ''}
                </p>
                <p className="text-sm">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 rounded-lg border border-[#2F7A4D]/25 bg-[#EAF5EE] px-4 py-4">
        <h3 className="text-lg font-semibold text-[#1F5E3B]">Stay Connected</h3>
        <p className="mt-1 text-sm text-[#333333]">Don&apos;t miss a single update!</p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[#333333]">
          <li>WhatsApp Channel: Join our official WhatsApp channel for real-time updates.</li>
          <li>Facebook: Follow us on Facebook for the latest photos and announcements.</li>
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-[#1F5E3B]">Academic Calendar 2026</h3>
        <div className="mt-3 space-y-2">
          {calendar.map((item) => (
            <article
              key={`${item.section}-${item.title}-${item.date_text}`}
              className="rounded-lg border border-[#2F7A4D]/25 bg-white px-4 py-3"
            >
              <p className="text-sm font-semibold text-[#1F5E3B]">{item.date_text}</p>
              <p className="text-sm font-semibold text-[#333333]">{item.title}</p>
              <p className="text-sm text-[#56605A]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewsEvents
