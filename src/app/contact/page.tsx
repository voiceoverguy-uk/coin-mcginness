'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-cinema-accent font-medium tracking-widest uppercase text-sm mb-3">
            Contact
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Get in Touch
          </h1>
          <p className="text-cinema-muted mt-3 text-lg max-w-2xl">
            For professional enquiries regarding composition, scoring, sync licensing or any other collaboration, please use the form below.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 md:gap-12">
          <div className="md:col-span-3">
            {submitted ? (
              <div className="bg-cinema-card border border-cinema-border rounded-xl p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cinema-accent/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-cinema-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Message Sent</h3>
                <p className="text-cinema-muted">
                  Thank you for your enquiry. Colin will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-cinema-card border border-cinema-border rounded-lg text-white placeholder-cinema-muted/50 focus:outline-none focus:border-cinema-accent focus:ring-1 focus:ring-cinema-accent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-cinema-card border border-cinema-border rounded-lg text-white placeholder-cinema-muted/50 focus:outline-none focus:border-cinema-accent focus:ring-1 focus:ring-cinema-accent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-cinema-card border border-cinema-border rounded-lg text-white placeholder-cinema-muted/50 focus:outline-none focus:border-cinema-accent focus:ring-1 focus:ring-cinema-accent transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-cinema-accent hover:bg-cinema-accent-hover text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-cinema-accent/25"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          <div className="md:col-span-2">
            <div className="bg-cinema-card border border-cinema-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Professional Enquiries</h3>
              <div className="space-y-4 text-cinema-muted text-sm leading-relaxed">
                <p>
                  Colin is available for film scoring, trailer composition, production music and sync licensing opportunities.
                </p>
                <p>
                  For urgent enquiries or to discuss a specific project, please include relevant details such as production type, timeline and budget range.
                </p>
                <div className="pt-4 border-t border-cinema-border">
                  <p className="text-xs text-cinema-muted uppercase tracking-wider mb-2">Based in</p>
                  <p className="text-white">United Kingdom</p>
                </div>
                <div>
                  <p className="text-xs text-cinema-muted uppercase tracking-wider mb-2">Available for</p>
                  <ul className="space-y-1 text-white text-sm">
                    <li>Film Scoring</li>
                    <li>Trailer Composition</li>
                    <li>Production Music</li>
                    <li>Sync Licensing</li>
                    <li>Bespoke Composition</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
