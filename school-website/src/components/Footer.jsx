import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="relative mt-10 border-t border-[#2F7A4D] bg-[#1F5E3B] text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div>
          <h3 className="text-lg font-semibold">About SMAK</h3>
          <p className="mt-2 text-sm text-[#E9F8ED]">St. Mary&apos;s Academy - Kwerjik (SMAK)</p>
          <p className="mt-1 text-sm font-semibold text-[#D7F3DE]">Nurturing the Future.</p>
          <p className="mt-2 text-sm leading-6 text-[#E9F8ED]">
            We are a premier Secondary School in Juba, dedicated to academic excellence, STEM
            innovation and strong moral leadership.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-1 text-sm text-[#E9F8ED]">
            <li><a href="/#home" className="hover:text-[#4CAF50]">Home</a></li>
            <li><a href="/#about" className="hover:text-[#4CAF50]">About Us</a></li>
            <li><a href="/#academics" className="hover:text-[#4CAF50]">Academics</a></li>
            <li><a href="/#admission" className="hover:text-[#4CAF50]">Admissions</a></li>
            <li><a href="/#news-events" className="hover:text-[#4CAF50]">News &amp; Events</a></li>
            <li><a href="/#contact" className="hover:text-[#4CAF50]">Contact Us</a></li>
            <li><Link to="/faq" className="hover:text-[#4CAF50]">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Contact Info</h3>
          <ul className="mt-2 space-y-2 text-sm text-[#E9F8ED]">
            <li>Location: Kwerjik Residential Area, Bahr El Ghazal Highway, Juba, South Sudan.</li>
            <li>Phone: +211 924 879 393 | +211 988 181 818</li>
            <li>Email: stmarykwerjik@gmail.com</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <p className="mt-2 text-sm text-[#E9F8ED]">Stay updated with &quot;The Saints&quot; on social media:</p>
          <div className="mt-3 flex gap-3">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow SMAK on Facebook"
              className="rounded-full border border-white/35 bg-white/10 p-2 hover:bg-white/20"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5h1.7V4.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2V11H8v3h2.4v8h3.1z" />
              </svg>
            </a>
            <a
              href="https://wa.me/211924879393"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join SMAK WhatsApp channel"
              className="rounded-full border border-white/35 bg-white/10 p-2 hover:bg-white/20"
            >
              <svg viewBox="0 0 32 32" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M19.1 17.3c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.8.2-.2.3-.9 1-.9 1.1-.2.2-.3.2-.6.1-1.9-.9-3.1-1.7-4.4-3.8-.1-.2 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.8-2-1-2.8c-.3-.7-.5-.6-.8-.6h-.7c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.3s1 2.5 1.1 2.7c.1.2 2 3.2 5 4.5.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3z" />
                <path d="M16 3.2C9 3.2 3.4 8.8 3.4 15.8c0 2.2.6 4.3 1.7 6.2L3 29l7.2-1.9c1.8 1 3.8 1.6 5.8 1.6h.1c7 0 12.6-5.6 12.6-12.6S23 3.2 16 3.2zm0 23.3h-.1c-1.8 0-3.5-.5-5-1.4l-.4-.2-4.3 1.1 1.1-4.2-.3-.4c-1-1.6-1.5-3.5-1.5-5.4 0-5.7 4.7-10.4 10.5-10.4 2.8 0 5.4 1.1 7.4 3 2 2 3 4.6 3 7.4 0 5.8-4.7 10.5-10.4 10.5z" />
              </svg>
            </a>
          </div>
          <Link
            to="/faq"
            className="mt-4 inline-block rounded-lg bg-[#F4C430] px-4 py-2 text-sm font-semibold text-[#1F2A37] transition hover:bg-[#FFD447]"
          >
            View Full FAQ Page
          </Link>
        </div>
      </div>

      <div className="border-t border-white/20 px-4 py-4 text-center text-xs text-[#D7F3DE] md:px-6">
        <p>&copy; 2026 St. Mary&apos;s Academy Secondary School - Kwerjik. All Rights Reserved.</p>
        <p className="mt-1">
          Registered by the Ministry of General Education &amp; Instruction, South Sudan.
        </p>
      </div>

      <a
        href="#home"
        aria-label="Back to top"
        className="absolute bottom-4 right-4 rounded-full border border-white/40 bg-white/15 p-2 text-white transition hover:bg-white/25"
      >
        ↑
      </a>
    </footer>
  )
}

export default Footer
