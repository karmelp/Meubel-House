import { Metadata } from 'next';

import AuthProvider from '@/app/lib/AuthContext';
import { CartProvider } from '@/app/lib/CartContext';

import { poppins } from '@/app/ui/fonts';
import Header from '@/app/ui/components/header/Header';
import Footer from '@/app/ui/components/footer/Footer';

import '@/app/globals.scss';

export const metadata: Metadata = {
  title: {
    template: '%s | Meubel House',
    default: 'Meubel House',
  },
  description: 'Boutique furniture store',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${poppins.className}`}>
        <CartProvider>
          <Header />
          <AuthProvider>{children}</AuthProvider>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
