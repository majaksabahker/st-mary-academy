const faqs = [
  {
    question: '1. Where is the school located?',
    answer:
      'We are located in the Kwerjik Residential Area of Juba, South Sudan, along the Bahr El Ghazal Highway (behind Bilpam). Look for our campus on the left side when traveling from Juba city towards Terekeka.',
  },
  {
    question: '2. Is SMAK a boarding or a day school?',
    answer:
      'St. Mary’s Academy is a combined day and boarding school. We offer separate, secure, and modern dormitory facilities for both boys and girls.',
  },
  {
    question: '3. What classes (grades) are currently offered?',
    answer:
      'We offer secondary education from Senior 1 (S.1) to Senior 4 (S.4), following the South Sudan National Curriculum.',
  },
  {
    question: '4. How much are the school fees?',
    answer:
      'Day Scholars: Approximately $250 per term. Boarding Students: Approximately $500 per term (includes meals and accommodation). Please note: Fees are subject to official school policy updates.',
  },
  {
    question: '5. How much is the admission form and where can I get it?',
    answer:
      'The admission form costs 65,000 SSP. You can collect it directly from the school office at our Kwerjik campus.',
  },
  {
    question: '6. Does the school provide uniforms?',
    answer:
      'Yes, official school uniforms are mandatory. The cost is approximately $60 for day scholars and $100 for boarders (which includes a full set plus a tracksuit/sportswear).',
  },
  {
    question: '7. Does the school offer scholarships?',
    answer:
      'Yes. SMAK is committed to rewarding academic excellence. We recently awarded a full 4-year scholarship to the 2025 national top female CPE performer. Contact the administration for more details on merit-based aid.',
  },
  {
    question: '8. What is the language of instruction?',
    answer: 'The primary language of instruction for all subjects is English.',
  },
]

function FaqPage() {
  return (
    <section className="rounded-2xl border border-[#2F7A4D]/30 bg-white p-6 shadow-sm">
      <h1 className="text-2xl font-semibold text-[#2F7A4D]">Frequently Asked Questions (FAQ)</h1>
      <p className="mt-2 text-sm text-[#333333]">Tap each question to view the full answer.</p>
      <div className="mt-4 space-y-2">
        {faqs.map((faq) => (
          <details key={faq.question} className="rounded-lg border border-[#2F7A4D]/25 bg-[#FAFFFB] p-3">
            <summary className="cursor-pointer text-sm font-semibold text-[#1F5E3B]">{faq.question}</summary>
            <p className="mt-2 text-sm leading-6 text-[#333333]">{faq.answer}</p>
          </details>
        ))}
      </div>
      <a
        href="/"
        className="mt-5 inline-block rounded-lg border border-[#2F7A4D]/35 px-4 py-2 text-sm font-semibold text-[#1F5E3B] transition hover:bg-[#EAF5EE]"
      >
        Back to Home
      </a>
    </section>
  )
}

export default FaqPage
