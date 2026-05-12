import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'VIVANTE｜100年、時を継ぐ家。',
  description: 'coconoieが提案する新商品ブランド VIVANTE のLPです。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ja"><body>{children}</body></html>;
}
