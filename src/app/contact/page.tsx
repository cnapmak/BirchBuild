import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | BirchBuild",
  description:
    "Get in touch with BirchBuild to discuss your development or construction management project in Chicago.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#EEF4FB] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#4A82B5] mb-3">
            Get in Touch
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-[#0B2A4A] mb-5">
            Contact Us
          </h1>
          <p className="text-lg text-[#1C3050] max-w-xl leading-relaxed">
            Tell us about your project. We&apos;ll respond within one business day.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.2fr_1fr] gap-16">
          {/* Form */}
          <div>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-[#1C3050] mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className="w-full border border-[#B5CCE5] rounded-lg px-4 py-3 text-sm text-[#0B2A4A] bg-[#EEF4FB] focus:outline-none focus:border-[#1A4F8A] transition-colors"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-[#1C3050] mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="w-full border border-[#B5CCE5] rounded-lg px-4 py-3 text-sm text-[#0B2A4A] bg-[#EEF4FB] focus:outline-none focus:border-[#1A4F8A] transition-colors"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-[#1C3050] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full border border-[#B5CCE5] rounded-lg px-4 py-3 text-sm text-[#0B2A4A] bg-[#EEF4FB] focus:outline-none focus:border-[#1A4F8A] transition-colors"
                  placeholder="jane@company.com"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-[#1C3050] mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  className="w-full border border-[#B5CCE5] rounded-lg px-4 py-3 text-sm text-[#0B2A4A] bg-[#EEF4FB] focus:outline-none focus:border-[#1A4F8A] transition-colors"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-[#1C3050] mb-2">
                  Project Type
                </label>
                <select
                  name="projectType"
                  className="w-full border border-[#B5CCE5] rounded-lg px-4 py-3 text-sm text-[#0B2A4A] bg-[#EEF4FB] focus:outline-none focus:border-[#1A4F8A] transition-colors"
                >
                  <option value="">Select a project type</option>
                  <option>New Construction — Multi-Unit</option>
                  <option>New Construction — Single Family</option>
                  <option>Mixed-Use (Commercial + Residential)</option>
                  <option>Gut Rehab / Renovation</option>
                  <option>Construction Management</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-[#1C3050] mb-2">
                  Tell Us About Your Project
                </label>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full border border-[#B5CCE5] rounded-lg px-4 py-3 text-sm text-[#0B2A4A] bg-[#EEF4FB] focus:outline-none focus:border-[#1A4F8A] transition-colors resize-none"
                  placeholder="Project size, location, timeline, and what kind of help you're looking for..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1A4F8A] text-white py-4 rounded-lg font-medium hover:bg-[#0B2A4A] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[#4A82B5] mb-3">
                Email
              </div>
              <a
                href="mailto:bereza77@gmail.com"
                className="text-[#1A4F8A] hover:text-[#0B2A4A] font-medium transition-colors"
              >
                bereza77@gmail.com
              </a>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[#4A82B5] mb-3">
                Response Time
              </div>
              <p className="text-sm text-[#1C3050]">
                We respond to all inquiries within one business day.
              </p>
            </div>

            <div className="border-t border-[#DDE9F7] pt-8">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#4A82B5] mb-4">
                What to Expect
              </div>
              <ul className="space-y-3">
                {[
                  "Initial call to understand your project and goals",
                  "A clear outline of how we can help",
                  "Clear, fixed-fee or milestone-based engagement structure",
                  "Dedicated point of contact from day one",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#1C3050]">
                    <span className="text-[#1A4F8A] mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
