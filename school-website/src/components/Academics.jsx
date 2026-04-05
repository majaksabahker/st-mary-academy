const programs = ['Sciences', 'Humanities', 'Business Studies', 'ICT & Innovation']

function Academics() {
  return (
    <section id="academics" className="rounded-2xl border border-[#2F7A4D]/30 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-semibold text-[#2F7A4D]">Academics at SMAK</h2>
      <p className="mt-3 text-[#333333]">
        “Our curriculum combines strong classroom instruction, practical learning and mentorship to support every student's growth.”
      </p>
      <h2 className="text-2xl font-semibold text-[#2F7A4D]">The National Curriculum (S.1 - S.4)</h2>
      <p className="mt-3 text-[#333333]">
        We follow the South Sudan National Secondary Education Curriculum, preparing students for the Certificate of Secondary Education (CSE). Our instruction is delivered in English by a diverse team of expert teachers from South Sudan, Kenya, and Uganda.
      </p>
      <h2 className="text-2xl font-semibold text-[#2F7A4D]">STEM-Focused Learning</h2>
      <p className="mt-3 text-[#333333]">
        We believe the future is technical. Our students don't just read about science; they experience it through:
      </p>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        <li className="rounded-lg border border-[#2F7A4D]/30 bg-white px-3 py-2 text-sm font-medium text-[#333333]">
          Modern Laboratories: Fully equipped facilities for Physics, Chemistry, and Biology.</li>
        <li className="rounded-lg border border-[#2F7A4D]/30 bg-white px-3 py-2 text-sm font-medium text-[#333333]">
          ICT & Computer Lab: Hands-on digital literacy classes to ensure every student is tech-savvy.</li>
      </ul>
      <h2 className="text-2xl font-semibold text-[#2F7A4D]">Practical & Applied Skills</h2>
      <p className="mt-3 text-[#333333]">
        Beyond textbooks, we emphasize "learning by doing." Whether it is a science experiment or a leadership workshop, we bridge the gap between theory and the real world.
      </p>
      <h2 className="text-2xl font-semibold text-[#2F7A4D]">Mentorship & Guidance</h2>
      <p className="mt-3 text-[#333333]">
        Every student at St. Mary’s Academy receives:
    </p>
    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        <li className="rounded-lg border border-[#2F7A4D]/30 bg-white px-3 py-2 text-sm font-medium text-[#333333]">
          Career Guidance: Helping students choose the right subjects for university.</li>
        <li className="rounded-lg border border-[#2F7A4D]/30 bg-white px-3 py-2 text-sm font-medium text-[#333333]">
          Moral Mentorship: Faith-based counseling to build strong character and discipline.</li>
      </ul> 
      <h2 className="text-2xl font-semibold text-[#2F7A4D]">Assessment & Excellence</h2>
      <p className="mt-3 text-[#333333]">
        We maintain high standards through regular testing, terminal exams and detailed progress reports for parents, ensuring no student is left behind.
      </p>
    </section>
  )
}

export default Academics
