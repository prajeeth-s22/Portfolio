import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Partha Sarathi S | AI Engineer · Software Developer · Cloud Enthusiast',
  description: 'Portfolio of Partha Sarathi S — Computer Science & Engineering student specializing in AI & ML, building intelligent software, AI applications, cloud solutions, and data-driven systems.',
  openGraph: {
    title: 'Partha Sarathi S | Portfolio',
    description: 'Portfolio of Partha Sarathi S — Computer Science & Engineering student specializing in AI & ML, building intelligent software, AI applications, cloud solutions, and data-driven systems.',
    url: 'https://parthasarathi.me',
    siteName: 'Partha Sarathi Portfolio',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${inter.className}`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
