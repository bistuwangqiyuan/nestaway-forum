import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import 'highlight.js/styles/github.css';
import { Providers } from '@/components/layout/Providers';
import { buildMetadata } from '@/lib/utils/seo';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
});
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-display',
  display: 'swap',
});
const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = buildMetadata({ path: '/' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="zh-CN"
      suppressHydrationWarning
      className={`${inter.variable} ${jakarta.variable} ${mono.variable}`}
    >
      <body className="font-body min-h-screen antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
