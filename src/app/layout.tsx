import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Pankaj Jangid — Software Engineer',
  description:
    'Software Engineer with experience at Arista Networks. Full-stack & systems engineer specialising in distributed systems, real-time applications, and AI integration.',
  authors: [{ name: 'Pankaj Jangid' }],
  openGraph: {
    title: 'Pankaj Jangid — Software Engineer',
    description: 'Portfolio of Pankaj Jangid — systems & full-stack engineer.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
