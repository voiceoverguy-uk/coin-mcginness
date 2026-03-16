import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Enquiries for film scoring, sync licensing and production music. Get in touch with composer Colin McGinness.',
  openGraph: {
    title: 'Contact | Colin McGinness Composer',
    description: 'Enquiries for film scoring, sync licensing and production music. Get in touch with composer Colin McGinness.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
