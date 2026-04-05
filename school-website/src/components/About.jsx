function About() {
  const whyChooseItems = [
    {
      icon: '📘',
      title: 'Regional Teaching Excellence',
      description:
        'Our faculty is composed of highly qualified and experienced educators from South Sudan, Kenya, and Uganda, bringing a diverse and high-standard academic perspective to every classroom.',
    },
    {
      icon: '🔬',
      title: 'STEM-Driven Curriculum',
      description:
        'We do not just teach theory. With modern Science Laboratories and a dedicated ICT Computer Lab, we prepare our students for the technical demands of the 21st century.',
    },
    {
      icon: '🛡️',
      title: 'A Culture of Discipline',
      description:
        'At SMAK, character matters. Our faith-based environment and strict code of conduct ensure that students grow into responsible, respectful, and God-fearing citizens.',
    },
    {
      icon: '🏠',
      title: 'Safe & Modern Boarding',
      description:
        'We provide a home away from home with secure, separate dormitories for boys and girls, a balanced nutritional diet, and 24/7 campus security.',
    },
    {
      icon: '🏆',
      title: 'Proven Academic Success',
      description:
        'From awarding full scholarships to national top performers to winning regional public speaking titles, SMAK is already a proven center for excellence in Juba.',
    },
    {
      icon: '⚽',
      title: 'Holistic Development',
      description:
        'Education at SMAK goes beyond books. Our students thrive through competitive sports (football, basketball, volleyball), music, and leadership mentorship programs.',
    },
  ]

  return (
    <section id="about" className="rounded-2xl border border-[#2F7A4D]/30 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-semibold text-[#2F7A4D]">About</h2>
      <p className="mt-3 leading-7 text-[#333333]">
      St. Mary's Academy Secondary School – Kwerjik (SMAK) is a premier mixed day and boarding school located along the Bahr El Ghazal Highway in Juba. Established in the 2025/2026 academic year, we are dedicated to providing a transformative secondary education that blends academic rigor with moral integrity.
      </p>

      <h2 className="text-2xl font-semibold text-[#2F7A4D]">Mission</h2>
      <p className="mt-3 leading-7 text-[#333333]">
        To provide a holistic and inclusive secondary education through a rigorous STEM-supported curriculum, modern facilities and a dedicated team of regional educators. We strive to nurture every student’s potential by balancing academic achievement with moral integrity, critical thinking and physical development.</p>

      <h2 className="text-2xl font-semibold text-[#2F7A4D]">Vision</h2>
      <p className="mt-3 leading-7 text-[#333333]">
        To be a leading center of academic excellence in South Sudan, dedicated to producing disciplined, innovative and God-fearing leaders who are equipped to transform their communities and the world.</p>


      <h2 className="text-2xl font-semibold text-[#2F7A4D]">Our Values:</h2>
      <p className="mt-3 leading-7 text-[#333333]">
        Discipline: We believe dressing for success is the first step toward achievement, reflected in our sophisticated school uniform and code of conduct.
        Excellence: We celebrate academic brilliance, recently evidenced by welcoming the nation's top-performing female CPE student, Adhel Michael Mabior, to our community.
        Inclusion: A safe and inclusive environment where students from diverse backgrounds grow together.
        Integrity: Building a foundation of honesty and strong moral principles.
        Innovation: Embracing technology and science to solve real-world problems.
      </p>

      <h2 className="mt-6 text-2xl font-semibold text-[#2F7A4D]">Why Choose St. Mary&apos;s Academy?</h2>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {whyChooseItems.map((item) => (
          <article key={item.title} className="rounded-xl border border-[#2F7A4D]/25 bg-[#FAFFFB] p-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl" aria-hidden="true">
                {item.icon}
              </span>
              <div>
                <h3 className="text-base font-semibold text-[#1F5E3B]">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-[#333333]">{item.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default About
