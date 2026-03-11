import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Colin McGinness | Composer',
  description: 'Contact Colin McGinness for film scoring, trailer composition, production music and sync licensing enquiries.',
  openGraph: {
    title: 'Contact - Colin McGinness | Composer',
    description: 'Contact Colin McGinness for film scoring, trailer composition, production music and sync licensing enquiries.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
