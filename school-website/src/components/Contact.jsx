import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    studentClass: '',
    message: '',
  })
  const [submitStatus, setSubmitStatus] = useState({ type: '', text: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000'

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: '', text: '' })

    const payload = {
      name: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      student_class: formData.studentClass,
      subject: `Website inquiry (${formData.studentClass || 'General'})`,
      message: formData.message,
    }

    try {
      const response = await fetch(`${apiBaseUrl}/api/contact/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      setSubmitStatus({ type: 'success', text: 'Message sent successfully. We will contact you shortly.' })
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        studentClass: '',
        message: '',
      })
    } catch {
      setSubmitStatus({
        type: 'error',
        text: 'Unable to send message right now. Please try again or call the school office.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="rounded-2xl border border-[#2F7A4D]/30 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-semibold text-[#2F7A4D]">Contact us at SMAK</h2>
      <p className="mt-2 text-sm text-[#6B7280]">
      We are here to answer your questions and welcome you to our campus. Reach out to us through any of the channels below.</p>

      Our Location
      <p className="mt-3 text-[#333333]">
        St. Mary's Academy Secondary School – Kwerjik (SMAK) is conveniently located in the Kwerjik Residential Area of Juba.
      </p>
      <p className="mt-3 text-[#333333]">
        Address: Along the Terekeka–Bahr El Ghazal Road.
      </p>
      <p className="mt-3 text-[#333333]">
        Landmarks: We are situated behind Bilpam and along the New Bongo Road leading to Terekeka.
      </p>
      <p className="mt-3 text-[#333333]">
        Map Tip: Look for us on the left side as you travel from Juba City toward Terekeka. 
      </p>
      <div className="mt-4 overflow-hidden rounded-xl border border-[#2F7A4D]/30">
        <iframe
          title="St. Mary's Academy Secondary School Location"
          src="https://maps.google.com/maps?q=Kwerjik%20Juba%20South%20Sudan&t=&z=14&ie=UTF8&iwloc=&output=embed"
          className="h-72 w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <h2 className="text-2xl font-semibold text-[#2F7A4D]">Get in Touch</h2>
      <p className="mt-3 text-[#333333]">Phone: +211 924 879 393 or +211 988 181 818.</p>
      <p className="mt-3 text-[#333333]">Email: stmarykwerjik@gmail.com.</p>
      <p className="mt-3 text-[#333333]">Office Hours: Monday – Friday, 8:00 AM to 4:00 PM.</p>

      <h2 className="mt-6 text-2xl font-semibold text-[#2F7A4D]">Online Inquiry Form</h2>
      <p className="mt-3 text-[#333333]">
        Use the form below to send inquiries about admissions, general questions, or school visits.
      </p>

      <form className="mt-4 grid gap-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName" className="mb-1 block text-sm font-medium text-[#333333]">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full rounded-lg border border-[#2F7A4D]/35 px-3 py-2 text-sm text-[#333333] outline-none focus:border-[#2F7A4D]"
            placeholder="Enter full name"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-[#333333]">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-lg border border-[#2F7A4D]/35 px-3 py-2 text-sm text-[#333333] outline-none focus:border-[#2F7A4D]"
            placeholder="Enter phone number"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-[#333333]">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-[#2F7A4D]/35 px-3 py-2 text-sm text-[#333333] outline-none focus:border-[#2F7A4D]"
            placeholder="Enter email address"
          />
        </div>

        <div>
          <label htmlFor="studentClass" className="mb-1 block text-sm font-medium text-[#333333]">
            Student&apos;s Class
          </label>
          <input
            id="studentClass"
            name="studentClass"
            type="text"
            required
            value={formData.studentClass}
            onChange={handleChange}
            className="w-full rounded-lg border border-[#2F7A4D]/35 px-3 py-2 text-sm text-[#333333] outline-none focus:border-[#2F7A4D]"
            placeholder="e.g. Senior 1"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-[#333333]">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-lg border border-[#2F7A4D]/35 px-3 py-2 text-sm text-[#333333] outline-none focus:border-[#2F7A4D]"
            placeholder="Write your message"
          />
        </div>

        {submitStatus.text && (
          <p
            className={`text-sm ${
              submitStatus.type === 'success' ? 'text-[#1F5E3B]' : 'text-[#B42318]'
            }`}
          >
            {submitStatus.text}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-block w-fit rounded-lg bg-[#1F5E3B] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#4CAF50]"
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </section>
  )
}

export default Contact
